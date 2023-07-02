const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fs = require("fs")
const path = require("path")

module.exports = {
    jest: {
        preset: "ts-jest", // TypeScript를 사용하기 위한 설정
        testEnvironment: "node",
        moduleNameMapper: {
            "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
            "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
            "^@components/(.*)$": "<rootDir>/src/components/$1",
            "^@utils/(.*)$": "<rootDir>/src/utils/$1",
            // 나머지 alias 설정
        },
        moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Jest가 처리할 수 있는 파일 확장자들
        transform: {
            "^.+\\.tsx?$": "ts-jest", // TypeScript 파일을 Jest가 처리할 수 있게 변환
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
        configure: (webpackConfig) => {
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
                    service_worker: "background.js",
                },
                web_accessible_resources: [
                    {
                        resources: ["external.js"],
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

            return webpackConfig
        },
    },
}
