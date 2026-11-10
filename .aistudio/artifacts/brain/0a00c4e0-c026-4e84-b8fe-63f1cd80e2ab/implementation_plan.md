# Dual Currency Toggle & Bulk Google Maps Importer

Implement an interactive dual currency toggle ($ USD and Bs. VES at official BCV exchange rate) with prominent display across all microsites, alongside a batch Google My Business URL importer for rapid bulk onboarding.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during clarification:
> - **Conversion Priority**: Dual currency pricing toggle in USD ($) and Venezuelan Bolivars (Bs. VES) using live official BCV exchange rates.
> - **Visual Direction**: Retain the unified, luxury black and gold theme across all microsites without fragmented color palettes.
> - **Onboarding Efficiency**: Implement a batch importer allowing users to paste multiple Google Maps URLs simultaneously (one per line) to generate microsites in bulk.

---

## 1. Overview & Core Concept

### Dual Currency Experience ($ USD / Bs. VES)
In Ciudad Guayana / Puerto Ordaz (and Venezuela broadly), customers consistently need to view pricing in both USD ($) and Venezuelan Bolivars (Bs.) at the official Banco Central de Venezuela (BCV) rate. 
This feature introduces:
- A prominent one-tap currency toggle in the top navigation bar (`$ USD` ⇄ `Bs. VES`) accompanied by a subtle live official BCV exchange rate badge (e.g., `Tasa BCV: 75.40 Bs.`).
- Dual pricing display across all menu cards, chef recommendations, product detail pages, and checkout cart drawers (e.g., `$18.50 · 1,394.90 Bs.`).
- WhatsApp checkout message formatting that includes total amounts in both USD and Bolivars, specifying the payment method (Pago Móvil / Zelle / Efectivo / Tarjeta).

### Bulk Google Maps Listing Importer
A streamlined modal interface in the top bar where the user can paste an arbitrary number of Google My Business URLs:
- Parses and validates each URL (extracting business names, geographic coordinates, and specialties).
- Categorizes each listing automatically (Parrilla/Steakhouse, Pizzería/Italiana, Marisquería, Árabe/Libanés, etc.).
- Dynamically assigns tailored signature culinary photography, authentic reviews, coordinates, and contact details.
- Registers all parsed microsites into the active registry in a single click and allows switching between them immediately.

---

## 2. User Experience & Visual Design

### A. Navigation & Live Currency Toggle
- **Top Bar Integration**: Positioned cleanly next to the business switcher and font selector, rendering as a segmented pill:
  ```
  [ $ USD | Bs. ] · Tasa BCV: 75.40 Bs.
  ```
- **Instant State Propagation**: Switching currency instantly updates all displayed prices on screen with smooth number transitions without reloading the page.

### B. Dual Price Rendering on Cards & Detail Views
- **Primary vs. Secondary Price**: When USD is selected, the primary price is bold gold (`$18.50`), and underneath or alongside sits the Bolivar conversion in subtle muted text (`≈ 1,394.90 Bs.`). When VES is selected, the Bolivar amount becomes primary (`1,394.90 Bs.`) with the USD equivalent indicated.
- **Cart & Checkout Transparency**: The checkout drawer shows itemized totals, delivery fees, and order summaries in both currencies, pre-populating the WhatsApp order with exact Bolivar amounts for Pago Móvil transfers.

### C. Bulk Import Modal Flow
- Accessible from the top bar via a dedicated **"Importar en Lote"** / **"Pegar Múltiples URLs"** button.
- Expands a clean textarea with line numbering and sample formatting.
- Features a progress counter (e.g., `5 negocios detectados`) with quick validation checkmarks.
- Displays a preview summary before final ingestion, listing detected names and assigned gastronomic categories.

---

## 3. Technical Architecture & Component Mapping

```
┌────────────────────────────────────────────────────────┐
│                      Top Demo Bar                      │
│  [ Demo ] [ Business ▾ ] [ Títulos ▾ ] [ $ USD | Bs. ] │
│                   [ + Importar Lote ]                  │
└───────────────┬────────────────────────┬───────────────┘
                │                        │
       ┌────────▼────────┐      ┌────────▼────────┐
       │ CurrencyContext │      │ BusinessContext │
       │ (Live BCV Rate) │      │ (Registry+Bulk) │
       └────────┬────────┘      └────────┬────────┘
                │                        │
  ┌─────────────┴────────────────────────┴─────────────┐
  │                   Microsite Views                  │
  │  ┌─────────────────┐ ┌───────────────┐ ┌────────┐  │
  │  │ Hero Carousel   │ │ Menu Catalog  │ │ Cart   │  │
  │  │ (Dual CTA Rate) │ │ (Dual Prices) │ │ Drawer │  │
  │  └─────────────────┘ └───────────────┘ └────────┘  │
  └────────────────────────────────────────────────────┘
```

### Key Technical Sequences
1. **Exchange Rate Sync (`CurrencyContext`)**:
   - Fetches official BCV rate from `https://ve.dolarapi.com/v1/dolares/oficial` with PyDolarVe fallback.
   - Caches to `localStorage` with a 15-minute revalidation interval so the site remains fast and offline-resilient.
2. **Bulk Parser Pipeline (`createBusinessFromGmbData`)**:
   - Splits input string by newlines, filters empty lines, and validates URL syntax.
   - Decodes encoded place strings (e.g. `/place/La+caba%C3%B1a/@8.2916,-62.7337`).
   - Runs category inference heuristics and maps signature photography.
   - Merges newly created profiles into existing state and persists to `custom_businesses_v1` in `localStorage`.

---

## 4. Verification & Testing Checklist

- [ ] **Currency Toggle**: Clicking USD/VES updates prices globally without visual layout shift.
- [ ] **Exchange Rate Reliability**: Fallback rate applies gracefully if user is offline or API fails.
- [ ] **Dual Price Legibility**: Both currencies display clearly on mobile viewports without text truncation.
- [ ] **WhatsApp Message Accuracy**: Formatted order text includes both USD and Bs. totals.
- [ ] **Bulk Import Processing**: Pasting 3+ Google Maps URLs successfully creates individual routes `/b/:slug` with proper coordinates, maps embeds, and food photos.
- [ ] **TypeScript & Lint Cleanliness**: Run `compile_applet` and `lint_applet` together to verify 0 errors.
