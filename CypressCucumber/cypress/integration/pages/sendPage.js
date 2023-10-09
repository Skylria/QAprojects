class SendPage{
    fillSendQuote() {
        cy.get('#email').type('johndoe@mail.com')
        cy.get('#username').type('John')
        cy.get('#password').type('Pass@1234')
        cy.get('#confirmpassword').type('Pass@1234')
    }

    sendQuote(){
        cy.get('#sendemail').click()
    }
}
export default new SendPage