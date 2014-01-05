# A Lineman JS Template using Angular

This is a project based on a [template](https://github.com/testdouble/lineman-angular-template) for Angular JS applications using [Lineman](http://www.linemanjs.com).

It includes the following features:

1. Template Precompilation into Angulars $templateCache using `grunt-angular-templates`
2. A basic login, logout service bound to sample routes inside `config/server.js`
3. A router, and 2 views `home` and `login`
4. A directive that shows a message on mouseover
5. 2 Controllers, for `home` and `login`, with $scope variables set and bound
6. A working, bound login form (username/password don't matter, but are required)
7. Configured [grunt-ngmin](https://github.com/btford/grunt-ngmin) so you don't have to fully qualify angular dependencies.
8. Auto generated [sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) with inlined sources via [grunt-concat-sourcemap](https://github.com/kozy4324/grunt-concat-sourcemap) (you'll need to [enable sourcemaps](http://cl.ly/image/1d0X2z2u1E3b) in Firefox/Chrome to see this)
9. [Unit Tests](https://github.com/davemo/lineman-angular-template/tree/master/spec) and [End-to-End Tests](https://github.com/davemo/lineman-angular-template/tree/master/spec-e2e)
10. Configuration to run [Protractor](https://github.com/juliemr/protractor) for End-to-End Tests

# Instructions

1. `sudo npm install -g lineman`
2. `npm install`
3. `lineman run`
4. open your web browser to <http://localhost:8000>.
