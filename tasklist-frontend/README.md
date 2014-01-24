# A Lineman JS Template using Angular

This is a project based on a [template](https://github.com/testdouble/lineman-angular-template) for Angular JS applications using [Lineman](http://www.linemanjs.com).

It includes the following features:

1. Template Precompilation into Angulars $templateCache using `grunt-angular-templates`
1. Configured [grunt-ngmin](https://github.com/btford/grunt-ngmin) so you don't have to fully qualify angular dependencies.
1. Auto generated [sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) with inlined sources via [grunt-concat-sourcemap](https://github.com/kozy4324/grunt-concat-sourcemap) (you'll need to [enable sourcemaps](http://cl.ly/image/1d0X2z2u1E3b) in Firefox/Chrome to see this)
1. [Unit Tests](https://github.com/davemo/lineman-angular-template/tree/master/spec) and [End-to-End Tests](https://github.com/davemo/lineman-angular-template/tree/master/spec-e2e)
1. Configuration to run [Protractor](https://github.com/juliemr/protractor) for End-to-End Tests

# Instructions

1. `(sudo) npm install -g lineman`
1. `npm install`
1. `lineman run`
1. open your web browser to <http://localhost:8000>.
