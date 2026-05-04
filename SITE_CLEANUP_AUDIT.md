# Flomatix Site Cleanup Audit

Date: 2026-05-04

## Implemented In This Pass

- Replaced the homepage with a simple Flomatix / Creative Technology LLC resource hub.
- Removed Buzz-specific global metadata, navigation, and footer copy from the visible shell.
- Added a portfolio section for Drop.
- Replaced global `/support` with a Creative Technology LLC support page.
- Removed top-level `/privacy` and `/terms`; app-specific legal pages live under `/apps/drop`.
- Added Drop-specific routes:
  - `/apps/drop/privacy`
  - `/apps/drop/terms`
  - `/apps/drop/support`
- Preserved GitHub Pages deployment files, `CNAME`, Apple App Site Association, and `/tiktok-share`.

## Current State

The live domain `flomatix.ai` is currently served by GitHub Pages.

Evidence:

- `curl -I https://flomatix.ai` returns `server: GitHub.com`.
- `dig +short flomatix.ai` returns `185.199.108.153`, one of GitHub Pages' IPs.
- `www.flomatix.ai` CNAMEs to `sadogecrypto.github.io`.
- Both repos contain `CNAME` with `flomatix.ai`.
- `https://sadogecrypto.github.io/Flomatix-Landing-Page/` redirects to `https://flomatix.ai/`.
- `https://sadogecrypto.github.io/flomatix-landing/` serves the old static Mini site.

Email is separate from website hosting and appears to be Microsoft 365 / Outlook Protection:

- `MX flomatix.ai` -> `flomatix-ai.mail.protection.outlook.com`.
- SPF TXT includes `include:spf.protection.outlook.com`.
- TXT records include Microsoft domain verification.

Do not touch MX, SPF, Microsoft verification TXT, or mail-related DNS during site cleanup.

## Repositories

### `SaDogeCrypto/Flomatix-Landing-Page`

Local path:

`/Users/ronantopolski/Documents/Codex/2026-05-04/i-have-a-site-hosted-on/Flomatix-Landing-Page`

This is the active modern site repo. It is a Next.js static export with GitHub Pages deployment configured.

It is the repo currently attached to `flomatix.ai`.

Important files:

- `app/page.tsx`: current homepage.
- `app/layout.tsx`: global metadata, currently Buzz-focused.
- `.github/workflows/pages.yml`: GitHub Pages deployment.
- `next.config.mjs`: static export config.
- `CNAME`: `flomatix.ai`.
- `public/.well-known/apple-app-site-association`: iOS universal link configuration.
- `app/tiktok-share/page.tsx`: TikTok share/universal link landing route.

Current project/content mix:

- Buzz homepage and support page.
- Blessing privacy/terms and blessing interactive page.
- Bear interactive page.
- TikTok share route for Drop.
- Azure support API copies.
- Azure Static Web Apps workflow.
- v0/Vercel README leftovers.
- Old Mini assets.

### `SaDogeCrypto/flomatix-landing`

Local path:

`/Users/ronantopolski/Documents/Codex/2026-05-04/i-have-a-site-hosted-on/flomatix-landing`

This is an older static GitHub Pages-era Mini site. It has no workflow folder and only a few static files:

- `index.html`
- `privacy-policy.html`
- `terms-of-service.html`
- `tiktok-share/index.html`
- `CNAME`
- favicon/logo assets

It is superseded by `Flomatix-Landing-Page` for the root domain. It is still publicly reachable at:

`https://sadogecrypto.github.io/flomatix-landing/`

Because it also has `CNAME`, remove the stale `CNAME` or disable Pages before archiving it.

## Hosting And Deployment

Current web hosting:

- GitHub Pages.

Potential/legacy hosting:

- Azure Static Web Apps workflow exists in `Flomatix-Landing-Page`:
  - `.github/workflows/azure-static-web-apps-jolly-bush-073f4a410.yml`
- Support form posts to:
  - `https://buzz-support-api.azurewebsites.net/api/support`
- Azure Function source exists twice:
  - `api/support/index.js`
  - `azure-function/support/index.js`

Likely interpretation:

- GitHub Pages hosts the public website.
- Azure/Microsoft hosts email.
- Azure Function may still handle support form email.
- Azure Static Web Apps deployment is likely stale or parallel hosting baggage unless Azure portal confirms it is still used.

## Keep / Verify / Remove Candidates

### Keep

- `.github/workflows/pages.yml`
- `next.config.mjs`
- `CNAME`
- `public/.well-known/apple-app-site-association`, if the new iOS app still needs universal links.
- `app/tiktok-share/page.tsx`, if Drop's platform link flow is still needed.
- Any images/logos for the new iOS app.

