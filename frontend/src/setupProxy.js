const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/semapi',
    createProxyMiddleware({
      target: 'http://sui-demo-prism.apps.dbmi.cloud/api',
      pathRewrite: { '^/semapi': '' },
      changeOrigin: true,
    })
  );
};
