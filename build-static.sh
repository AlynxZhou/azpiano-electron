#!/bin/bash

cd subs/azpiano-react
npm run build
cd ../../
rm -rf static
cp -r subs/azpiano-react/build static
