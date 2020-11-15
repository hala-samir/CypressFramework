///<reference types="cypress"/>
import {HomePage} from "../pageObject/home-page";


describe('user can register to a website',()=>{
    const homePage= new HomePage()

    it('user can navigate to signin page',()=>{

     homePage.navigate()
     homePage.signin()
     cy.get('.product_label').should('have.text', 'Products')
   })
})