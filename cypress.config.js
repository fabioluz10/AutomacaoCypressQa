const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "w3suk9",
  reporter: 'cypress-mochawesome-reporter',
   reporterOptions: {
    charts: true,
    reportTitle: 'Automação de Telas com Cypress',
    reportPageTitle: 'Automação de Telas com Cypress'    
  },
  e2e: {
    baseUrl: "https://www.automationpratice.com.br/",
    defaultCommandTimeout: 5000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
