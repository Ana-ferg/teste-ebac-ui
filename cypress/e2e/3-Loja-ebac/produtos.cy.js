///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar o produto da lista', () => {
        cy.get('.products > .row')
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
            cy.get('#tab-title-additional_information > a')
            .click()
            .should('be.visible')
    });
});