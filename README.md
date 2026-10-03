# Varta Living

Static site for Varta Living, which sells cushion covers embroidered with Australian wildlife and plants. No build step. Open `index.html` in a browser, or serve the folder with any static host.

## Pages

- `index.html`: home page with the seven plates, the status register and the close-up section.
- `richmond-birdwing.html`: the first product page. Copy it for each new product.

## Still to fill in

These appear in square brackets or as generic names on the pages.

- Prices on every card and product page.
- Cover size, fabric, thread and technique, and care instructions.
- Species names for five plates. The titles are descriptive until confirmed: blue and copper butterfly, eyed moth, purple pea flowers and pods, grevillea, wattle with seed pod.
- Confirm that plate 02 is the laced fritillary (*Argynnis hyperbius*) and plate 03 is the Richmond birdwing (*Ornithoptera richmondius*). The identifications were made from the images and the status lines depend on them.
- Cart, checkout, shipping, returns and contact pages. The cart and add to cart button do nothing yet.

## Conservation status

Status lines state what an official register said on the date shown. They were checked on 3 October 2026.

- Richmond birdwing: vulnerable under Queensland law. Source: Queensland Government.
- Laced fritillary: endangered in New South Wales, critically endangered at Commonwealth level. Source: NSW Government threatened species profile.

Recheck a species before publishing and before any product page goes live. No donation or conservation funding claim is made anywhere on the site.

## Look

Pastel palette (pink, sage, chartreuse, blue, violet, a little yellow) is set as custom properties at the top of `css/styles.css`. Each plate sits on one of the tints. The botanical line drawings in `images/botanical/` are original SVGs, placed behind the content as `.deco` images. Their positions are set per section in the stylesheet.

## Images

Product images are cropped from the supplied renders in `images/`. The `-detail` files are crops of the stitching taken at the render's native size, so they soften when enlarged. Replace them with macro photographs when available, keeping the file names.
