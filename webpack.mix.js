const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.extend(
  "i18n",
  new (class {
    webpackRules() {
      return [
        {
          resourceQuery: /blockType=i18n/,
          type: "javascript/auto",
          loader: "@intlify/vue-i18n-loader",
        },
      ];
    }
  })()
);

mix
  .i18n()
  .js("resources/js/main.js", "public/js")
  .sass("resources/sass/app.scss", "public/css/app.css", {
    implementation: require("node-sass"),
  })
  .webpackConfig({
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "resources/sass"),
        "@": path.resolve(__dirname, "resources/js"),
      },
    },
    output: {
      chunkFilename: "[name].js?id=[chunkhash]",
    },
  })
  .sourceMaps()
  .disableNotifications();
mix.options({
  hmrOptions: {
    host: "192.168.1.7",
    port: 8081,
  },
});
mix.webpackConfig({
  devServer: {
    host: "192.168.1.7",
    port: 8081,
  },
});

if (mix.inProduction()) {
  mix.version();
}
