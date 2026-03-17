#!/usr/bin/env bash
set -o errexit

(curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sh

doppler secrets download --no-file --format env > .env.production
npm install
node node_modules/vite/bin/vite.js build