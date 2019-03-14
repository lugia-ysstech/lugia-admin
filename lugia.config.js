import megaConfig from "./config/mega.config.js";

export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  entry: "./portal/index.js",
  publicPath: "/",
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "@lugia/lugia-web",
        libraryDirectory: "dist"
      }
    ]
  ],
  applyWebpack(webpackConfig, { webpack, merge }) {
    return webpackConfig;
  },
  ...megaConfig
};
