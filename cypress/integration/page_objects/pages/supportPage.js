import BasePage from "./basePage"

export default class SupportPage extends BasePage{
   static FAQ(){
        cy.contains("FAQ").click()
  }
}