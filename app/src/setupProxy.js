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
      target: 'http://api-collectionmanager.apps.dbmi.cloud/v1',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    })
  );
};
