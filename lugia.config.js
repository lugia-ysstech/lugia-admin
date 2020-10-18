import { join, } from 'path';
import megaDesktopConfig from './config/mega.desktop.config.json';

export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  entry: './src/index.js',
  publicPath: '/',
  alias: {
    '@': join(__dirname, './src'),
  },
  dllDependenciesExcludes: [],
  extraBabelIncludes: [/decamelize/,],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@lugia/lugia-web',
        libraryDirectory: 'dist',
      },
      '@lugia/lugia-web',
    ],
    [
      'import',
      {
        libraryName: '@/components',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@/components',
    ],
    [
      'import',
      {
        libraryName: '@lugia/action-lib',
        libraryDirectory: 'dist',
      },
      '@lugia/action-lib',
    ]
  ],
  applyWebpack(webpackConfig, { webpack, merge, }) {
    return webpackConfig;
  },
  generator(api) {
    const {
      appPath,
      pkg: { version, },
    } = api.getApp();
    const verbose = api.isVerbose();
    const { fs, mergeObj, } = api._utils();

    fs.writeJSONSync(
      join(appPath, './config/mega.desktop.config.json'),
      mergeObj(megaDesktopConfig, {
        extraMega: {
          engines: {
            scaffolding: { version, },
          },
        },
      }),
      {
        spaces: 2,
      }
    );

    if (verbose) {
      console.log(
        `update scaffolding(${megaDesktopConfig.extraMega.engines.scaffolding.name}) version: ${version}`
      );
    }

    api.mergePackage(pkg => {
      delete pkg.files;
      return {
        ...pkg,
        version: '1.0.0',
        private: true,
      };
    });
  },
  ...megaDesktopConfig,
};
