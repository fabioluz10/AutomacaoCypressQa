/// <reference types="cypress" />

export default {
    preencherEmail(email) {
        cy.get('#user')
            .clear()
            .type(email)
    },
    preencherSenha(senha) {
        cy.get('#passwordS')
            .clear()
            .type(senha)
    },
    clicarEntrar() {
        cy.get('#btnLogin')
            .click()
    },
    validarMensagemErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)
    },
    validarMensagemSucesso(nome) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${nome}`)
    }
}