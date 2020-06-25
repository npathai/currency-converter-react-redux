# Module 2 DEMOS

Clips 2.2 - 2.4 use react_hello_world folder.
Clip 2.5 uses react_example_webpack. This example takes example3.js from react_hello_world and converts it to use webpack.


Both example folders require running `npm install` before you can do anything useful.

## react_hello_world

Open index.html in the browser

### useful commands:
You'll need to run `npm install` before these 2 commands can be run

To compile a .js file using babel (and jsx transform) and save the output as a .min.js file:
$ node_modules/.bin/babel  --plugins transform-react-jsx -o js/example2.min.js js/example2.js

Add -w to turn on file-watching mode:
$ node_modules/.bin/babel  --plugins transform-react-jsx —w o js/example2.min.js js/example2.js


## react_example_webpack

Run `npm install` then `npm start` and open http://localhost:8080/ in the browser.

### useful commands

// starts the webpack-dev-server at http://localhost:8080/
$ npm start

// compiles the minified file for production at /public/js/build/bundle.js
$ npm run build

# A note on version numbers and js/lib files
I generally try to pin the critical packages in package.json to exact version numbers.
That should ensure that things should work for you even if the React apis change significantly
in future versions. If future versions of React are released, you can continue using the pinned
versions in these files, or you can try to upgrade and follow the migration docs that React usually
has with big api changes.

For the js/lib files in these demos, I generated them from here:
https://unpkg.com/react@16.0.0/umd/react.development.js
https://unpkg.com/react@16.0.0/umd/react.production.min.js

https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js
https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js

https://unpkg.com/prop-types@15.6.0/prop-types.js
https://unpkg.com/prop-types@15.6.0/prop-types.min.js

You can check the readme at https://github.com/jamischarles/ps_redux-demos for any major updates.
