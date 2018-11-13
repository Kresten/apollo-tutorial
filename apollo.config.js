module.exports = {
  client: {
    name: 'apollo-tutorial-client',
    service: {
      url: 'http://localhost:8080/graphql',
    },
    includes: ['client/src/**/*.{ts,tsx,js,jsx,graphql}'],
  },
  service: {
    name: 'apollo-tutorial-service',
    service: {
      url: 'http://localhost:8080/graphql',
    },
    includes: ['service/src/**/*.{ts,tsx,js,jsx,graphql}'],
  },
};
