# Project Memory Working Agreement

## Purpose

Keep `lala` planning accurate, current, inspectable, and easy to resume across conversations.

## Source-of-truth order

When documents appear inconsistent, use this order:

1. Latest explicit founder instruction.
2. Latest accepted, non-superseded entry in `03-DECISIONS.md`.
3. Current snapshot in `00-PROJECT-MEMORY.md`.
4. Current Phase document.
5. Older planning notes.

Any conflict must be fixed in the documents rather than silently interpreted.

## Update rules

After every material project answer or decision:

1. Update `00-PROJECT-MEMORY.md` with the compact current state.
2. Add or supersede an entry in `03-DECISIONS.md`.
3. Remove the answered item from the active section of `04-OPEN-QUESTIONS.md` and queue the next relevant question.
4. Update the affected detailed planning document.
5. Add a dated entry to `05-CHANGELOG.md`.
6. Save the updated working copy after every material answer.
7. Commit locally as needed, then synchronize accumulated planning changes to GitHub after every 50 answered planning questions or immediately when the founder explicitly requests a push.
8. Update `08-DELIVERY-STATUS.md` whenever a design or implementation batch is accepted, delivered, revised, or completed.
9. Update `09-NEXT-WORK.md` whenever the execution order, immediate review queue, or deferred scope changes.

## Decision states

- **Proposed:** under discussion and not binding.
- **Accepted:** explicitly decided and currently binding.
- **Superseded:** replaced by a newer decision; keep it for history.
- **Rejected:** considered and explicitly declined.
- **Pending:** required but unanswered or blocked.

## Accuracy rules

- Record the founder's words faithfully while making implications and ambiguities explicit.
- Label placeholders and interpretations; never present them as approved decisions.
- Do not invent feature requirements, dates, budgets, or technology choices.
- Do not delete historical decisions to make the record look cleaner.
- Use concrete dates and the Africa/Cairo timezone for chronological records.

## Question discipline

- Ask no more than three focused questions at a time.
- Use interactive buttons for planning questions.
- Put the recommended MVP choice first and label it “(Recommended)”.
- Ask only questions that materially change the current phase.
- Avoid questions about later phases until they become necessary.
- Explain important tradeoffs when answer choices could be misunderstood.

## Git workflow

- Repository: `AM-naguib/lala` at `https://github.com/AM-naguib/lala`; accepted visibility is private, and any observed visibility mismatch must be recorded and resolved.
- GitHub synchronization cadence: every 50 answered planning questions, with an explicit immediate-push override.
- Track the current post-push question count and pending unpushed state in `00-PROJECT-MEMORY.md`.
- Local documentation commits may remain smaller than the GitHub synchronization batch.
- Code and documentation changes should not be mixed once implementation begins unless one requires the other.
- Secrets, credentials, personal data, and production customer data must never be committed.
