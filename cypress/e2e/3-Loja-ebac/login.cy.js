///<reference types="cypress"/>

describe('Funcionalidade: Login', () =>{
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ana@teste.com')
        cy.get('#password').type('A123456!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ana (não é ana? Sair)')
    })
})