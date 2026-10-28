# All Noor Furniture House — Sofa Maker

A bilingual (English/Urdu), responsive, single-page static website built with React, Vite and Tailwind CSS.

## Included
- English / Urdu language switcher with right-to-left layout for Urdu
- Responsive navigation and mobile menu
- Furniture category catalogue with clearly marked image placeholders
- Custom furniture enquiry section
- Click-to-chat WhatsApp links and direct phone links
- Business location, opening hours and delivery information
- SEO description and responsive styling

## Business details included
- **Business:** All Noor Furniture House — Sofa Maker
- **Primary contact:** Saqib Ch. — 0320 8424265
- **Secondary contact:** Atif Ch. — 0308 4734825
- **Location:** Nakhuda Chowk, near Butt Chair House, Lahore, Pakistan
- **Hours:** Daily, 10:00 AM–10:00 PM
- **Delivery:** Across Pakistan

Please verify all contact details before publishing.

## Run locally

Install Node.js (LTS) first: https://nodejs.org/

Then, from this project folder, run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Create a production build

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` directory.

## Deploy for free on Cloudflare Pages

1. Create a GitHub account if you don't already have one: https://github.com/
2. Create a new repository and upload the contents of this project folder.
3. Sign in to Cloudflare: https://dash.cloudflare.com/
4. Open **Workers & Pages** and create a Pages project connected to your GitHub repository.
5. Choose these build settings:
   - **Framework preset:** Vite (if offered)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Deploy. Cloudflare will provide a `*.pages.dev` address.

Cloudflare's product and free-plan terms can change, so check its current limits before publishing. A custom domain is optional and usually needs to be purchased separately.

## Replace the image placeholders

The first version intentionally uses designed placeholder blocks, not fake photographs of your actual products.

In `src/App.jsx`, find the sections labelled:
- `hero-photo-placeholder`
- `category-art`
- `custom-visual`

Replace the placeholder markup with your real image files when you have them. Put image files in `public/images/` and reference them with paths such as `/images/sofa-set.jpg`. Use compressed WebP or AVIF images when possible.

Suggested initial photos:
- A strong hero image of your best sofa set
- 2–3 sofa set photographs
- 1 sofa-cum-bed photograph
- 1 dining set photograph
- 1 chair or cushion photograph
- 1–2 workshop / custom project photographs

## Update business details

Contact numbers and WhatsApp messages are defined near the top of `src/App.jsx`:
- `PHONE_SAQIB`
- `PHONE_ATIF`

WhatsApp links use the international format without a leading `+` (Pakistan country code `92`). Review the displayed numbers and test both WhatsApp links before publishing.

## Notes
- No backend, database, checkout, or online payments are included.
- No prices are displayed by design.
- Urdu copy is included, but please ask a fluent Urdu reader to proofread the wording before launch.
- Google Fonts are loaded from an external service. If you need fully self-hosted fonts, replace the import in `src/index.css`.

## Furniture photos

The `public/images/` folder contains the furniture photos supplied for the site. The home hero and the new sofa-design gallery use these local images. To replace a photo, keep the corresponding filename (`sofa-01.jpg` through `sofa-14.jpg`) or update the `galleryPhotos` list in `src/App.jsx`.
