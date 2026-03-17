#!/usr/bin/env bash
set -o errexit

apt-get update
apt-get install -y curl gnupg
(curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sh

doppler run -- sh -c "pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --no-input"