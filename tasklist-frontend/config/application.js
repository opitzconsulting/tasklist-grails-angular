/* Exports an object that defines
 *  all of the configuration needed by the projects'
 *  depended-on grunt tasks.
 *
 * You can find the parent object in: node_modules/lineman/config/application.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('application', {

    appTasks: {
        common: ["jshint", "jst", "concat_sourcemap", "copy:dev", "images:dev", "webfonts:dev", "pages:dev"],
        dist: ["copy:dist", "images:dist", "webfonts:dist", "pages:dist"]
    },

    server: {
        // enables HTML5 pushState;
        // Lineman will serve `generated/index.html` for any request that does not match the apiProxy.prefix
        pushState: true,
        apiProxy: {
            enabled: true,
            port: 8080,
            prefix: 'api' // request paths that contain 'api' will now be the only ones forwarded to the apiProxy
        }
    }

});
