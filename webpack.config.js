module.exports = {
  entry: "./src/index.ts",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.[t]sx?$/, loader: "ts-loader" }
    ]
  },
  devtool: "source-map"
};
