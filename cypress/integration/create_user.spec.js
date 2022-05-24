///<reference types="cypress" />

describe('create_user', () => {

    it('test submit', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/users/new");

        cy.get('[id="user_name"]').type("Test");
        cy.get('[id="user_lastname"]').type("Jr");
        cy.get('[id="user_email"]').type("teste@test.com");
        cy.get('[id="user_address"]').type("Av. test");
        cy.get('[id="user_university"]').type("Uniesp");
        cy.get('[id="user_profile"]').type("Tester");
        cy.get('[id="user_gender"]').type("Masculino");
        cy.get('[id="user_age"]').type("36");
        cy.get('[type="submit"]').click();
        cy.get('[id="notice"]').should("have.text", "Usuário Criado com sucesso" );
        
    });


    it.only('validation_user_infor', () => {

        cy.visit("https://automacaocombatista.herokuapp.com/users/4164")
        cy.contains('Nome: Cypress').should('be.visible');
        cy.contains('Ultimo Nome: Test').should('be.visible');
        cy.contains('Email: teste@test.com').should('be.visible');
        cy.contains('Univercidade: Uniesp').should('be.visible');
        cy.contains('Gênero: Masculino').should('be.visible');
        cy.contains('Profissão: Tester').should('be.visible');
        cy.contains('Idade: 36').should('be.visible');
        cy.contains('Address: Av. test').should('be.visible');
        cy.get('[class="btn waves-light red"]').click();
        

    })

    it('edit_user',() => {

        cy.visit('https://automacaocombatista.herokuapp.com/users/4164/edit')
        cy.get('[id="user_name"]').clear();
        cy.get('[id="user_name"]').type("Cypress");
        cy.get('[id="user_lastname"]').clear();
        cy.get('[id="user_lastname"]').type("Test");
       // cy.get('[id="user_email"]').type("teste@test.com")
       // cy.get('[id="user_address"]').type("Av. test")
       // cy.get('[id="user_university"]').type("Uniesp")
       // cy.get('[id="user_profile"]').type("Tester")
      //  cy.get('[id="user_gender"]').type("Masculino")
      //  cy.get('[id="user_age"]').type("26")
        cy.get('[type="submit"]').click();
        cy.get('[id="notice"]').should("have.text", "Seu Usuário foi Atualizado!" );

    })

    

});