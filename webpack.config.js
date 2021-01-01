const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');


module.exports = {
    "mode": "none",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js",
    },
    "devServer": {
        contentBase: path.join(__dirname, 'dist')
    },
    "module": {
        "rules": [
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env"
                        ]
                    }
                },
            },
            {
                test: /\.(svg)$/,
                exclude: /fonts/, /* dont want svg fonts from fonts folder to be included */
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      noquotes: true,
                    },
                  },
                ],
              },
        ]
    },
    "plugins": [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "public/audio", to: "assets/audio" },
                { from: "public/img", to: "assets/img" },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'EFK',
            filename: 'index.html',
            template: 'public/index.html'
        }),
    ]
}