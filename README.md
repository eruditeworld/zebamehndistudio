# Zeba Mehndi Studio — Website

A premium, fully responsive static website for Zeba Mehndi Studio (Aminabad, Lucknow), built with plain HTML5, CSS3 and vanilla JavaScript only — no frameworks, no build step.

## File structure

```
zeba-mehndi-studio/
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md
├── favicon/
│   └── favicon.svg
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        ├── hero/          (1 image)
        ├── about/         (1 image)
        ├── bridal/        (3 images — showcase cards)
        └── gallery/       (10 images — filterable gallery)
```

## Before you launch — replace these

Everything below is a clearly marked placeholder. Nothing here was invented as fact about the business; replace with real, confirmed information.

1. **Photos** — every file in `assets/images/` is a labelled placeholder graphic (soft ivory background with a "REPLACE — …" label). Swap each one for a real photo of the same filename and roughly the same aspect ratio, and the layout will keep working with no code changes.
2. **About text** — marked with an HTML comment in `index.html` (search for `EDITABLE`). Replace with Zeba's own studio story. Do not add years of experience, awards, or client counts unless confirmed.
3. **Bridal showcase names** — "The Ivory Bride", "The Zeba Signature", "The Royal Trousseau" are suggested labels only, not confirmed packages or prices. Rename or remove freely.
4. **Testimonials** — the three testimonial cards are explicitly marked "Sample Testimonial" placeholders. Replace the quotes and names with real client feedback before launch, and remove the sample tag once real.
5. **Pricing** — every service and bridal card shows "Custom Quote" since no pricing was confirmed. Replace with real prices, or leave as-is if pricing is enquiry-based.
6. **Social links** — the Instagram and Facebook icons in the footer/contact link to `#` (search for `EDITABLE` near `social-row`). Replace with the studio's real profile URLs.
7. **Domain** — `index.html` currently references `https://www.zebamehndistudio.com/` in the canonical tag, Open Graph tags, JSON-LD and `sitemap.xml`. Update all of these once the real domain is confirmed.
8. **Map embed** — the contact section uses a keyless Google Maps embed built from the studio's address, so it works out of the box. For a more precise pin, go to Google Maps → Share → Embed a map, and swap the `iframe` `src` in `index.html`.

## Confirmed business details already in the site

- Name: Zeba Mehndi Studio
- Tagline: "Where Tradition Meets Timeless Beauty."
- Phone / WhatsApp: +91 89310 20349
- Address: 195, Ama Diagnostic Center, 17, Jagat Narayan Rd, Near City Station Bridge, Maulviganj, Aminabad, Lucknow, Uttar Pradesh 226018
- Services: Bridal, Wedding, Engagement, Arabic, Traditional, Customized Mehndi

## WhatsApp button

All WhatsApp buttons link to:
`https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio...`
pre-filled with: *"Hello Zeba Mehndi Studio, I would like to enquire about your mehndi services. Please share the details and availability."*
If the WhatsApp number ever changes, update the number in every `wa.me/91...` link across `index.html` (4 occurrences).

## Deployment

This is a static site — no server or build step required. Deploy by uploading the whole folder to any of:

- **GitHub Pages** — push to a repo, enable Pages on the `main` branch
- **Cloudflare Pages** / **Netlify** / **Vercel** — drag-and-drop the folder or connect the repo

## Design system quick reference

| Token | Value | Use |
|---|---|---|
| `--ivory` | `#FBF6EF` | Page background |
| `--plum` / `--plum-dark` | `#5A1F3D` / `#3E1329` | Headings, primary buttons, footer |
| `--rose` | `#D9A0AC` | Soft accent text |
| `--gold` | `#C9A15B` | Borders, dividers, icons, price tags |
| Display font | Italiana | Big headings, logo, step numerals |
| Accent font | Cormorant Garamond (italic) | Quotes, small accent phrases |
| Body font | Jost | All body copy and UI text |

All colors and fonts are defined once as CSS variables at the top of `assets/css/style.css` — change them there to re-theme the whole site.
