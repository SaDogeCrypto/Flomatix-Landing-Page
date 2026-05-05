# Flomatix Site Cleanup Audit

Date: 2026-05-05

## Current Purpose

`flomatix.ai` is the public resource hub for Creative Technology LLC. It hosts app legal pages, support pages, platform
redirects, and Apple App Site Association data.

## Hosting

- Website: GitHub Pages from `SaDogeCrypto/Flomatix-Landing-Page`
- Email: Microsoft 365 / Outlook Protection
- Old repo: `SaDogeCrypto/flomatix-landing`, archived

## Current Routes

- `/`
- `/support`
- `/apps/drop/privacy`
- `/apps/drop/terms`
- `/apps/drop/support`
- `/tiktok-share`
- `/.well-known/apple-app-site-association`

## Preserved Platform Files

- `CNAME`
- `public/.nojekyll`
- `public/.well-known/apple-app-site-association`
- `public/apple-icon.png`
- `public/icon.svg`

## Removed In Cleanup

- Old Bear route
- Old Blessing route
- Old Buzz/Mini marketing components
- Old Mini/Buzz/Blessing image and video assets
- Azure support API source
- Azure Static Web Apps workflow
- Stale Azure Static Web Apps config
- Old v0/Vercel README content

## Notes

The AASA file still contains the deployed app identifier used for the current iOS app association. Verify the app team ID
and bundle ID before changing it.
