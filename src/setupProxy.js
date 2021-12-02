const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://18.169.185.73:8000',
      changeOrigin: true,
    })
  );
}
