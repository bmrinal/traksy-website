# Traksy Website

Static marketing site for the Traksy app.

## Pages

- `index.html`: Product homepage.
- `privacy/index.html`: Dedicated privacy policy page.
- `support/index.html`: Support page - sign-in, receipts, team/locations, reports, troubleshooting, contact.

## Local Preview

Open `/Users/mrinalpurohit/tracksy/website/index.html` in a browser.

## Cloudflare Workers

Use these settings for the Cloudflare screen that deploys with Wrangler:

- Build command: leave blank.
- Deploy command: `npx wrangler deploy`.
- Root directory: leave blank when this repository is connected directly.
- The Wrangler config routes `traksy.app/*` and `www.traksy.app/*` to the Worker.

## Notes

- The logo in `assets/traksy-icon.png` comes from `/Users/mrinalpurohit/Downloads/traksy-icon.png`.
- The privacy policy is written from the app and backend behavior in this repo. Review the contact emails and legal wording before publishing.
