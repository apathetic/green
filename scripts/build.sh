#!/usr/bin/env bash
set -e


# Cleanup
rm -rf dist lib


echo 'Compiling JS...'
rollup -c scripts/rollup.config.js --silent
echo 'Done.'
echo ''


echo 'Minifying JS...'
# We instruct terser to preserve safe types (i.e. `Element`, etc) when mangling top level names
terser dist/green-ui.common.js \
       --compress typeofs=false \
       --mangle reserved=['Element','HTMLElement','SVGElement'] \
       --toplevel \
       --keep-classnames \
       --comments "/^!/" \
       --source-map "content=dist/green-ui.common.js.map,includeSources,url=green-ui.common.min.js.map" \
       --output "dist/green-ui.common.min.js"
echo 'Done.'
echo ''


echo 'Compiling CSS...'
node-sass --output-style expanded \
          --source-map true \
          --source-map-contents true \
          --precision 6 \
          --quiet \
          src/styles/main.scss \
          dist/green-ui.css
postcss --config ./postcss.config.js \
        --output dist/green-ui.min.css \
        dist/green-ui.css
echo 'Done.'
echo ''


echo 'Generating icon spritesheet...'
svg-sprite --symbol \
           --symbol-dest=dist/ \
           --symbol-sprite=spritesheet.svg \
           --svg-namespace-ids=false \
           assets/icons/*.svg
echo 'Done.'
echo ''
