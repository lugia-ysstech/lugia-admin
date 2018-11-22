export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
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
  }
};
