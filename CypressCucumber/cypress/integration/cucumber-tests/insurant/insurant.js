import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import vehicle from '../../pages/vehiclePage'
import insurance from '../../pages/insurancePage'
import product from '../../pages/productPage'
import price from  '../../pages/pricePage'
import send from '../../pages/sendPage'

Given("open sample application", ()=>{
    vehicle.go()
})

When("insert vehicles data", ()=>{
    vehicle.fillVehicleData()
    vehicle.goToInsurance()
})

When("insert insurance data", ()=>{
    insurance.fillInsuranceData()
    insurance.goToProduct()
})

When("insert product data", ()=>{
    product.fillProductData()
    product.goToSelectPrice()
})

When("select price option", ()=>{
    price.fillPrice()
    price.goToSendQuote()
})

Then("send quote", ()=>{
    send.fillSendQuote()
    send.sendQuote()
    cy.wait(10000)
    cy.contains('.sweet-alert', 'Sending e-mail success!').should('be.visible')
})