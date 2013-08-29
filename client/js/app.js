/**
 * User: pahaz
 * Date: 29.08.13
 * Time: 21:37
 */

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        pyandex: '../../../lib/pyandex'
    }
});

require(["pyandex/core"], function(Game) {
    var game = new Game();
    console.log(game.name);
});
