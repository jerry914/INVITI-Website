#!/usr/bin/env bash
set -euo pipefail

BRANCH=${1:-gh-pages}

echo "Cleaning previous build..."
rm -rf build

echo "Installing dependencies..."
npm install

echo "Building production bundle..."
npm run build

echo "Deploying contents of build/ to branch ${BRANCH}"
cd build
git init
git checkout -b "${BRANCH}"
git add -A
git commit -m "Deploy static site"

REMOTE=$(git -C .. config --get remote.origin.url || true)
if [ -z "$REMOTE" ]; then
  echo "No git remote found. Please set REMOTE_URL env var or configure git."
  exit 1
fi

git remote add origin "$REMOTE" || git remote set-url origin "$REMOTE"
git push -f origin "${BRANCH}"

cd ..
rm -rf build/.git

echo "Deployment complete. GitHub Pages will serve branch ${BRANCH}."


