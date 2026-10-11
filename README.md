# A Literary Birthday — Chapter XXIII

A small, static birthday keepsake: a velvet-curtain opening, a personal letter, twenty-three interactive wishes, and a candlelit cake with numeral candles spelling 23. It uses semantic HTML, CSS, and vanilla JavaScript; there is no build step, backend, tracking, or external image dependency.

## Personalise the page

Edit [index.html](./index.html) before sharing:

- Replace `[Your Name]` in the letter and signature with your name.
- Change the letter, salutation, birthday date, wishes, and closing copy directly in the HTML as you like.
- The friend's name is intentionally not invented; add it to the greeting if you wish.
- The two numeral candles and their flames are editable in the cake markup in `index.html`.

The wishes are the 23 `.wish-card` buttons in the `#wishes` section. Keep one card for each birthday wish if you change their text.

## Run locally

No install or server is required. Open `index.html` in a modern browser. Alternatively, use a local static server such as VS Code Live Server.

Google Fonts are an optional network request; system serif and script fallbacks keep the page readable if they are unavailable. All illustrations are CSS.

## Deploy to GitHub Pages

1. Put `index.html`, `css/`, `js/`, and this README at the root of a GitHub repository.
2. Push the files to GitHub.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the branch containing the files and the `/ (root)` folder, then save.
5. Open the Pages URL GitHub provides. The page uses relative asset paths and needs no build command.

## Quick test checklist

- [ ] Open the page and activate **Open the Curtains** by mouse, touch, and keyboard.
- [ ] Confirm the curtains open once and the letter becomes visible and focusable.
- [ ] Read the full letter and follow the scroll cues to the wishes and celebration.
- [ ] Open and close several wish cards with mouse, touch, Enter, and Space; confirm there are exactly 23.
- [ ] Confirm the cake shows two animated numeral candles spelling 23.
- [ ] Activate **Make a Wish** and confirm the restrained confetti, candle glow, and final message appear.
- [ ] Check a narrow mobile viewport for readable text and no horizontal scrolling.
- [ ] Enable the operating system's reduced-motion setting and confirm motion is simplified while controls still work.
