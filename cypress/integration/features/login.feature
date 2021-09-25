Feature: Verifyng login flow

    As a opensis users (aminn,teacher,parent,student) I want to test login and logout functionaly

Scenario: Login with Administrator
Given As a user i open the opensis
When I login as a 'administrator'
And I am successfully login to the application
Then I click logout to redirect to the login page

Scenario: Login with Teacher
Given As a user i open the opensis
When I login as a 'teacher'
And I am successfully login to the application
Then I click logout to redirect to the login page

Scenario: Login with Parent
Given As a user i open the opensis
When I login as a 'parent'
And I am successfully login to the application
Then I click logout to redirect to the login page

Scenario: Login with Student
Given As a user i open the opensis
When I login as a 'student'
And I am successfully login to the application
Then I click logout to redirect to the login page


