describe('Alert Handling',()=>{
    it.skip('Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()

        //to validate msg ('window:alert') event is used
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')//cypress automatically closes alert window
        })
        cy.get('p#result').should('have.text','You successfully clicked an alert')

    })
         
     // ok and cancel 
    it('Js Confirm Alert:OK',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()

        //to validate msg ('window:confirm') event is used
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')  //cypress automatically closes alert window by clicking on OK button by default
        })
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    //cancel button

    it('Js Confirm Alert:Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()

        //to validate msg ('window:confirm') event is used
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')  
        })

        cy.on('window:confirm',()=> false) //cypress closes alert window by clicking on Cancel button

        cy.get('#result').should('have.text','You clicked: Cancel')
    
    })

     
    // in prompt alert we can passed text

    it('Js Prompt Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
       
        cy.window().then((win)=>{
            
            cy.stub(win,'prompt').returns("welcome")
            
        
        })
        cy.get(':nth-child(3) > button').click() //cypress automatically closes alert window by clicking on OK button by default

        
        cy.get('#result').should('have.text','You entered: welcome')
        
    
    })

    // Authenticated alert
    
    it.only('Js Auth Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth : {username:"admin" , password:"admin"}} )
        

    })
})