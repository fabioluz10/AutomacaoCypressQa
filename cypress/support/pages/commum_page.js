//Métodos comuns a todas as páginas
export default {
    accessarCadastroUsuario() {
        cy.visit('/')
            .get('.top_header_left')
            .should('be.visible')

        cy.get('.fa-lock')
            .click()
    },
    accessarLogin() {
        cy.visit('/')
            .get('.top_header_left')
            .should('be.visible')

        cy.get('.fa-user')
            .click()
    }
}