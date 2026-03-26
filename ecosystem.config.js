module.exports = {
  apps: [
    {
      name: 'lens-app-api',
      script: './dist/server.js',
      instances: 2,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
