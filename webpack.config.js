const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const srcDirectory = path.resolve(__dirname, "src");
const buildDirectory = path.resolve(__dirname, "build");
const port = 3000;

module.exports = {
  mode: "development",
  devServer: {
    static: buildDirectory,
    historyApiFallback: true,
    host: "0.0.0.0",
    port,
  },
  entry: path.resolve(__dirname, srcDirectory, "index.js"),
  output: {
    filename: "bundle.js",
    path: buildDirectory,
  },
  module: {
    rules: [
      {
        test: /\.(p)css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              importLoaders: 1, // run `postcss-loader` on each CSS `@import`
            },
          },
          "postcss-loader", // compiles PostCSS to CSS
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // **/* relative to webpack's output.path directory
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, srcDirectory, "docs"),
          to: buildDirectory,
          noErrorOnMissing: false,
        },
        {
          from: path.resolve(__dirname, srcDirectory, ".nojekyll"),
          to: buildDirectory,
          noErrorOnMissing: false,
        },
        {
          from: path.resolve(__dirname, srcDirectory, "robots.txt"),
          to: buildDirectory,
          noErrorOnMissing: false,
        },
        {
          from: path.resolve(__dirname, srcDirectory, "sitemap.xml"),
          to: buildDirectory,
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, srcDirectory, "index.html"),
      filename: "index.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, srcDirectory, "404.html"),
      filename: "404.html",
      inject: false,
    }),
  ],
};
