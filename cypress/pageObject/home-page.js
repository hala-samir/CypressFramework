export class HomePage
{
    navigate()
    {
        cy.visit('https://www.saucedemo.com/')
    }
    signin()
    {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    }

}