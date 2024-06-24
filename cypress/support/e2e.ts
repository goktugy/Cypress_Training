require('./app')
require('./commands')
require('cypress-xpath')
import '@percy/cypress'
import 'cypress-mochawesome-reporter/register'

Cypress.on("uncaught:exception", (err) => {
    // Cypress and React Hydrating the document don't get along
    // for some unknown reason. Hopefully we figure out why eventually
    // so we can remove this.
    /*if (
      /hydrat/i.test(err.message) ||
      /Minified React error #425/.test(err.message) ||
      /Minified React error #418/.test(err.message) ||
      /Minified React error #423/.test(err.message)
    ) {
      return false;
    }
    */
    return false;
  });