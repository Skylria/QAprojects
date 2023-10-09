var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '81999999999',
            address: {
                postalcode: '53525-775',
                street: 'Rua do José Jucá',
                number: '90',
                details: '90 B',
                district: 'Centro',
                city_state: 'Abreu e Lima/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}