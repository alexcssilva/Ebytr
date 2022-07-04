require('dotenv').config();

const options = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || '3306',
  define: {
    timestamps: false
}
};

module.exports = {
  development: {
    ...options,
  },
};
