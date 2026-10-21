# Portfolio website (Sriya-style shell, 3 projects)

Static site: plain HTML + CSS + JavaScript. No build step, no dependencies.

## Run locally
- Quickest: double-click `index.html`.
- Or serve the folder: `python3 -m http.server 8000` then open http://localhost:8000
- Needs internet only for Google Fonts (League Gothic, Montserrat, Caveat). Offline it falls back to Impact / system fonts.

## Folder structure
```
index.html          page shell (nav, #app mount, loader)
css/styles.css      all styles (tokens in :root, responsive rules, motion)
js/data.js          YOUR content: personal info (ME) + projects (P)
js/main.js          router, page templates, transitions, title + scroll animations
assets/images/      put your images here
```

## Replace your personal information
Open `js/data.js` and edit the `ME` object (brand, name, role, email, phone, bio).
The contact email and phone are `mailto:` / `tel:` links read from `ME` in `js/data.js`, plus the Resume link (`ME.resume`, shown on the Contact page only). There are no social links.
About page text (education, work experience, skills, closing line) is in the `'/about'` template in `js/main.js` (search for `[YOUR EDUCATION]`).

## Replace / update project images
1. Copy images into `assets/images/` (16:10 works best for cards and work rows).
2. In `js/data.js`, add `img:'assets/images/nextstep.jpg'` to the project object.
It is used on the home cards, the Work page and the project page hero. Images are cropped to fit.
Case-study text on each project page (Overview / Process / Outcome) is placeholder text in the `proj()` function in `js/main.js`; replace it with your real content.
To add a project, add another object to `P` in `js/data.js`. Routes (`#/work/<id>`) and the "next project" link are generated automatically.

## About page image slots
In the `'/about'` template (`js/main.js`) there are placeholders for the portrait cutout (`.cut`), the feature photo (`.ph2`) with handwritten notes (`.hw`), and 7 photo circles (`.cl`). Replace a placeholder's text with `<img src="assets/images/photo.jpg" alt="describe it">`. Remove the `.hw` notes if your image already has them baked in.

## Behaviour notes
- Hash routing (`#/about`, `#/work`, `#/work/nextstep`, `#/contact`); refresh works.
- Page transition: fade/slide out, render, then letter-by-letter title reveal.
- Intro loader plays once per browser session. Reduced-motion users get no non-essential animation.

## Deploy
Upload the folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Not included yet
Real Meryl Roberts case-study text and images, shared-image transition into project pages, a dedicated mobile menu.

## Image map (assets/images/)
- portrait.png → Home hero portrait over the ghost "ABOUT"
- origin.png → Home "My Origin Story" cutout
- portrait2.png → About page portrait (cropped to the visible cutout with CSS; the file is untouched)
- feature.jpg → About feature photo (3:2)
- photo1–7.jpg → About photo circles (1–7)
- sideline1.jpg.png, sideline2–6.jpg → "The Sidelines" strip
No images were supplied for NextStep, Numsy's Quest, Samagri or Contact yet. Add `img:'assets/images/<file>'` to each project in js/data.js.

## Origin Story background
Set `ORIGIN_BG` in `js/data.js` (e.g. `'assets/images/origin-bg.jpg'`) to show your background photo; until then a placeholder label is shown. Phone number is `ME.phone` in `js/data.js`.

## NextStep case study
- Home card, Work row: `img` in `js/data.js` (assets/images/nextstep2.png). Project page hero: `video` (assets/video/nextstep1.mp4, poster = nextstep1-poster.jpg, taken from the video).
- All case-study text is in `js/data.js` under NextStep -> `case` (overview, research, define, prototyping, reflecting).
- Research video: `case.research.video` (assets/video/nsresearch.mp4, poster taken from the video).
- Prototyping layout follows `assets/images/_reference/ref1.png` (screens right and flush to the edge with text left; phone left with text right). GIFs are loaded from framerusercontent.com (links as given), so they need an internet connection. To host them yourself, download them to `assets/images/` and change `src` in `case.prototyping`.
- Define illustrations (`assets/images/ns-*.png`) were cut from your `nsdefine.png` reference and recoloured to light line-art for the dark theme; the original is in `assets/images/_reference/`.

## Spotify Sync (replaces Numsy's Quest)
- Card / Work image: `assets/images/Spotify_cover.png`. Page content is `media` in `js/data.js`, shown as one continuous column in this order: s1.png, sv1-sv4.mp4, s2-s5.png (the same format as the reference recording).
- Edit `title` / `tags` if you want different wording. (Optional: add a `meta: { date, role, type, tools }` object to show Date / Role / Type / Tools lines under the tags.)
- NextStep Prototyping now uses `for_teachers.mp4`, `for_parents.mp4`, `for_psychologists.mp4` (assets/video/).
- If the case studies were created by someone else, add their credit in the page text; the project pages do not include a credit line by default.

## Google Maps Parking (replaces Samagri)
- Card / Work image: `assets/images/gm_cover.png`. Page content is `media` in `js/data.js`: gm1 intro image, five colour panels (gm2-gm6, each with its own title, text and colours) and the walkthrough video with its text.
- The phone screens gm2-gm6 had a solid black surround; it was made transparent so they sit on the colour panels (originals are in `assets/images/_previous/`).
- Every project page now opens with the same heading, description and tags (name, `title`, `tags` in `js/data.js`).

## v2 redesign (purple palette + motion)
- `js/fx.js` holds all section effects (one requestAnimationFrame loop; each effect runs only while on screen; respects prefers-reduced-motion):
  - Home hero: two huge drifting rows (MANSOOR / SHAIKH, constant speed, unaffected by hover) behind `assets/images/image2.png`; greyscale portrait with a fading colour-reveal trail that follows the cursor (wanders on its own on touch screens).
  - Curated Projects: pinned scroll stage, the centre image / text / selector row follow scroll; hover or click the selector to jump.
  - Sidelines: tilted polaroids that drift sideways (drag to move, slows on hover, centre card grows).
  - About gallery: greyscale -> colour drag carousel (mouse/touch drag with momentum, arrow keys when focused) with the 7 photos from the old collage.
  - Work page: halftone heading and tilting project images, same language as the curated stage.
- Brand is `ME.brand` = "M.S" (nav logo and loader). Origin Story uses `assets/images/image3.png`; the old background photo was removed.
- Colours: the palette lives in the `:root` variables at the top of `css/styles.css` (--bg, --rose [lavender accent], --txt, --dim, --line).
