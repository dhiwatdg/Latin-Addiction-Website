interface Env {
  SUMUP_SECRET_KEY: string;
}

const ALLOWED_ORIGINS = ['https://latinaddiction.co.uk', 'http://localhost:4321'];
const MERCHANT_CODE = 'MNVNX9YF';

function corsHeaders(origin: string | null): Record<string, string> {
  const o = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return { 'Access-Control-Allow-Origin': o, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin');
    const cors = corsHeaders(origin);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return Response.json({ error: 'Method not allowed' }, { status: 405, headers: cors });

    const { productId, amountPence, description } = await request.json<{ productId: string; amountPence: number; description: string }>();

    if (!Number.isInteger(amountPence) || amountPence < 100 || amountPence > 50000) {
      return Response.json({ error: 'Invalid amount' }, { status: 400, headers: cors });
    }

    const res = await fetch('https://api.sumup.com/v0.1/checkouts', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.SUMUP_SECRET_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        checkout_reference: `LA-${productId}-${Date.now()}`,
        amount: amountPence / 100,
        currency: 'GBP',
        merchant_code: MERCHANT_CODE,
        description,
      }),
    });

    if (!res.ok) return Response.json({ error: 'Payment unavailable' }, { status: 502, headers: cors });

    const data = await res.json<{ id: string }>();
    return Response.json({ checkoutId: data.id }, { headers: cors });
  },
};
