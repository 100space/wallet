const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}))
                    return webpackConfig
                },
            },
        },
    ],
}
