# Homepage builder UX contract

## Primary user job

“Arrange a credible storefront homepage, change its visible content, and verify desktop and mobile before saving—without losing existing work.”

## Desktop layout

At wide desktop widths the editor uses three regions:

1. Structure: ordered list, visibility, add section.
2. Preview: storefront canvas with desktop/mobile switch.
3. Settings: fields for the selected section.

At ordinary laptop widths, structure and settings share one control rail while preview remains the larger region. No page-specific max-width is allowed; the admin shell always uses the global 90rem container.

## Mobile and tablet layout

- A segmented control switches between Sections, Preview, and Settings.
- Preview uses a true narrow viewport representation.
- Settings open as an in-flow panel or bottom sheet, never as a squeezed third column.
- All controls meet the 44px touch-target contract.

## Core actions

| Action | Behavior | Guardrail |
| --- | --- | --- |
| Select section | Highlights list row and preview boundary | Selection is not a content mutation |
| Move up/down | Changes order by one position | Disabled at first/last boundary |
| Hide/show | Toggles `enabled` | Hidden section stays in the list |
| Add section | Opens only the approved catalog | Header/footer are not offered |
| Edit setting | Updates draft and live preview | Field ownership stays in selected section |
| Undo/redo | Replays local draft mutations | Saved baseline remains identifiable |
| Save | Commits current draft in the prototype | Clear success feedback |
| Leave dirty page | Future app must warn | Prototype shows persistent “unsaved” status |

## Preview behavior

- Default preview is Desktop.
- Mobile preview is a 390px logical viewport.
- Clicking a visible preview section selects it.
- Hidden sections appear only in the structure list with an explicit Hidden pill.
- Preview controls never cover storefront actions or text.
- The slider uses manual dots/arrows only; no autoplay.

## Content editing

- The UI edits real Arabic and English values, with the current admin locale selecting the primary labels.
- Text fields show the current content, not lorem ipsum.
- Product and collection pickers use references to existing catalog records.
- Media fields show missing, selected, replacing, and error states.
- No raw HTML, arbitrary CSS, absolute positioning, nested free-form blocks, or unsupported block creation.

## Applying a theme

The theme flow is deliberately separate from homepage editing:

1. Open Themes.
2. Preview any preset without applying it.
3. Compare desktop and mobile.
4. Choose Apply theme.
5. Read a confirmation that content and order are preserved.
6. Confirm.
7. Applied badge moves to the selected theme.

## Error prevention

- Destructive wording is avoided because theme application is non-destructive.
- Hiding and removing are different actions. Batch 11 supports hiding; permanent deletion is deferred until retention/undo behavior is specified.
- A missing logo or favicon has a designed placeholder and does not block preview.
- Low-contrast brand colors produce a warning and fallback preview contrast; they do not silently publish unreadable text.
- Unsaved changes are visible in the top action bar.

## Accessibility

- Structure list is an ordered list with text buttons for movement.
- The selected row uses `aria-current` or `aria-selected` semantics.
- Preview device toggles are exposed as a labeled group.
- Confirmation is a keyboard-operable dialog with focus containment in production.
- Motion is short and reversible; reduced motion removes translations and keeps opacity feedback minimal.
