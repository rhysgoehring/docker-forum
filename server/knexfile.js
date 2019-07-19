module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/docker-forum',
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST,
      port: process.env.PGPORT,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
};
