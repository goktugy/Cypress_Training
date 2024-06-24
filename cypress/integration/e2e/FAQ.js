import NavBar from '../page_objects/components/navigation'
import SupportPage from '../page_objects/pages/supportPage'

const URLLink= "https://testcafe.io"
describe('User Should Be Able To Go To FAQ', () => {
    before( function(){
        
        cy.visit(URLLink) 
        cy.get('.burger-stripes').click()
        NavBar.GoToSupport    
    })

    it("Should Be Able To Go To FAQ Page", () => {
        SupportPage.FAQ()
        cy.contains("Can I use TestCafe for free?").should('be.visible')

    })
})