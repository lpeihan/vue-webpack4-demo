module.exports = {
  preserveWhitepace: true,
  hotReload: true,

  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
