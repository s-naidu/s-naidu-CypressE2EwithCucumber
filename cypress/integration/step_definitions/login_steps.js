import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { loginpage } from "../../integration/pages/login_page";
import { homepage } from "../../integration/pages/home_page";
const lp = new loginpage();
const hp = new homepage();
const data = require("../../fixtures/TestDataFiles/LoginCredentials.json");
const username = "#username";
const password = "#password";

// Login to system
Given('As a user i open the opensis', function () {
    lp.launch_site();
});

When('I login as a {string}', function (UserTypeValue) {
    cy.fixture('TestDataFiles/LoginCredentials.json').as('loginCredentials');
    cy.log('Value passed in' +UserTypeValue);
  
    //Use alias and identify the object which matched to the information passed from feature file
    cy.get('@loginCredentials').then((user) => {
  
       // Find the object corresponding to UserType passed in
        var data = user.filter(item => (item.UserType == UserTypeValue));
   
        //printout details
        var propValue;
        cy.log('filtered data :'+data[0]);
        for(var propName in data[0]) {
          propValue = data[0][propName]
  
          cy.log(propName,propValue);
          }
  
         //Login
       cy.get(username).type(data[0].UserName);
       cy.get(password).type(data[0].Password,{log:false});
       
    });
  
    lp.login_to_site(); 
});

And('I am successfully login to the application', function () {
    cy.log("login success")
    hp.login_to_site_succes();
});

Then('I click logout to redirect to the login page', function () {
   
    hp.logout_to_site_succes();
 });
