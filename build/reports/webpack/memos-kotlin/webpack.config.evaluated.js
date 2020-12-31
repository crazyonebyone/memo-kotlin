{
  mode: 'production',
  resolve: {
    modules: [
      '/Users/caishuai6/project/memos-kotlin/build/js/packages/memos-kotlin/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/caishuai6/project/memos-kotlin/build/js/packages/memos-kotlin/kotlin-dce/memos-kotlin.js'
    ]
  },
  output: {
    path: '/Users/caishuai6/project/memos-kotlin/build/distributions',
    filename: [Function: filename],
    library: 'memos-kotlin',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/caishuai6/project/memos-kotlin/build/processedResources/js/main'
    ]
  }
}