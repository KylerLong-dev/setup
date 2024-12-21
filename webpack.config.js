const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "webpack-image-loader",
            options: {
              // Options for image compression
              mozjpeg: { quality: 70 },
              optipng: { optimizationLevel: 3 },
              pngquant: { quality: [0.6, 0.8] },
              gifsicle: { optimizationLevel: 3 },
              webp: { quality: 75 },
            },
          },
        ],
      },
    ],
  },
};


