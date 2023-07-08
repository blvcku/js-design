#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd "$parent_path"

tsc --outDir ./temp
node ./temp/index.js
rm -rf ./temp