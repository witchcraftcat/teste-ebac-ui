/// <reference types = "cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produto', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    // it('Ao clicar no produto, deve ser levado a sua página', () => {
    //     cy.get('.product-block')
    //     //.first()
    //     //.last()
    //     .eq(3)
    //     .click()

    //     cy.get('#tab-title-description > a').should("exist")
        
    // });
    
    // it("Produto que contém determinada descrição", () => {
    //     cy.get('.name')
    //     .contains("Ariel Roll Sleeve Sweatshirt")
    //     .click()

    //     cy.get('#tab-description > :nth-child(1)').should("contain", "Ariel Roll Sleeve Sweatshirt")
    // })

    it("Deve selecionar um produto da lista", () => {
        let produto = "Atlas Fitness Tank"

        produtosPage.buscarProdutoLista(produto)
        cy.get('.product_title').should("contain", produto)

    })

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto("Aether Gym Pant")
        cy.get('#tab-title-description > a').should("exist")
        
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto("Arcadio Gym Short")
        cy.get('#tab-title-description > a').should("exist")
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto("Daphne Full-Zip Hoodie")
        produtosPage.addProdutoCarrinho("M", "Purple", qtd)
        cy.get('.woocommerce-message').should("contain", "foram adicionados no seu carrinho")
    });

    it.only('Deve adicionar produto ao carrinho - Usando dados de lista/massa de dados', () => {
        cy.fixture("produtos").then( dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[1].tamanho,
            dados[1].cor,
            dados[1].quantidade            
        )
        cy.get('.woocommerce-message').should("contain", " no seu carrinho")
    });
        

            
        })
        
        


});