export class HomePage
{
    navigate()
    {
        cy.visit('./')
    }
   
    login(username,password)
    {
        cy.get('#user-name').type(username)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
    }

    shoppingCartBadge(){
       return cy.get('.shopping_cart_badge')
    }
    login_btn(){
        return cy.get('[data-test=login-button]')
    }

}