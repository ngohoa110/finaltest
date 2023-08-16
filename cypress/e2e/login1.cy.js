import LoginPage from "../pages/login";
import usersData from "../fixtures/users.json";
import HomePage from "../pages/homepage";

let loginPage = new LoginPage();
let homePage = new HomePage();

describe('Login page', () => {
  it('User will redirect to homepage when user click on the logo', () => {
    console.log("visit login page")
    loginPage.visit();

    console.log("click on logo button")
    loginPage.clickOnLogo();

    console.log("verify user redirected to the homepage");
    cy.url().should("equal", "https://prep.brownells.com/");
  })

  it('User can login successfully when user input valid information', () => {
    cy.log("visit login page");
    loginPage.visit();

    cy.log("input username & password & click to signin button");
    loginPage.login(usersData.username, usersData.password);

    cy.log("verify user redirected to the homepage");
    cy.url().should("equal", "https://prep.brownells.com/");

    cy.log("verify username displayed on welcome message");
    homePage.clickOnMyAccountBtn();
    homePage.assertWelcomeMessageDisplayContains("Hi");
  })

  it.only('Check password showing after clicking show button', () => {
    cy.log("Step 1: visit login page");
    loginPage.visit();
    
    
    cy.log("step 2: Input password");
    loginPage.InputPassword(usersData.password)

    cy.log("step 3: Click show button ");
    loginPage.clickShowButton()

    cy.log("step 4: Verify password is displayed");
    loginPage.expectPwShow()
  })
})