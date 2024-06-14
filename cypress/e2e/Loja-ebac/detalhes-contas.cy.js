///<reference types="cypress"/>

import {faker} from "@faker-js/faker";

describe('Funcionalidade: DEtalhes da conta', () => {
    before(() =>{
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario,login.senha)
        })
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Ana','Garcia', 'Ana_QA')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});