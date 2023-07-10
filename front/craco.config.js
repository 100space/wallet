const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fs = require("fs")
const path = require("path")

module.exports = {
    jest: {
        configure: {
            transform: {
                "^.+\\.tsx?$": "ts-jest",
                "^.+\\.ts?$": "ts-jest",
            },
            preset: "ts-jest", // TypeScript를 사용하기 위한 설정
            testEnvironment: "node",
            moduleNameMapper: {
                axios: "axios/node/axios.cjs",
                "^@(pages|routes|common|components|img|styled|test|hooks|core|utils)/(.+)$": "<rootDir>/src/$1/$2",
            },
        },
    },
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
    webpack: {
        plugins: {
            add: [
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, "./public/popup.html"),
                    filename: "popup.html",
                }),
            ],
        },
        mode: "development",
        devtool: "inline-source-map",
        configure: (webpackConfig, { env, paths }) => {
            // manifest.json 파일 경로
            const manifestPath = path.resolve(__dirname, "public/manifest.json")

            // manifest.json 파일 내용
            const manifestContent = {
                manifest_version: 3,
                name: "wallet",
                version: "1.0.0",
                description: "Description of your extension",
                action: {
                    default_popup: "/popup.html",
                    default_title: "Extension Popup",
                    default_icon: {
                        16: "logo192.png",
                        128: "logo512.png",
                    },
                },
                background: {
                    service_worker: "/background.js",
                    type: "module",
                },
                minimum_chrome_version: "92",

                web_accessible_resources: [
                    {
                        resources: ["external.js", "windowproperty.js"],
                        matches: ["<all_urls>"],
                    },
                ],
                content_scripts: [
                    {
                        js: ["event.js"],
                        matches: ["<all_urls>"],
                    },
                ],
                permissions: ["tabs", "activeTab", "storage", "scripting"],
            }

            // manifest.json 파일 생성
            fs.writeFileSync(manifestPath, JSON.stringify(manifestContent, null, 2))

            if (env === "production") {
                webpackConfig.entry = {
                    main: paths.appIndexJs, // 기존의 CRA 엔트리 포인트
                    background: path.resolve(__dirname, "./public/background.js"), // 배경 스크립트
                }

                // output.filename을 함수로 설정하여, 각 엔트리 포인트에 대한 결과물 파일 이름을 지정
                webpackConfig.output.filename = (chunkData) => {
                    return chunkData.chunk.name === "background"
                        ? "background.js"
                        : "static/js/[name].[contenthash:8].js"
                }
            }

            return webpackConfig
        },
    },
}
