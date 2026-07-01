# Pravnya Marketing

This repository contains public marketing assets and website implementation for Pravnya.

The source of truth for company philosophy remains `../pravnya-docs/`. The source of truth for
sales and investor materials remains `../pravnya-sales/`.

## Structure

```text
pravnya-marketing/
├── docs/
│   └── website-design-handbook.md
└── website/
    └── Next.js implementation for Pravnya.com
```

## Responsibilities

- Pravnya.com marketing website
- Website design and content handbook
- Marketing implementation assets
- Future public marketing pages and campaigns

Investor decks, fundraising narratives, and sales exports belong in `../pravnya-sales/`.

## Deployment

The website is configured for Render with `render.yaml` at the repository root.

Render deploys only the `website/` directory:

```text
Root directory: website
Build command: npm ci && npm run build
Start command: npm run start -- -p $PORT
```

The service is configured as a Node web service named `pravnya-marketing-website`.
