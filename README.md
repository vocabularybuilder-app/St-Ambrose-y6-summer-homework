# St Ambrose — Blessed Edmund Rice & the Eight Essentials

A single-page interactive site built for St Ambrose. The college crest sits at the centre with the Eight Essentials arranged around it. Tap the crest to meet Blessed Edmund Rice; tap any of the eight emblems to see how that essential connects to his life.

Made by Sebastian.

## What's inside

```
index.html          the page structure and content
styles.css           the navy-and-gold theme, layout, and pop-up styling
script.js             opens/closes the pop-up and holds all its text
assets/                the eight essential icons (cropped from the supplied artwork)
```

## Try it locally

No build step or installs needed — it's plain HTML, CSS and JavaScript. Either:

- double-click `index.html` to open it in a browser, or
- serve the folder so the pop-ups and images behave exactly as they will online:
  ```
  python3 -m http.server
  ```
  then visit `http://localhost:8000`.

## Publish it with GitHub Pages

1. Create a new GitHub repository and add these files to it (keep `index.html`, `styles.css`, `script.js` and the `assets` folder all at the same level).
2. Push to the `main` branch.
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set the branch to `main` and the folder to `/ (root)`, then **Save**.
6. GitHub publishes the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two — refresh that Pages settings screen to get the exact link.

## Editing the content

- **Text in the pop-ups** — open `script.js` and edit the `content` object near the top. Each entry has a `title` and a `body`.
- **Icons** — replace a file in `assets/` with a new image of the same name, or change the file name in both `index.html` and `script.js`.
- **Footer credit** — edit the `<footer>` near the bottom of `index.html`.
