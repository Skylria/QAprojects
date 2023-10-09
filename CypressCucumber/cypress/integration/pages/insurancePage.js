class InsurancePage{

    fillInsuranceData(){
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#birthdate').type('01/01/1980')
        cy.get(':nth-child(4) > .group > :nth-child(1) > .ideal-radio').click()
        cy.get('#streetaddress').type('1st Avenue')
        cy.get('#country').select('Cuba')
        cy.get('#zipcode').type('1254629')
        cy.get('#city').type('Doe St')
        cy.get('#occupation').select('Farmer')
        cy.get(':nth-child(5) > .ideal-check').click()    

    }

    goToProduct(){
        cy.get('#nextenterproductdata').click()
    }
}

export default new InsurancePage