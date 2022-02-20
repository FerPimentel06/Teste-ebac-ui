/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    
    afterEach (() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso' , () => {
cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')
    })

    it.only('Deve fazer login com sucesso 2', () => {
        cy.get('#username').type(perfil.usario)
cy.get('#password').type(perfil.senha)
cy.get('.woocommerce-form > .button').click()
    });

    it('deve exibir uma mensagem de erro ao inserir usuario invalido' , () =>{
cy.get('#username').type('alunno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-error').should('contain' , 'desconhecido')
    })

    it('deve exibir uma mensagem de erro ao inserir senha invalida' , () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testeteste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain' , 'está incorreta')
            })
})
