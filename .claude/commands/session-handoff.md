---
name: session-handoff
description: End-of-session handoff. Updates memory, docs, and summarises progress.
user-invocable: true
allowed-tools: Read, Edit, Write, Glob, Grep, Bash
---

# Session Handoff

End the current session cleanly by updating all docs and preserving context.

## Steps

1. **Identify what changed this session**
   - What was accomplished
   - What files were created or modified
   - Any decisions made or preferences expressed
   - Any deadlines or upcoming tasks discussed

2. **Update memory files**
   - Update or create relevant memory files in `/Users/dhiwatdg/.claude/projects/-Users-dhiwatdg-Projects-Latin-Addiction-Website/memory/`
   - Each memory file needs frontmatter: name, description, type (user/feedback/project/reference)
   - Update MEMORY.md index if new memory files were added or existing ones changed
   - Don't duplicate info already in memory — update existing files where possible

3. **Update CLAUDE.md**
   - If project structure changed (new folders, key files), update accordingly
   - If priorities shifted, note them
   - Keep it concise — CLAUDE.md is a quick reference, not a full history

4. **Git operations** (if project is a git repo)
   - Stage only the relevant files
   - Write a clear commit message summarising the session's work
   - Push to remote if configured

5. **Show handoff summary**
   - What was done (bullet points)
   - What's pending for next session
   - Any blockers or upcoming deadlines
   - Key decisions made that future sessions need to know
