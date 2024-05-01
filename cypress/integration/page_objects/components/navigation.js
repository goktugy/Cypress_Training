export default class NavBar {
    static GoToMainMenu(){
        cy.get(".burger-stripes > :nth-child(2)").click()
    }
    
    static Search(searchText){
        cy.get('.DocSearch').type('${searchText} {enter}')
    }

    static GoToSupport(){
        this.GoToMainMenu()
        cy.get('.header-right-nav > ul > :nth-child(4) > a').click()
    }

}