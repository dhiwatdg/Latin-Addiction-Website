---
description: Send a design or strategy decision to Gemini, Codex, and Perplexity for adversarial critique. For UX, design, content, and conversion decisions.
argument-hint: "[decision description or file path]"
allowed-tools: Read, Glob, Grep, Bash
---

# Challenge Strategy

Get adversarial critique of a design or strategy decision from three different AI models. Use for subjective decisions where you want alternative perspectives challenged.

## Why three models?

Each model brings something different:
- **Gemini** (Google) -- Different training data, catches broad strategic blind spots. Free.
- **Codex/GPT** (OpenAI) -- Third perspective, strong on business/UX reasoning. Free.
- **Perplexity** -- Searches live web for evidence that supports or contradicts the decision. ~$0.007 per query.

## When to use

- UX decisions (single-page vs multi-page, section order, hero approach)
- Design direction (warm vs dark, font choices, layout patterns)
- Content strategy (what to include/exclude, messaging hierarchy)
- Conversion decisions (CTA placement, pricing display, funnel structure)
- Mobile-first vs desktop-first trade-offs
- Any recommendation where you want a devil's advocate

## When NOT to use

- Factual verification (use /fact-check instead)
- Document quality review (use /review-deliverable instead)
- Routine implementation choices (CSS details, component naming)

## Process

1. **Check arguments**
   - If $ARGUMENTS is empty, ask the user what decision to challenge. Do not guess.
   - If $ARGUMENTS looks like a file path, read the file
   - If $ARGUMENTS is a description, use it directly

2. **Read context**
   - Read `../Latin Addiction/KNOWLEDGE-BASE.md` for business context
   - Read any design docs in `docs/plans/` if they exist
   - Read any specific files mentioned in the arguments

3. **Sanitise before sending** (IMPORTANT)
   - Replace "Latin Addiction" with "a bachata dance school in the UK"
   - Replace personal names with roles (e.g., "the founder", "the co-founder")
   - Keep financial figures if relevant to the decision
   - Remove contact details, phone numbers, addresses, access credentials
   - This data goes to Google and OpenAI APIs. Treat as sending to third parties.

4. **Construct the core prompt** with this structure:
   - Brief anonymised business context (what they do, audience, current situation)
   - The decision being challenged (be specific about what was decided and why)
   - The instruction: "Argue the opposite case. What is wrong with this decision? What are we missing? What could go wrong? What alternative approach would you recommend instead, and why? Be specific and direct. Reference real-world examples of dance schools, fitness studios, or similar local service businesses where possible."

5. **Call all three models:**

   **Gemini** (adversarial critique):
   ```bash
   PROMPT_FILE=$(mktemp)
   cat > "$PROMPT_FILE" << 'PROMPT_END'
   [the constructed prompt]
   PROMPT_END
   npx -y @google/gemini-cli -p "$(cat "$PROMPT_FILE")"
   rm "$PROMPT_FILE"
   ```

   **Codex/GPT** (independent critique):
   ```bash
   npx -y @openai/codex exec -s read-only "[the same constructed prompt]"
   ```

   **Perplexity** (evidence-based challenge):
   Use `perplexity_ask` to search for real-world evidence that supports or contradicts the decision's key assumptions (e.g., "do single-page websites convert better for local service businesses?", "mobile-first vs responsive for dance school websites").

6. **Synthesise all three into one assessment:**
   - Where models AGREE: high-confidence critique (flag clearly)
   - Where models DISAGREE: note the disagreement and your assessment
   - Evidence from Perplexity: does real-world data support or contradict the decision?
   - Your overall verdict: which critiques have merit, which are dismissible
   - Recommended adjustments based on the critique

## Error handling

- If Gemini CLI returns an auth error, tell the user to run `npx -y @google/gemini-cli` interactively to re-authenticate
- If Codex CLI returns an auth error, tell the user to run `npx -y @openai/codex login` to re-authenticate
- If one model fails but others succeed, present what you have. Two perspectives are still valuable.
- Do NOT fall back to self-critique for failed models. The whole point is model diversity.

## Rules

- Always present the synthesised assessment, not raw outputs. The user wants one clear picture.
- Do not modify any files. This is a discussion tool.
- If all three critiques are generic or unhelpful, say so.
- Keep prompts focused. Vague prompts get vague critiques.
- Always sanitise business data before sending. See step 3.
