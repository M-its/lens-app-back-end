module.exports = {
  apps: [
    {
      name: 'lens-app',
      script: './dist/server.js',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
