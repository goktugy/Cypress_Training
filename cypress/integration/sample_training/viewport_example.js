describe("Playing With Viewpoint", ()=> {

    const website= "http://www.amazon.com"
    const title="Amazon"

    it("Should Support Ipad", ()=>{
    cy.viewport("ipad-mini")
    cy.visit(website)
    cy.title().should("include", title)
    cy.wait(2000)
    
    })

it("Should Support iPhone X", ()=>{
    cy.viewport("iphone-x")
    cy.visit(website)
    cy.title().should("include", title)
    cy.wait(2000)
    })

})