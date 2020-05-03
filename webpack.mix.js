let mix = require("laravel-mix");

mix.setPublicPath("www");

const webpack = require("./webpack.config.js");

mix.js("src/main.js", "www");
mix.webpackConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "vue"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: mix.config.babel(),
          },
        ],
      },
    ],
  },
});

mix.webpackConfig(Object.assign(webpack));

mix.webpackConfig({
  output: {
    filename: "[name].js",
    chunkFilename: "[name].app.js",
  },
});

mix.version();
mix.sourceMaps();
