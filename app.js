const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config(); // 호출되는 순간 .env 파일이 불러와 짐. => process.env

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  dialect: process.env.DB_DIALECT,
};

console.log(config);

const app = express();

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/api/items', (req, res) => {
  res.json([
    {
      id: 1, name: 'Item 1'
    },
    {
      id: 2, name: 'Item 2'
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});