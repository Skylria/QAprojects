class ProductPage {
    fillProductData(){
        cy.get('#startdate').type('12/01/2023')
        cy.get('#insurancesum').select('3.000.000,00')
        cy.get('#meritrating').select('Bonus 4')
        cy.get('#damageinsurance').select('Partial Coverage')
        cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(2)').click()
        cy.get('#courtesycar').select('No')
    }

    goToSelectPrice(){
        cy.get('#nextselectpriceoption').click()
    }
}

export default new ProductPage