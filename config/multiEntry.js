"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");
const pageList = ["about", "details"];

const { resolveApp, resolveModule }  = paths

const getHtmlWebpackPluginList = (isEnvProduction) => {
  return pageList.map((filename) => {
    return new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: resolveApp(`public/${filename}.html`),
          chunks: [filename],
          filename: `${filename}.html`,
        },
        isEnvProduction
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined
      )
    );
  });
};

const entryList = pageList.map((filename) => {
  return resolveModule(resolveApp, `src/${filename}/index`);
});

const entryObj = {};
for (let index = 0; index < entryList.length; index++) {
  entryObj[pageList[index]] = entryList[index];
}

module.exports = {
  getHtmlWebpackPluginList,
  entryObj,
};
