export class HomePage
{
    navigate()
    {
        cy.visit('https://www.saucedemo.com/')
    }
    fill_username(username)
    {
        cy.get('#user-name').type(username)
    }
    fill_password(password)
    {
        cy.get('#password').type(password)
    }
    click_loginBtn()
    {
        cy.get('#login-button').click()
    }

}