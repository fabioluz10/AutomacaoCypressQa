/// <reference types="cypress" />
import commum_page from "../support/pages/commum_page"
import login_page from "../support/pages/login_page"
import { faker } from '@faker-js/faker'

describe('Login', () => {

    beforeEach("Acessar Pagina de Login", () => {
        commum_page.accessarLogin()
    })

    it('Login com campo e-mail vazio', () => {
        login_page.preencherSenha(faker.internet.password({ length: 6 }))
        login_page.clicarEntrar()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login com campo e-mail invalido', () => {
        login_page.preencherEmail('email-invalido')
        login_page.preencherSenha(faker.internet.email().replace('@', '').replace('.', ''))
        login_page.clicarEntrar()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login com campo senha vazio', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.clicarEntrar()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com campo senha invalida', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.preencherSenha('12345')
        login_page.clicarEntrar()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com Sucesso', async() => {
        const email = await faker.internet.email()
        login_page.preencherEmail(email)
        login_page.preencherSenha(faker.internet.password({ length: 6 }))
        login_page.clicarEntrar()
        login_page.validarMensagemSucesso(email)
    })
})