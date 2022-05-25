///<reference types="cypress" /> 

describe ('Testing Browser Alerts', () => {

    it('alert_js', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/mudancadefoco/alert");
        cy.get('ul > :nth-child(1) > .btn').click();


});
});