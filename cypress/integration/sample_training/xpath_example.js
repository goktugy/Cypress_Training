describe("This is an example of xpath", () =>{
      it("Should be able to navigate with xpath", () => {

        const baseURL = "https://www.fanatik.com.tr"
        cy.visit(baseURL)
        cy.xpath("/html/body/header/div/nav/ul[2]/li[1]/a").click()

   })
})