#!/bin/bash
npm install
./node_modules/bower/bin/bower install
cd test/
../node_modules/bower/bin/bower install
cd ..