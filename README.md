# FWC 2026 — Panini Duplicate Sticker Sheets

Printable A4 sheets for sticking your **duplicate** Panini stickers, one set per
national team of the FIFA World Cup 2026 (USA · Canada · Mexico).

- **48 teams** in the real Final Draw order (Groups A–L).
- **2 A4 pages per team** (`96` pages total), **9 slots per page** (3×3).
- Slots are sized for real **~5 × 7 cm** Panini stickers — which is why a team
  needs two sheets rather than one.
- **Ink-light by design:** white fills, with each team's flag and primary /
  secondary colors used only as thin accents (header band, slot borders, ticks).
- **JetBrains Mono** throughout.

## Stack

React 19 · Vite · TypeScript · Tailwind CSS v4 · Biome

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run lint       # biome check
npm run format     # biome format --write
```

## Printing

Open the app and click **Print** (or `Cmd/Ctrl+P`). The on-screen toolbar is
hidden in print; pages break one team-sheet per A4. Use the **Group** filter to
print just one group at a time. In the browser print dialog, set margins to
*None* and enable *Background graphics* so the color accents print.

## Editing the data

Everything is driven by [`src/data/teams.ts`](src/data/teams.ts) — names, FIFA
codes, groups, confederations, flag emoji, and the `[primary, secondary]` color
pair. Edit there and the pages regenerate automatically. Slot count / grid live
as constants in [`src/components/TeamPage.tsx`](src/components/TeamPage.tsx)
(`COLS`, `ROWS`, `PAGES_PER_TEAM`).
