# Batch 7 — Shipping zones and Bosta

> Portable static delivery contract. This batch does not connect to Bosta or persist data.

## Screen inventory

| Screen | File | Parent | Primary action |
|---|---|---|---|
| Shipping zones | `shipping-zones.html` | Shipping | Add zone |
| Zone editor | `shipping-zone-editor.html` | Shipping → Zones | Save zone |
| Custom locations | `custom-locations.html` | Shipping | Add location |
| Integrations | `shipping-integrations.html` | Shipping | Manage Bosta |
| Bosta connection | `bosta-connection.html` | Shipping → Integrations | Validate and save |

## Fixed UX hierarchy

Shipping is one level-one Merchant module. Zones, Custom locations, and Integrations are related internal sections. Bosta connection is a child flow under Integrations.

## Required states

- Active-zone overlap is blocked.
- A zero-price zone is displayed as Free shipping.
- Unsupported locations block checkout coverage.
- Custom cities and areas are private to the store.
- Credential validation exposes connected, disconnected, and actionable error states.
- Orders expose Not sent, Sending, Sent, Failed with reason/retry, and duplicate-active-shipment blocking.
- Bulk submission summarizes sent, blocked, and failed records.

## Provider boundary

Creating a shipment does not itself change the controlled core order status. Bosta events normalize as:

- `accepted` → Processing
- `picked up` or `in transit` → Shipped
- `delivered` → Delivered
- `cancelled` → Cancelled
- `returned` → Returned

No manual carrier or tracking-number fields appear when no provider is connected. No real credentials or provider calls are included in the static prototype.

