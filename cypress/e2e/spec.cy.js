describe('My first test', () => {
  it('verify title-positive', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')

  })

  it('verify title-neg', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM123')

  })

})