describe('CSS locator', () => {
    it("CSS Locator",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
       // cy.get("input[placeholder='Username']").type("Admin") // tagname[attribute name='attribute value']
        cy.get(".oxd-input oxd-input--active,[name='username']").type("Admin") // by class+[attribute]
       // cy.get("input[placeholder='Password']").type("admin123") 
        cy.get("[type='password']").type("admin123")  //[attribute name ='att value'] tag is optional
        cy.get("button[type='submit']").click()
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click()  //assertion
      
        */#id value, .class value*/
    })
})
