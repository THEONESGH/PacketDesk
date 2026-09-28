# PacketDesk — App Summary

PacketDesk is the web app for selling qualification audits, industrial proof packs, and bid-invite response work to crew-based companies.

It packages proof a prime already asks for — legal name, parish, W-9, COI, licenses, named projects — so a company can get qualified without looking unfinished. It does not sell access to SpaceX or any prime.

## Products

- 48-Hour Qualification Audit — $249
- Industrial Proof Pack — $995 standard / $1,495 rush
- Bid Invite Response Desk — $149 to $1,750
- Free readiness checklist

## App flow

`/start` → `/intake/[id]` → `/portal/orders/[id]`

Also: `/login`, `/checklist`, `/contact`, `/sample`, `/p/acadiana-site-services`

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```
