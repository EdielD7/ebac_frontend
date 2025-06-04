/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Anderson Silva')
        cy.get('input[type="email"]').type('silva.john@exemplo.com')
        cy.get('input[type="tel"]').type('123456789')
        cy.get('.adicionar').click()

        cy.get('.contato').last().should('contain', 'Anderson Silva')
        cy.get('.contato').last().should('contain', 'silva.john@exemplo.com')
        cy.get('.contato').last().should('contain', '123456789')
    })

    it('Deve editar um contato existente', () => {
        cy.get('.contato').last().find('.edit').click()
        cy.get('input[type="email"]').clear().type('novo.email@exemplo.com')
        cy.get('.alterar').click()

        cy.get('.contato').last().should('contain', 'novo.email@exemplo.com')
    })

    it('Deve excluir um contato', () => {
        cy.get('.contato').last().find('.delete').click()
        cy.get('.contato').should('not.contain', 'Anderson Silva')
    })
})
