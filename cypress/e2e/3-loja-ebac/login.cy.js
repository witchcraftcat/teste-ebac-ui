/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => { //aqui descrevo qual funcionalidade quero testar

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it("Deve fazer o login com sucesso", () =>{  //todos os testes devem ficar dentro de describe!!! Ele concentra todos os testes desta funcionalidade
        cy.get("#username").type("duda@teste.com.br")
        cy.get('#password').type("teste123!")
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain", "Olá, duda (não é duda? Sair)")
    }) 
    
    it("Deve aparecer uma mensagem de erro ao digittar e-mail desconhecido.",() =>{
        cy.get("#username").type("dudinha@teste.com.br")
        cy.get('#password').type("teste123!")
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-error > li').should("contain", "Endereço de e-mail desconhecido.")
    })

    it("Deve aparecer mensagem de erro ao digitar senha errada", () =>{
        cy.get("#username").type("duda@teste.com.br")
        cy.get('#password').type("teste1")
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should("exist")

    })
    
});
