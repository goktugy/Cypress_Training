import BasePage from "./basePage"

export default class SupportPage extends BasePage{
   static FAQ(){
        cy.contains("All FAQ").scrollIntoView()
        cy.get('.info-btn').click()
  }
}