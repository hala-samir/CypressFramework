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
    cy.get('.title').should('have.text', 'Products')

    productsPageObj.click_sidemenu()
    productsPageObj.logout()
    homePageObj.login_btn().should('be.visible')
  })

  it('logout', () => {
    cy.get('.title').should('have.text', 'Products')
    productsPageObj.click_sidemenu()
    productsPageObj.logout()

    homePageObj.login_btn().should('be.visible')
  })
})