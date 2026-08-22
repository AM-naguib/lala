# Batch 11 execution plan

## Goal

Deliver a coherent static merchant experience for selecting a theme, previewing before applying, editing brand identity, and arranging a predefined homepage. Stop before building the public storefront routes in Batch 13.

## Phase A — Foundations

1. Add storefront token primitives and Tailwind v4 mappings to the shared token stylesheet.
2. Add `--storefront-content-max: 80rem` without changing the admin `--lala-content-max: 90rem`.
3. Add a shared storefront preview component contract to the Batch 11 generator.
4. Add Storefront as a level-one admin module after Shipping and before Settings on desktop and mobile.
5. Add the Storefront local navigation: Themes, Branding, Homepage.

Exit criteria:

- No existing screen changes width.
- New pages use the same merchant shell and navigation geometry.
- The preview uses storefront tokens rather than inheriting admin cards.

## Phase B — Themes gallery (`themes.html`)

- Show all three preset cards.
- One and only one card has Applied status.
- Each card exposes Preview.
- Applying a non-current theme opens confirmation.
- Confirmation explicitly states that sections, order, visibility, and content are preserved.
- Success moves the Applied state without reloading.

States to demonstrate: applied, available, confirmation open, applied-success toast.

## Phase C — Theme preview (`theme-preview.html`)

- Preview route receives a representative theme state in the static prototype.
- Switch between Essential, Editorial, and Bold.
- Switch desktop/mobile preview.
- Switch Arabic/English and verify genuine RTL.
- Apply opens the same preservation confirmation.
- Include real representative store content and imagery.

States to demonstrate: all themes, both directions, both device widths, apply confirmation.

## Phase D — Brand settings (`brand-settings.html`)

- Store name.
- Logo with missing and selected states.
- Favicon with missing and selected states.
- Primary/accent color controls with accessible textual values.
- Curated font control; Batch 11 uses IBM Plex Sans Arabic and does not download additional font families.
- Live header/hero preview.
- Contrast warning example.

States to demonstrate: missing assets, selected assets, unsafe contrast warning, saved toast.

## Phase E — Homepage builder (`homepage-builder.html`)

- Ordered predefined sections.
- Select from list or preview.
- Move up/down.
- Hide/show without deletion.
- Add only from the section catalog.
- Edit one meaningful setting per demonstrated section.
- Desktop/mobile preview.
- Undo/redo and unsaved/saved state.

States to demonstrate: selected, hidden, reordered, add-section picker, dirty, saved.

## Phase F — Validation

Automated checks:

- Four files exist and contain component extraction markers.
- Tailwind CDN is `@tailwindcss/browser@4`; Alpine is 3.x.
- Every new primary/admin navigation includes Storefront.
- All existing and new static screens retain `max-w-app` under the fixed admin contract.
- No payment-status pills or unapproved order states are introduced.
- No arbitrary page builder block exists.

Browser checks:

- Desktop 1440×900 and mobile 390×844.
- Arabic shaping and mixed Plex Mono values in RTL.
- Theme application and modal motion.
- Builder reorder, hide/show, add, undo/redo, save.
- Visible focus, scrolling, and no horizontal page overflow.
- Missing logo/favicon and unsafe contrast states.

## Phase G — Delivery

1. Update delivery status, project memory, decision log, and changelog.
2. Copy static HTML, token changes, generator, tests, and this plan folder to the public GitHub branch.
3. Commit and push to the existing draft PR branch.
4. Create a Sites checkpoint and verify the exact deployment status and live URL.

## Definition of done

- The four screens are internally consistent and reachable from the admin navigation.
- A merchant can preview and apply any theme without content loss.
- A merchant can see and fix missing brand assets.
- A merchant can reorder and hide homepage sections and preview at mobile width.
- Real Arabic content is present and verified in-browser.
- GitHub and the published static preview reflect the same checkpoint.
