import { join } from "path";
import megaDesktopConfig from "./config/mega.desktop.config.json";

export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  entry: "./portal/index.js",
  publicPath: "/",
  alias: {
    "@": join(__dirname, "./src")
  },
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "@lugia/lugia-web",
        libraryDirectory: "dist"
      },
      "@lugia/lugia-web"
    ],
    [
      "import",
      {
        libraryName: "@/components",
        libraryDirectory: "",
        camel2DashComponentName: false
      },
      "@/components"
    ]
  ],
  applyWebpack(webpackConfig, { webpack, merge }) {
    return webpackConfig;
  },
  ...megaDesktopConfig
};
