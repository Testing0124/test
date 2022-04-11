describe('Login', () => {
    beforeEach(() => {
    cy.visit('http://localhost:8000')
    })
 
    it('login', () => {
          cy.get('.btn > .form-control').type('c6d3456c520962cda')
          cy.contais('Enter').click()
    })
