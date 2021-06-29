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
    cy.get('.title').should('have.text', 'Products')

    productsPageObj.addToCart()
    productsPageObj.removeBackpackFromCart_btn().should('be.visible')
    homePageObj.shoppingCartBadge().should('have.text', '1')

    //cy.get('.btn_secondary').click()
    productsPageObj.removeBackpackFromCart_btn().click()
    productsPageObj.addBackpackToCart_btn().should('be.visible')

    productsPageObj.click_sidemenu()
    productsPageObj.logout()

  })
})