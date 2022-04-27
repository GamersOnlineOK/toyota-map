module.exports = {
  externals: {
    // require(jquery) is external and available
    //  on the global var jQuery
    jquery: 'jQuery',
  },
  babel: {
    loaderOptions: {
      ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
    },
  },

};
