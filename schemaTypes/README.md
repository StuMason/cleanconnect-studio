# TidyLinker Sanity Schemas

Copy these schema files into your Sanity Studio project's `schemas/` folder.

## Setup

1. Create a new Sanity Studio:
```bash
npm create sanity@latest -- --project qouabpr4 --dataset production
```

2. Copy all `.ts` files from this folder into `schemas/`

3. Update `schemas/index.ts` with the exports from `index.ts` here

4. Add CORS origin for your studio URL in Sanity manage:
   - Go to https://sanity.io/manage/project/qouabpr4
   - Settings > API > CORS Origins
   - Add your studio URL (e.g., `https://content-studio.tidylinker.com`)

## Content Already Created

The following content has been seeded as **drafts** via the Laravel API:

- 12 pages (How It Works, Pricing, About, etc.)
- 20 FAQs across 6 categories
- 1 Site Settings document
- 1 Landing Page document

You need to **publish** these drafts in Sanity Studio to make them live.
