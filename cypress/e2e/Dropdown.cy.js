
describe('Dropdown', ()=>{
    it.skip('Dropdown With Select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
        .select('Itly')
        .should('have.value','Itly')
    })

    it.skip('Bootstrap Dropdown', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type("Ireland").type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Ireland')
       
    })

    it.skip('Auto Sugest Dropdown', ()=>{

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').click().type('delhi')

        //click on required search
        cy.get('h3.suggestion-title').contains('Delhi University').click()
       
       
    })
    it('Dynamic Dropdown', ()=>{

        cy.visit("https://www.google.com/")

        cy.get('textarea#APjFqb.gLFyf').click().type('Cypress Automation')
        cy.wait(3000)
        
        cy.get('#Zrbbw > .wM6W7d > span').each(($el, index, $list)=>{
            if($el.text()=='cypress automation framework')
            {
                cy.wrap($el).click()
            } 
         })
        
         cy.get('#APjFqb.gLFyf').should('have.value','cypress automation framework')
        })
       
})

