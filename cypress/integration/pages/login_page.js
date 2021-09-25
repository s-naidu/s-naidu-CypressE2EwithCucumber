/// <reference types="Cypress" />
const username = "#username"
const password = "#password"
const loginbutton = "body > section > div > div > div.panel-body > div > div > form > div:nth-child(5) > div > button"
const logoutbutton = "li a[href*='index.php?modfunc=logout']"
const URL = require("../../config/qa.json")

export class loginpage {


    launch_site() {
        cy.visit(URL.baseurl)
        cy.log("site launched Successfully")
        
    }

    login_to_site() {
        cy.get(loginbutton).click();
        cy.log("Login Successfully")
    }
}