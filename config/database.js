module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.0l4fkll.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'orchid'),
        username: env('DATABASE_USERNAME', 'abhinavsiwal'),
        password: env('DATABASE_PASSWORD', 'orchid4790'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
