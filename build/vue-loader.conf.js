module.exports = {
  preserveWhitepace: true,
  hotReload: process.env.NODE_ENV === 'development',

  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
