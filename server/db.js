const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "abc987",
  host: "localhost",
  port: 5432,
  database: "pernscreenkeeper",
});

module.exports = pool;