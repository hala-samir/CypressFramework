///<reference types="cypress"/>
import {ProductsPage} from "../pageObject/products-page";
import {HomePage} from "../pageObject/home-page";
describe('user can ',()=>{
    
    it('logout',()=>{
     const productsPageObj= new ProductsPage()
     const homePageObj= new HomePage()
     homePageObj.navigate()
     homePageObj.fill_username('standard_user')
     homePageObj.fill_password('secret_sauce')
     homePageObj.click_loginBtn()

     cy.get('.product_label').should('have.text', 'Products')
     productsPageObj.click_sidemenu()
     productsPageObj.logout()
     cy.url().should('include', '/index.html')

   })

   it('add and remove from cart',()=>{
    const productsPageObj= new ProductsPage()
    const homePageObj= new HomePage()
    homePageObj.navigate()
    homePageObj.fill_username('standard_user')
    homePageObj.fill_password('secret_sauce')
    homePageObj.click_loginBtn()

    cy.get('.product_label').should('have.text', 'Products')

    productsPageObj.addToCart()
    
    cy.get('.btn_secondary').should('have.text','REMOVE')
    cy.get('.fa-layers-counter').should ('have.text','1')

    cy.get('.btn_secondary').click()
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').should('have.text','ADD TO CART')

    productsPageObj.click_sidemenu()
    productsPageObj.logout()
    cy.url().should('include', '/index.html')

  })
})