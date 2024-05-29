///<reference types="cypress"/>

describe('Funcionalidade: Login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('ana@teste.com')
        cy.get('#password').type('A123456!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ana (não é ana? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('A123456!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('ana@teste.com')
        cy.get('#password').type('A000000!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail ana@teste.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
    });
})