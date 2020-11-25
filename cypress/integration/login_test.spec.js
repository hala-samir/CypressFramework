///<reference types="cypress"/>
import {ProductsPage} from "../pageObject/products-page";
import {HomePage} from "../pageObject/home-page";


describe('user can ',()=>{
    
    it('login',()=>{
     const homePageObj= new HomePage()
     const productsPageObj= new ProductsPage()

     homePageObj.navigate()

     homePageObj.fill_username('standard_user')
     homePageObj.fill_password('secret_sauce')
     homePageObj.click_loginBtn()

     cy.get('.product_label').should('have.text', 'Products')
     
     productsPageObj.click_sidemenu()
     productsPageObj.logout()
     cy.url().should('include', '/index.html')
   })

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
})