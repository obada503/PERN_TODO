// lets us set up configuration for what/where to connect database
const Pool = require("pg").Pool

const pool = new Pool ({
    user: "postgres",
    password: "Edgewood232$",
    database: "pernstack",
    host: "localhost",
    port: 5432
});

module.exports = pool;