class MainPage {
   static loadPage(){
      const destinationURL = "https://devexpress.github.io/testcafe/example/"
        cy.visit(destinationURL)
   }
  
   static wait(waitSeconds) {
       cy.wait(waitSeconds)
   }
}

class HomePage extends MainPage{
    static scrollUp() {
       cy.get("header").scrollIntoView()
    }

    static scrollDown(){
      cy.get('[data-testid="submit-button"]').scrollIntoView()
    }

}
describe("This is a sample class implementation" , () => {
    before( function () {
        HomePage.loadPage()
    })

    it("Lets write a test class with classes", () => {
           HomePage.scrollDown()
           HomePage.wait(3000)
           HomePage.scrollUp()  
    })

})