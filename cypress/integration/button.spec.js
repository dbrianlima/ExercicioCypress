//identificador da liguagem do cypress.//
///<reference types="cypress" /> 

describe('buton test', () => {
   
    it('validate button', () => {
        
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/botoes");

        cy.get('[id="teste"]').click();
        cy.get("#div1 > h5").should("have.text", "Você Clicou no Botão!"); 
        
    });

    it('test submit', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/botoes");

        cy.get('[type="submit"]').click()
        cy.get("#div4 > h5").should("have.text", "Você Clicou no Botão!" );
    });

    it.only('', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield")
        cy.get('[id="first_name"]').type("David")
        cy.get('[id="first_name"]').should("have.value", "David")

    })

    

});

