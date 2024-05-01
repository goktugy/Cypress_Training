import { defineConfig } from 'cypress'
export default defineConfig({
  projectId: 'p2e7rh',
    // These settings apply everywhere unless overridden
    defaultCommandTimeout: 5000,
    viewportWidth: 1000,
    viewportHeight: 600,
   
    // Command timeout overridden for E2E tests
    e2e: {
      baseUrl:'http://www.livescore.com',
      defaultCommandTimeout: 10000,
      pageLoadTimeout: 200000,
      experimentalStudio:true,
      supportFile:'cypress/support/e2e.ts',
      specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx}"
    },


    setupNodeEvents(on, config){
      on('before:run',() =>{
         

      }
     )}
  })