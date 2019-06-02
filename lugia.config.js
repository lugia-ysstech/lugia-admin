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
  generator(api) {
    const {
      appPath,
      pkg: { version }
    } = this.getApp();
    const verbose = this.isVerbose();
    const { fs, mergeObj } = this._utils();

    fs.writeJSONSync(
      join(appPath, "./config/mega.desktop.config.json"),
      mergeObj(megaDesktopConfig, {
        extraMega: {
          engines: {
            scaffolding: { version }
          }
        }
      }),
      {
        spaces: 2
      }
    );

    if (verbose) {
      console.log(
        `update scaffolding(${
          megaDesktopConfig.extraMega.engines.scaffolding.name
        }) version: ${version}`
      );
    }

    api.mergePackage(pkg => {
      delete pkg.files;
      return {
        ...pkg,
        version: "1.0.0",
        private: true
      };
    });
  },
  ...megaDesktopConfig
};
