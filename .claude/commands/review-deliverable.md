---
description: Independent review of a design doc or website content. Catches contradictions, inaccuracies, and generic filler.
argument-hint: "[file-path]"
allowed-tools: Read, Glob, Grep
---

# Review Deliverable

Perform an independent structural and content review of a website deliverable.

## Design principle (evidence-based)

This review works by deliberately limiting what you read, simulating a fresh perspective. You must NOT reference anything from your conversation history when performing this review. Pretend you have not seen this document before.

For true context separation, the user should ideally run `/clear` before invoking this command.

## Process

1. **Check arguments**
   - If $ARGUMENTS is empty, ask the user which file to review. Do not guess.

2. **Read ONLY these files:**
   - The deliverable at the path in $ARGUMENTS (works with markdown, HTML, and .astro files; for HTML/Astro, focus on text content, ignore markup/CSS/frontmatter)
   - `../Latin Addiction/KNOWLEDGE-BASE.md` (single source of truth for operations, pricing, schedules, and business data)
   - If a design doc exists at `docs/plans/`, read the most recent one for consistency checks
   - Nothing else. Do NOT read memory files, conversation history, or other project files.

3. **Review for these specific issues:**

   **Critical (flag immediately):**
   - Pricing that contradicts KNOWLEDGE-BASE.md (SumUp store prices)
   - Class times or schedule data that contradicts KNOWLEDGE-BASE.md
   - Venue details (address, parking) that don't match KNOWLEDGE-BASE.md
   - Factual claims that contradict each other within the document
   - Missing sections that the document's own structure implies should exist

   **High:**
   - Generic dance school filler that isn't specific to Latin Addiction (e.g., "world-class instruction" instead of something real)
   - Copy that sounds AI-generated rather than human (buzzwords, corporate tone, excessive enthusiasm)
   - Logical gaps where the conversion funnel breaks (e.g., CTA that goes nowhere, section that raises a question the next section doesn't answer)
   - Inconsistent messaging (e.g., "no commitment" in one place but implying commitment elsewhere)
   - Content that would confuse Person A (jargon, assumed knowledge about dance)

   **Medium:**
   - Repetition of the same point across sections
   - Unclear or ambiguous CTAs
   - Sections that are too thin relative to their importance
   - Missing practical details a newcomer would need

4. **Report findings** with severity levels and specific section references.

5. **Overall assessment**: Is this ready to ship? What is the single most important fix?

## Rules

- Read-only. Do NOT modify the deliverable.
- Be genuinely critical. The user wants blind spots found, not reassurance.
- If the deliverable is genuinely good, say so briefly and move on.
- Focus on substance, not formatting or grammar (unless egregious).
- Do NOT reference your conversation history. The deliberate context limitation is what makes this review valuable.
