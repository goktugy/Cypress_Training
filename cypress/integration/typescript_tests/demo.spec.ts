describe("Sample Typescript Test", () => {
   it("should visit simple website", () => {
        cy.visitHome()
        cy.visitWorld()
        cy.visitCulture()
   })
})