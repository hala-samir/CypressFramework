///<reference types="cypress"/>
import { ProductsPage } from "../pageObject/products-page";
import { HomePage } from "../pageObject/home-page";
describe('user can ', () => {
  const homePageObj = new HomePage()
  const productsPageObj = new ProductsPage()
  beforeEach(function () {
    cy.fixture('data.json').then(function (data) {
      this.data = data

    
      homePageObj.navigate()
      
      homePageObj.login(this.data.username,this.data.password)
    })
  })

  it('add and remove from cart', () => {
    cy.get('.product_label').should('have.text', 'Products')

    productsPageObj.addToCart()

    cy.get('.btn_secondary').should('have.text', 'REMOVE')
    cy.get('.fa-layers-counter').should('have.text', '1')

    cy.get('.btn_secondary').click()
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').should('have.text', 'ADD TO CART')

    productsPageObj.click_sidemenu()
    productsPageObj.logout()
    cy.url().should('include', '/index.html')

  })
})