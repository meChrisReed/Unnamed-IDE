// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
var path = require('path')

module.exports = {
	resolve: {
		root: [
			// resolve static paths relative to the current working directory
			path.resolve('./')
		],
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },

      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ],
  },
};
