///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('Deve selecionar o produto da lista', () => {
        cy.get('.products > .row')
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
            cy.get('#tab-title-description > a')
            .should('contain', 'Descrição')
    });
});