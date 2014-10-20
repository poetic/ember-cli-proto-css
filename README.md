# ember-cli-proto-css

*requires at least ember-cli >= 0.1.2*

When added to your ember-cli project, ember-cli-proto-css provides a generator
for the file structure based on the [SMACSS](https://smacss.com/) style format
guideline, as well as adding other niceties such as css resets, commonly used
styles in [Cordova apps](http://cordova.apache.org/) and sass compilation.

For Ember integration with Cordova, please see
[ember-cli-cordova](https://github.com/poetic/ember-cli-cordova).

ember-cli-proto-css adds the following to your project:

- CSS reset styles based on
  [Eric Meyer's cssreset.com](http://meyerweb.com/eric/tools/css/reset/)
- [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) so the project
  can compile scss files into css.
- A few css styles tailored for mobile, such as `touch-callout` and
  `tap-highlight-color`.

Provide a toolchain tightly integrated with ember-cli to make developing hybrid
apps with cordova and ember as simple as possible.

## Goals

The goal of ember-cli-proto-css is to eventually become a css framework we can
easily attach to our Ember/Cordova apps and out of the box have ios-like
navigation styles, touch overflow for certain areas and other commonly used
elements that we keep re-writing every time we bootstrap a new app.

# Installation

Inside of a generated ember-cli project run:

```sh
npm install --save-dev ember-cli-proto-css
```

This will generate the SMACSS file structure with files in the .scss format, as
well as some commonly used styles for mobile development and the ember-cli-sass
addon for sass compilation.

# Credits

- [ember-cli](https://github.com/stefanpenner/ember-cli)
- [ember](https://github.com/emberjs/emberjs)
- [ember-cli-cordova](https://github.com/poetic/ember-cli-cordova)
