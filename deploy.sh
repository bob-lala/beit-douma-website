#!/bin/bash
# Rebuilds the clean publish folder (index.html + assets/ + robots.txt + sitemap.xml —
# no raw source photos, no CLAUDE.md, no node_modules) and pushes it live on Netlify.
# .netlifyignore is NOT honored by `netlify deploy --dir`, only by Git-linked builds,
# so a filtered folder is the reliable way to keep internal files off the live URL.
set -e
cd "$(dirname "$0")"

rm -rf .netlify-publish
mkdir -p .netlify-publish/assets
cp index.html robots.txt sitemap.xml .netlify-publish/
cp assets/*.jpg assets/*.png .netlify-publish/assets/

npx --yes netlify-cli deploy --prod --dir .netlify-publish
