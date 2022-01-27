/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso' , () => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')
    })

    it('deve exibir uma mensagem de erro ao inserir usuario invalido' , () =>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('alunno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-error').should('contain' , 'desconhecido')
    })

    it('deve exibir uma mensagem de erro ao inserir senha invalida' , () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testeteste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain' , 'está incorreta')
            })
})
