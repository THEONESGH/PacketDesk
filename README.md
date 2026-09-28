# PacketDesk

Qualification audits, industrial proof packs, and bid-invite response tooling for operating companies.

This repo is the production source for the PacketDesk web app. It is not a Bolt.new project.

## What it does

PacketDesk packages the proof industrial buyers already ask for — legal name, parish, W-9, COI, license numbers, named projects, and a response path — so a crew-based company can survive a qualification desk.

It does not sell access to SpaceX or any prime contractor.

See [SUMMARY.md](./SUMMARY.md) for the full product description.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
