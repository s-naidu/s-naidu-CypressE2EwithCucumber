/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
const username = "#username"
const password = "#password"
const loginbutton = "body > section > div > div > div.panel-body > div > div > form > div:nth-child(5) > div > button"
const logoutbutton = "li a[href*='index.php?modfunc=logout']"
const frameLoaded='.responsive-iframe';
const logindata = require("../../config/qa.json")
const user_header='ul li#header'
const myaccount="div a[href*='#user-nav']";
import 'cypress-iframe'

export class homepage {

    login_to_site_succes() {
       
         cy.iframe(frameLoaded).find(user_header).should('be.visible')
         cy.log("Login Successfully")
         
    }

   logout_to_site_succes() {
        cy.iframe(frameLoaded).find(myaccount).click();
        cy.iframe(frameLoaded).find(logoutbutton).click();
        cy.log("Logout Successfully")
        cy.get(username).should('be.visible')
    }
}