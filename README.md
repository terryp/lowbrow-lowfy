lowbrow-lowfy
=============

## What it Does
There is some code in the node_modules folder which calculates and then exports an approximation of PHI (the golden ratio)

This 'feature' can be accessed two ways:
1. "Server" side — `node ./bin/tryit.js`
2. "Client" side — `grunt browserify` and then look at the console log of the index page of the express server.

## Requirements
* node
    * grunt
    * browserify

## How to do it
* npm install
* `node ./bin/tryit.js` to see the server side console output
* `grunt browserify` to package bin/tryit.js to public/javascripts/main.js
* start the express server: `DEBUG=lowbrow-lowfy ./bin/www`
* go to http://localhost:3000:
