describe('Radio Buttons',()=>{
    it('Radio Button',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.xpath("//a[@href='/web/index.php/pim/viewMyDetails']//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name']").should('be.visible')
        .click()
        cy.xpath("//label[normalize-space()='Male']//span").should('be.visible')
        cy.xpath("//label[normalize-space()='Female']//span").should('be.visible')
        
        // Selecting radio buttons

        cy.xpath("//label[normalize-space()='Female']//span").click()
        // .should('be.selected')

        cy.xpath("//label[normalize-space()='Male']//span")


       // cy.xpath("//input[@type='radio' and @value='2']").click({force: true}).should('be.clicked')
        //.check({ force: true })      
       // cy.get('[type="radio"]').should('not.be.checked').and('have.value', '1')      


    })
})