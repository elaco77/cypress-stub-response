/// <reference types="cypress" />

context('Stub response', () => {
  it('status to be 500', () => {
    // usually returns 200
    cy.visit('http://demo.realworld.io/#/login');
    
    cy.server();

    cy.route({
      method: 'POST',
      url: '**/api/users/login',
      status: 500,
      response: { error: "Internal server error"}
    }).as('postLogin');

    cy.get('input[placeholder="Email"]')
      .type('test@500.com')
      .get('input[placeholder="Password"]')
      .type('password')
      .get('button').contains('Sign in')
      .click()
      .wait('@postLogin');
  })
})
