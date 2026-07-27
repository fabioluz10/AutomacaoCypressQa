/// <reference types="cypress" />
import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import { faker } from '@faker-js/faker'

describe('Cadastro de Usuário', () => {

    beforeEach("Acessar cadastro de Usuarios", () => {
        commum_page.accessarCadastroUsuario()
    })

    it('Campo nome vazio', () => {
       cadastro_usuario_page.clicarCadastrar()
       cadastro_usuario_page.validarMensgaemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensgaemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo e-mail inválido', () => {
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.internet.email().replace('@', '').replace('.', ''))
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensgaemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensgaemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválida', () => {
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha(faker.internet.password({ length: 5 }))
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensgaemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro de usuário com sucesso', async() => {
        const nome = await faker.person.fullName()
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha(faker.internet.password({ length: 6 }))
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(nome)
    })

})
