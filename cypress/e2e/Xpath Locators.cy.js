
describe('xpath locator', () => {
    it("xpath test", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()

    })

})
