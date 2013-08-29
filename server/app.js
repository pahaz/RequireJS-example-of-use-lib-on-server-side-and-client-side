/**
 * User: pahaz
 * Date: 29.08.13
 * Time: 21:33
 */

var requirejs = require('requirejs');

// Boiler plate stuff - as per r.js's instructions
requirejs.config({
    paths: {
        pyandex: '../lib/pyandex'
    },

    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(["pyandex/core"], function(Game) {
    var game = new Game();
    console.log(game.name);
});