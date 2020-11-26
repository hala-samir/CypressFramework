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
  
  it('login', () => { 
    cy.get('.product_label').should('have.text', 'Products')

    productsPageObj.click_sidemenu()
    productsPageObj.logout()
    cy.url().should('include', '/index.html')
  })

  it('logout', () => {
    cy.get('.product_label').should('have.text', 'Products')
    productsPageObj.click_sidemenu()
    productsPageObj.logout()
    cy.url().should('include', '/index.html')
  })
})