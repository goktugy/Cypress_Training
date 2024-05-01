export default class BasePage {
    static pause(ms) {
        cy.wait(ms)
    }

    static logInfo(message){
        cy.log(message)
    }

    static setView(type) {
        switch(type){
            case "mobile" :
                cy.setSize('iphone-x')
            break    

            case "desktop" :
                cy.setSize('macbook-13')
            break
            
            case "large_desktop" :
                cy.seSize(1980,1080)    
            break    

            default:
                cy.setSize('macbook-13')    
            break        
            }
        }    
}//End Of Class