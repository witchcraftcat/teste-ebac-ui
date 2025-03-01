/// <reference types = "cypress" />

describe('Funcionalidade: Produto', () => {
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/produtos/")
    });

    it('Ao clicar no produto, deve ser levado a sua página', () => {
        cy.get('.product-block')
        //.first()
        //.last()
        .eq(3)
        .click()

        cy.get('#tab-title-description > a').should("exist")
        
    });
    
    it("Produto que contém determinada descrição", () => {
        cy.get('.name')
        .contains("Ariel Roll Sleeve Sweatshirt")
        .click()

        cy.get('#tab-description > :nth-child(1)').should("contain", "Ariel Roll Sleeve Sweatshirt")
    })
});