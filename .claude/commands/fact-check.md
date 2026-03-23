---
description: Fact-check website content claims using Perplexity web search. Run before publishing any page.
argument-hint: "[file-path or section description]"
---

# Fact-Check Website Content

Verify factual claims in website content against live web data.

## Why this exists

Website copy may contain claims about Bachata, health benefits, statistics, venue details, or competitor comparisons that sound plausible but haven't been verified. Web-grounded search with cited sources is the safety net before going live.

## Process

1. **Check arguments and tools**
   - If $ARGUMENTS is empty, ask the user which file or section to fact-check. Do not guess.
   - If Perplexity tools are not available, inform the user the MCP server may not be running.

2. **Read the content** at the path provided in $ARGUMENTS
   - Works with HTML, markdown, or raw text sections.

3. **Extract every verifiable factual claim**, including:
   - Claims about Bachata (origins, health benefits, calorie burn, popularity)
   - Venue addresses and postcodes (verify against Google Maps)
   - Class times and pricing (cross-reference against `../Latin Addiction/KNOWLEDGE-BASE.md`)
   - Statistics and percentages (e.g., "100+ students weekly")
   - Any "burns X calories", "X% of people", or similar quantified claims
   - Competitor or market positioning claims
   - If more than 20 claims, prioritise the highest-risk ones first and ask the user if they want full verification.

4. **Verify each claim** using Perplexity tools:
   - Use `perplexity_ask` for most claims (cheapest, uses sonar model)
   - Use `perplexity_search` when you need to find a specific source
   - Only use `perplexity_research` if the user explicitly requests deep verification
   - Batch related claims into single queries where possible to minimise API calls

5. **Report findings** in this structure:

   ### Verified
   - [Claim] -- [Source URL or description]

   ### Unverified (no source found)
   - [Claim] -- could not find supporting evidence

   ### Contradicted
   - [Claim] -- evidence suggests [correction] -- [Source]

   ### Outdated
   - [Claim] -- was true as of [date] but current data shows [update] -- [Source]

6. **Recommend action** -- If any claims are contradicted or outdated, suggest specific corrections with the correct figures and sources.

## Cost awareness

| Tool | Approx cost per query (USD) | When to use |
|---|---|---|
| `perplexity_search` | ~$0.005 | Finding a specific source/URL |
| `perplexity_ask` (sonar) | ~$0.007 | Verifying individual claims (DEFAULT) |
| `perplexity_research` (deep) | ~$0.10-0.50 | Only when user explicitly requests deep verification |

**For `perplexity_research` calls only:** Ask the user for confirmation BEFORE running.

## Rules

- Do NOT modify the content. Report findings only.
- Be specific about sources. Include URLs where possible.
- If a claim cannot be verified either way, say so honestly.
- Flag claims that sound plausible but have no supporting evidence. These are the highest risk.
- Always end with: "Note: Web verification reduces but does not eliminate error risk. Human judgment remains the final gate."