### Verify Before Removing

- `azure-function/**`
- `api/**`
- `components/support-form.tsx`
- `staticwebapp.config.json`
- `.github/workflows/azure-static-web-apps-jolly-bush-073f4a410.yml`
- `function-deploy.zip`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` / Google Analytics usage.

These may be connected to support email, Azure Communication Services, or a stale Azure Static Web App.

### Strong Remove/Archive Candidates

- `flomatix-landing` repo, after confirming GitHub Pages for `flomatix.ai` is not served from that repo.
- Mini static site content in `flomatix-landing`.
- Mini assets in `Flomatix-Landing-Page/public/images` if no longer used.
- `app/blessing/**`, if Blessing is a dead project.
- `app/bear/**`, if Bear is a dead project.
- Blessing-specific privacy and terms copy, since `/privacy` and `/terms` are global app/legal routes.
- v0/Vercel README content if GitHub Pages is the canonical deployment.

## Correct Target

The goal is not an app-specific marketing site.

The goal is a clean Flomatix utility/legal/link host for multiple apps and integrations:

- privacy policies
- terms of service
- Apple App Site Association files
- TikTok redirect/share routes
- support/contact pages
- lightweight app-specific legal/support pages when needed

This site should be boring, stable, and organized by purpose. It should not be a pile of old product landing pages.

## Content Mismatches

These are the most important cleanup issues under that target:

- Live homepage metadata and content are for Buzz.
- `/support` is for Buzz.
- `/privacy` and `/terms` are for Blessing.
- Universal link file contains the current deployed app identifier. Verify it before changing AASA.
- `/tiktok-share` is a generic placeholder.
- Old product landing pages make it unclear which app a visitor or platform reviewer is looking at.

## iOS-Facing Route Checks

Live checks:

- `https://flomatix.ai/.well-known/apple-app-site-association` returns `200`.
- The Apple association file currently maps the deployed app identifier to `/tiktok-share` and `/tiktok-share/*`.
- `https://flomatix.ai/tiktok-share/` returns `200`.
- Top-level `/privacy` and `/terms` were removed in favor of app-specific routes.

Potential issue:

- GitHub Pages serves `apple-app-site-association` as `application/octet-stream`. Apple often tolerates this if the file is valid and reachable without redirects, but `application/json` is cleaner. If universal links are flaky, move AASA hosting to a platform that can set the content type or add a deployment step that controls headers.

For a multi-app Flomatix utility host, the public site should probably become:

- `/`: lightweight Flomatix index listing official links only
- `/apps/{app}/privacy`: app-specific privacy policy
- `/apps/{app}/terms`: app-specific terms of service
- `/apps/{app}/support`: app-specific support/contact page
- `/.well-known/apple-app-site-association`: multi-app universal link configuration
- `/tiktok-share`: keep if Drop expects this exact route
- `/redirects/{service}/{app}` or similar future route pattern for platform redirect flows

## Recommended Cleanup Path

1. Make `Flomatix-Landing-Page` the canonical repo.
2. In GitHub, confirm Pages settings for `Flomatix-Landing-Page`:
   - source is GitHub Actions / Pages workflow
   - custom domain is `flomatix.ai`
   - HTTPS enforcement is enabled
3. Archive or detach `flomatix-landing`:
   - remove `CNAME` or disable Pages there before archiving
   - keep it as history if desired
4. Define the URL taxonomy for shared legal and redirect hosting:
   - company-level pages
   - app-level pages
   - platform redirect pages
   - well-known files
5. Replace the mixed Buzz/Blessing/Mini homepage with a simple Flomatix link index.
6. Move app-specific legal pages under app-specific routes before deleting old global copies.
7. Confirm whether Azure Function support email is still needed:
   - if yes, keep and document it
   - if no, remove support form API integration and use `mailto:` or a new backend
8. Remove stale Azure Static Web Apps deployment workflow unless Azure portal confirms it is still actively used.

## Immediate Next Implementation Choice

The safest first code change is not deleting old files. It is to create a clean utility-host skeleton in `Flomatix-Landing-Page` while preserving:

- GitHub Pages deployment
- `CNAME`
- Apple association file
- TikTok share route
- support email address

After that builds and deploys, remove old dead routes and assets in a second pass.

Suggested first implementation:

- Replace `/` with a minimal Flomatix index.
- Do not keep entity-level `/privacy` and `/terms` unless another app needs shared company policies later.
- Add app-specific legal/support pages under `/apps/{app}` as needed.
- Keep `/tiktok-share` and AASA as currently deployed until the live app flow is verified.
- Remove old Buzz/Blessing/Bear landing content only after redirects or replacement routes exist.
