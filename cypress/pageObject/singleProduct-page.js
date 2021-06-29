export class SingleProductsPage {
    backToProducts_btn(){
       return cy.get('#back-to-products')
    }
    backToProductsPage(){
        this.backToProducts_btn().click()
    }
    

}