module.exports = {
  apps: [
    {
      name: 'lens-app-api',
      script: './dist/server.js',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
