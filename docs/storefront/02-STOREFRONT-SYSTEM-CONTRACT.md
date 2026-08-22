# Storefront system contract

## 1. Separation of systems

The merchant admin and the public storefront have different jobs and therefore different token domains.

| Domain | Purpose | Width contract | Styling ownership |
| --- | --- | --- | --- |
| Merchant admin | Operate orders, products, settings, and theme tools | Existing `--lala-content-max: 90rem` | Fixed lala Design System |
| Storefront | Customer browsing and buying | `--storefront-content-max: 80rem` | Selected theme preset |
| Storefront preview | Render the customer view inside admin | Same 80rem canvas, scaled only when necessary | Storefront tokens, never admin card styles |

## 2. Data ownership

The minimum conceptual state is:

```js
storefront = {
  appliedThemeId: 'essential',
  draftThemeId: 'essential',
  brand: {
    storeName: 'Luna Store',
    logo: null,
    favicon: null,
    primaryColor: '#1f2937',
    accentColor: '#c8794a',
    fontId: 'plex-arabic'
  },
  home: {
    sections: [
      { id: 'hero-1', type: 'hero', enabled: true, settings: {} }
    ]
  }
}
```

Theme application may update only `appliedThemeId` and `draftThemeId`. Brand changes may update only `brand`. Builder actions may update only `home.sections`.

## 3. Hard invariants

1. Theme application never rewrites section IDs, order, visibility, text, media references, product references, or collection references.
2. Header and footer are system regions. They can be configured through their own future controls but cannot be removed or reordered among homepage sections.
3. Only types in the section catalog can be inserted.
4. Every section has a stable ID independent of its position.
5. Hidden sections remain in the document and can be restored.
6. Arabic and English share one content record per translatable field; a missing translation is surfaced as incomplete, not silently deleted.
7. The preview renderer and the future public storefront consume the same section schema.

## 4. Theme preset schema

Each preset defines values and constrained variants, not arbitrary CSS:

```js
themePreset = {
  id: 'essential',
  tokens: {
    colorSurface, colorInk, colorMuted, colorAccent,
    radiusCard, radiusControl,
    spaceSection, contentMax,
    headingScale, bodyScale
  },
  variants: {
    header: 'compact',
    hero: 'split',
    productCard: 'quiet',
    collectionCard: 'image-top'
  }
}
```

Presets may change colors, type scale, corner treatment, vertical rhythm, header composition, hero composition, and card presentation. They may not change business data, routes, stock rules, order behavior, COD behavior, accessibility requirements, or supported languages.

## 5. Token bridge

All storefront design tokens are first defined as CSS custom properties. Tailwind v4 mappings reference those variables inside `@theme inline`, so the same file can move to the future production pipeline without rewriting the token values.

Required storefront token groups:

- Color: background, surface, ink, muted, border, accent, accent contrast.
- Typography: UI/body family, display size steps, body line-height, Arabic line-height.
- Shape: card, control, media, and pill radii.
- Layout: content maximum 80rem, reading maximum, section spacing, grid gaps.
- Motion: fast, base, emphasized easing, with reduced-motion override.

## 6. Rendering contract

- Every section renderer accepts `locale`, `dir`, `theme`, and `section`.
- Renderers use logical spacing and alignment.
- Operational values are isolated using `dir="ltr"` and `bdi`/`dir="auto"` as appropriate.
- Images include dimensions and meaningful alternative text.
- Section controls shown in admin are not part of the customer DOM.
- Empty optional content collapses intentionally; it does not leave visual gaps.

## 7. Save model for the static prototype

Batch 11 simulates drafts in Alpine state. Save, apply, undo, and redo are demonstrable but do not persist across a page reload. The UI labels this as a prototype behavior. The later application layer must add optimistic concurrency/version checks so one browser session cannot silently overwrite another.
