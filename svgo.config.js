module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: false,
  },
  plugins: [{
    name: 'preset-default',
    params: {
      overrides: {
        // disable plugins
        removeDoctype: false,
        removeTitle: false,
        removeUselessStrokeAndFill: false,
        removeViewBox: false,
        inlineStyles: false,
        //removeComments: false,
      },
    },
  }],
};