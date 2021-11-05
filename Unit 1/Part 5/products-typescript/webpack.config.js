const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    static: path.join(__dirname, "dist"), // Server’s root dir
    compress: true, // Enable gzip compresion when serving content
    port: 8080, // Default
    hot: false,
  },
  //   mode: "production",
  mode: "development",
  devtool: "source-map",
  context: path.join(__dirname, "./src"),
  entry: {
    index: "./index",
    "add-product": "./add-product",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname + "/dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.ts$/,
        use: [{ loader: "ts-loader"}],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: (module) =>
            module.resource && module.resource.includes("/node_modules"),
          name: "vendors",
          chunks: "all",
        },
        commons: {
          test: (module) =>
            module.resource && !module.resource.includes("/node_modules"),
          chunks: "initial", // Optimize chunks generation
          name: "commons", // chunk name
          minChunks: 2, // How many files import this chunk
          minSize: 0, // Minimum size of the separated chunk
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "../index.html",
      chunks: ["index", "commons", "vendors"],
    }), // By default generates index.html
    new HtmlWebpackPlugin({
      filename: "add-product.html",
      template: "../add-product.html",
      chunks: ["add-product", "commons", "vendors"],
    }),
  ],
};
