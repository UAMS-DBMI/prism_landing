const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/semapi',
    createProxyMiddleware({
      target: 'http://sui-demo-prism.apps.dbmi.cloud/api',
      pathRewrite: { '^/semapi': '' },
      changeOrigin: true,
    }),
  );
  app.use(
    '/coreapi',
    createProxyMiddleware({
      target: 'http://core-api.apps.dbmi.cloud/v1',
      pathRewrite: { '^/coreapi': '' },
      changeOrigin: true,
    }),
  );
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8080/api',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    })
  );
};
