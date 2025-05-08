module.exports = {
  apps: [
    {
      name: 'my-express-app',
      script: './app.js',
      watch: false,
      env_dev: {
        NODE_ENV: 'dev',
        PORT: 3000,
        DB_HOST: 'my-express-app-db.cdacykwy8qbq.ap-northeast-2.rds.amazonaws.com',
        DB_USER: 'postgres',
        DB_PASSWORD: 'YVWsXpF4VzYz27x',
        DB_NAME: 'mydatabase',
        DB_PORT: 5432,
        DB_DIALECT: 'postgres',
      },
    }
  ],
};