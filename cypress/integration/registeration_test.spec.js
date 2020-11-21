///<reference types="cypress"/>
import {HomePage} from "../pageObject/home-page";


describe('user can register to a website',()=>{
    
    it('user can navigate to signin page',()=>{
     const homePageObj= new HomePage()
     homePageObj.navigate()
     homePageObj.fill_username('standard_user')
     homePageObj.fill_password('secret_sauce')
     homePageObj.click_loginBtn()

     cy.get('.product_label').should('have.text', 'Products')
   })
})