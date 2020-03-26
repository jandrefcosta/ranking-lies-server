// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://rdjzvrahylmjfu:9b07ba3820aaf09062f481fd526ad4eaa1bdd256467775af531a7851a1b04645@ec2-34-225-82-212.compute-1.amazonaws.com:5432/d4s1nrblstsd9a?ssl=true',
    migrations: {
      directory: './src/database/migrations/'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: 'postgres://rdjzvrahylmjfu:9b07ba3820aaf09062f481fd526ad4eaa1bdd256467775af531a7851a1b04645@ec2-34-225-82-212.compute-1.amazonaws.com:5432/d4s1nrblstsd9a?ssl=true',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://rdjzvrahylmjfu:9b07ba3820aaf09062f481fd526ad4eaa1bdd256467775af531a7851a1b04645@ec2-34-225-82-212.compute-1.amazonaws.com:5432/d4s1nrblstsd9a?ssl=true',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
