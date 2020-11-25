export class ProductsPage {
    click_sidemenu() {
        cy.get('.bm-burger-button').click()
    }
    logout() {
        cy.get('#logout_sidebar_link').click()
    }
    addToCart() {
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()
    }
}