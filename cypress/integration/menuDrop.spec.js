///<reference types="cypress" /> 

describe ('menudown', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('menu_drop_down',() => {

        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/dropdowneselect")
        cy.get(':nth-child(1) > .select-wrapper > input.select-dropdown').click()
        cy.get('li').contains('Naruto').click();
        cy.get(':nth-child(2) > .select-wrapper > input.select-dropdown').click();
        cy.get('li').contains('Ronaldo').click();
        cy.get(':nth-child(3) > .select-wrapper > input.select-dropdown').click();
        cy.get('li').contains('Inglaterra').click();
        cy.get(':nth-child(4) > .select-wrapper > input.select-dropdown').click();
        cy.get('li').contains('Homem').click();
        cy.get(':nth-child(5) > .select-wrapper > input.select-dropdown').click();
        cy.get('li').contains('Masculino').click();
        cy.get(':nth-child(5) > #dropdown').click();
        cy.get('li').contains('Safari').click();
    });



});