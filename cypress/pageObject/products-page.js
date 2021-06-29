export class ProductsPage {
    addBackpackToCart_btn(){
       return cy.get('#add-to-cart-sauce-labs-backpack')
    }
    click_sidemenu() {
        cy.get('.bm-burger-button').click()
    }
    logout() {
        cy.get('#logout_sidebar_link').click()
    }
    addToCart() {
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    }
    removeBackpackFromCart_btn()
    {
        return cy.get('#remove-sauce-labs-backpack')
    }

}