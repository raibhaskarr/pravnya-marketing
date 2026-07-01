# Pravnya Marketing

This repository contains public marketing assets and website implementation for Pravnya.

The source of truth for company philosophy remains `../pravnya-docs/`. The source of truth for
sales and investor materials remains `../pravnya-sales/`.

## Structure

```text
pravnya-marketing/
├── docs/
│   ├── website-design-handbook.md
│   └── pravnix-website-handbook.md
├── website/
│   └── Next.js implementation for Pravnya.com
└── pravnix-website/
    └── Next.js implementation for the Pravnix Labs company site (pravnix.ai)
```

## Responsibilities

- Pravnya.com marketing website
- Pravnix.ai company website
- Website design and content handbooks
- Marketing implementation assets
- Future public marketing pages and campaigns

Investor decks, fundraising narratives, and sales exports belong in `../pravnya-sales/`.

## Deployment

Both sites are configured for Render with a single `render.yaml` at the repository root,
each as its own service pointed at a different root directory:

```text
pravnya-marketing-website   rootDir: website           → pravnya.com
pravnix-website             rootDir: pravnix-website    → pravnix.ai
```

Both use the same build/start commands:

```text
Build command: npm ci && npm run build
Start command: npm run start -- -p $PORT
```

`pravnix-website` needs a `CONTACT_FORM_WEBHOOK_URL` env var set in the Render dashboard
(left unset, the contact form falls back to a mailto link instead of failing silently).

To connect a service defined in `render.yaml` that doesn't exist on Render yet, use the
dashboard's **New > Blueprint** flow (or **New > Web Service** pointed at the same root
directory) — the Render CLI can validate a blueprint (`render blueprints validate`) but
can't create a service from scratch.
