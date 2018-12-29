const example = require('./example.json');

module.exports = (app) => {
  app.get('/api/example', (req, res) => {
    setTimeout(() => {
      res.json({
        code: 0,
        data: example
      });
    }, 3000);
  });
};
