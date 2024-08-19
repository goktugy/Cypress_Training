import {getUTC} from '../../support/utilities.js'

describe('Sample Intercept Call', () => {
   beforeEach ( () => {
      
      cy.visit('www.livescore.com')

      cy.get('[data-testid="search_icon"]').click({force:true})
      cy.intercept('/api/leftmenu/en/soccer/spain').as('SpainLeagues') 
      cy.writeFile("Test_Automation_Intercept.log", getUTC() + "\t Retrieving Answers: \n")
      cy.writeFile("Test_Automation_Intercept.log", getUTC() + "\t This is the answer key for Spain: \n", {flag:"a+"})
      cy.writeFile("Test_Automation_Intercept.log", getUTC() + "\t" + JSON.stringify('@Spain') +'\n', {flag:"a+"})

   })
it('Spain La Liga Should Be Visible', () => {
   cy.contains('Spain').should('be.be.visible')
   
   cy.get('[data-testid="search_region-section"] > :nth-child(4)').click()

   cy.wait('@SpainLeagues').then((interception) => {
      cy.log("Response",JSON.stringify(interception.response.body))
      cy.writeFile("Test_Automation_Intercept.log", getUTC() + "\t Test Case: Spain La Liga Should Be Visible | Step: Verification \n",{flag:"a+"})
      cy.writeFile("Test_Automation_Intercept.log", getUTC() + "\t This is the retrieved result: \n" , {flag:"a+"} )
      cy.writeFile("Test_Automation_Intercept.log", getUTC() + "\t" + JSON.stringify (interception.response.body) + "\n", {flag:"a+"})
      cy.writeFile("Test_Automation_Intercept.log", getUTC() + "\t This is the expected result: \n" , {flag:"a+"} )
      cy.writeFile("Test_Automation_Intercept.log", getUTC() + "\t"+ JSON.stringify ('@Spain'), {flag:"a+"})
      
      let iterator = 0
      cy.fixture('Spain.json').then(Spain => {
          for (let iterator =0; iterator< Spain.length; iterator++){
            expect(JSON.stringify (Spain[iterator])).to.be.eq(JSON.stringify(interception.response.body[iterator]))
                }   
            }); 
           

         }
         )
      
      
    })
   
   })

