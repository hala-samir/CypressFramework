export class ProductsPage{
    click_sidemenu()
    {
        cy.get('.bm-burger-button').click()
    }
    logout()
    {
        cy.get('#logout_sidebar_link').click()
    }
    addToCart()
    {
        //cy.get('.btn_primary.btn_inventory').click()
       // cy.exec ("document.getElementsByClassName('btn_primary')[0]")
       cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    }
}