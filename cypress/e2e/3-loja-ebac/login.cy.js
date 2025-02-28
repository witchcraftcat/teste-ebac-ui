/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => { //aqui descrevo qual funcionalidade quero testar

    it("Deve fazer o login com sucesso", () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get("#username").type("duda@teste.com.br")
        cy.get('#password').type("teste123!")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain", "Olá, duda (não é duda? Sair)")

    })    
    
});
