class VehiclePage {

    go() {
        cy.visit("http://sampleapp.tricentis.com/101/app.php")
        cy.title().should('eq', 'Enter Vehicle Data')
    }

    fillVehicleData(){
        cy.get('.main-navigation a[id="nav_automobile"]').click()
        cy.get('#make').select('Mazda')
        cy.get('#engineperformance').type('2000')
        cy.get('#dateofmanufacture').type('01/01/2021')
        cy.get('#numberofseats').select('6')
        cy.get('#fuel').select('Diesel')
        cy.get('#listprice').type('2000')
        cy.get('#licenseplatenumber').type('abscde')
        cy.get('#annualmileage').type('2000')
    }

    goToInsurance(){
        cy.get('button[id="nextenterinsurantdata"]').click()
    }

}

export default new VehiclePage