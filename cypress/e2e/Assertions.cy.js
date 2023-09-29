// Implicte assertions- should , and
// Explicite Assertions- expect   , assert

 
describe('Assertions', () => {
    // it('Implicite Assertions', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrmlive.com')

        // cy.url().should('include', 'orangehrmlive.com')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrmlive.com')

        // cy.url().should('include', 'orangehrmlive.com')
        // .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('contain', 'orangehrmlive.com')
        // .and('not.contain', 'orangehrmlive.com456')

        // cy.title().should('include', 'OrangeHRM')
        // .and('eq', 'OrangeHRM')
        //.and('not.contain', 'OrangeHRM')

        // cy.get('.orangehrm-login-branding > img').should('be.visible')
        // .and('exist')   //logo check

        // cy.xpath("//a").should('have.length','5')  // no of links

        // cy.get("input[placeholder='Username']").type("Admin")
        // cy.get("input[placeholder='Username']").should('have.value','Admin')
    // })

    it('Emplicite Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        

        // asserting the exp and act name
        

        let exp_name="Rose Mary";

        cy.get('.oxd-userdropdown-name').then( (x)=>{
           let actual_name=x.text()

            // bdd assertions
           //expect(actual_name).to.equal(exp_name)
           expect(actual_name).to.not.equal(exp_name)

           // tdd assertions
          // assert.equal(actual_name, exp_name)
           assert.notEqual(actual_name, exp_name)

        })

    })
})
