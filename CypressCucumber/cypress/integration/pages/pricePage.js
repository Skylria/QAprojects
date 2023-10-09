class PricePage {
    fillPrice(){
        cy.get(':nth-child(3) > .ideal-radio').click()
    }

    downloadQuote(){
        cy.get('#downloadquote').click()
    }

    goToSendQuote(){
        cy.get('#nextsendquote').click()
    }
}
export default new PricePage