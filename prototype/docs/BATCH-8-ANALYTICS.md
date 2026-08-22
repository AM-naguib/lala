# Batch 8 — Dashboard and Analytics

This file records the portable static contract implemented in Batch 8.

## Screens

- `dashboard.html` — daily operational summary and direct action queues.
- `analytics-overview.html` — ranges, comparison, metric definitions, and CSV export.
- `analytics-orders.html` — count and order value for the exact seven core statuses.
- `analytics-products.html` — product ranking toggled between Units and Value.

## Fixed definitions

- Date presets are Today, Yesterday, 7 days, 30 days, and Custom range.
- Comparison is the immediately previous equivalent period.
- Period boundaries and displayed times use Cairo time.
- Data refresh is communicated as approximately once a minute.
- Sales is the total value of all orders created in the visible range, including New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned.
- Orders analytics keeps count and value separate for every core status.
- Product Value is product-line order value, not profit.
- Estimated profit is not part of Phase 1.
- CSV export uses the visible date range and active filters or ranking.

## UX placement

Dashboard is the default daily workspace. Analytics is a separate level-one Merchant module with Overview, Orders, and Products as internal sections. All screens preserve the shared `max-w-app` content container and mobile primary navigation.

## Boundary

The implementation is static HTML with Tailwind CSS v4 classes and Alpine.js prototype state. It does not add persistence, a charting library, server-side analytics, or Laravel code.
