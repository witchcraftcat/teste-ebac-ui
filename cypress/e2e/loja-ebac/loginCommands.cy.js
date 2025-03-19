/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe("Testar funcionalidade Login", () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it("Deve fazer Login com sucesso - usando Commands", () => {
        cy.login("duda@teste.com.br", "teste123!")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain", "Olá, duda (não é duda? Sair)")
    })

    it.only("Deve completar o cadastro - Usando Commands", ()=>{
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email(nome, sobrenome)
        var senha = faker.internet.password()
        var usuario = faker.internet.userName()

        cy.preCadastro(email, senha, nome, sobrenome, usuario)
        cy.get('.woocommerce-message').should("exist")

    })
        
} )

    