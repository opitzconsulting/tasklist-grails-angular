/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  return {
    removeTasks: {
      common: ["coffee"]
    },
    ngtemplates: {
      options: {
        module: "tasklist"
      }
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
  };
};
