const webpack = require('webpack');

require("expose-loader");

const coreConfig = {
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json",".css"]
    },

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {test:/\.css$/,use:['style-loader','css-loader']},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/]
            },
            {
                test: require.resolve('adaptivecards'),
                use: [{ loader: 'expose-loader', options: 'AdaptiveCards' }]
            }
        ]
    }
};

const chatConfig = {
    entry: "./src/BotChat.ts",
    output: {
        libraryTarget: "umd",
        library: "BotChat",
        filename: "./_site/buzzchat.js"
    }
}

const chatWithPolyfillConfig = {
    entry: "./src/BotChatWithPolyfill.ts",
    output: {
        libraryTarget: "umd",
        library: "BotChat",
        filename: "./_site/botchat-es5.js"
    }
}

// Config for addon features
const featureConfig = {
    entry: {
        CognitiveServices: "./src/CognitiveServices/lib.ts"
    },
    output: {
        libraryTarget: "umd",
        library: "[name]",
        filename: "./_site/[name].js",
    }
}

module.exports = [
    Object.assign(chatConfig, coreConfig),
    Object.assign(chatWithPolyfillConfig, coreConfig),
    Object.assign(featureConfig, coreConfig)
];
