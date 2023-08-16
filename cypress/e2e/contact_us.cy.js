import ContactUsPage from "../pages/contact_us_page.js";
import Data from "../fixtures/contact_us_data.json";


let contactUsPage = new ContactUsPage();


describe('Exercise 1: Error message displays when user input invalid data on Contact us page', () => {
  it('TC1: Error message displays when all fields are blank', () => {
    
    cy.log ("Step 1: Go to Contact us page")
    contactUsPage.visitContactUsPage();

    cy.log ("Step 2: Click Submit button")
    contactUsPage.clickToSubmitBtn();

    cy.log ("Step 3: Verify error message of First Name field")
    contactUsPage.assertFirstNameErrorMessage("This field is required.");

    cy.log ("Step 4: Verify error message of Last Name field")
    contactUsPage.assertLastNameErrorMessage("This field is required.");

    cy.log ("Step 5: Verify error message of Email field")
    contactUsPage.assertEmailAddressErrorMessage("This field is required.");
    
    cy.log ("Step 6: Verify error message of Message field")
    contactUsPage.assertMessageErrorMessage("This field is required.");
})
})

it('TC2: Error message displays when input incorrect email format', () => {
    
  cy.log ("Step 1: Go to Contact us page")
  contactUsPage.visitContactUsPage();

  cy.log ("Step 2: Input valid value for Fisrt name field")
  contactUsPage.inputValueToFirstName(Data["Value"]["First Name"]);

  cy.log ("Step 3: Input valid value for Last Name field")
  contactUsPage.inputValueToLastName(Data["Value"]["Last Name"]);

  cy.log ("Step 4: Input invalid value for Email field")
  contactUsPage.inputValueToEmaillAddress(Data["Value"]["Wrong Format Email"]);
  
  cy.log ("Step 5: Input valid value for Message field")
  contactUsPage.inputValueToMessage(Data["Value"]["Message"]);

  cy.log ("Step 6: Click Submit button")
  contactUsPage.clickToSubmitBtn();

  cy.log ("Step 7: Verify error message of Email field")
  contactUsPage.assertEmailAddressErrorMessage("Enter a valid email address.");

})

it('TC3: Error message displays when input only space to required fields', () => {
    
  cy.log ("Step 1: Go to Contact us page")
  contactUsPage.visitContactUsPage();

  cy.log ("Step 2: Input space for Fisrt name field")
  contactUsPage.inputValueToFirstName(Data["Value"]["Space chars"]);

  cy.log ("Step 3: Input space for Last Name field")
  contactUsPage.inputValueToLastName(Data["Value"]["Space chars"]);

  cy.log ("Step 4: Input space for Email field")
  contactUsPage.inputValueToEmaillAddress(Data["Value"]["Space chars"]);
  
  cy.log ("Step 5: Input space for Message field")
  contactUsPage.inputValueToMessage(Data["Value"]["Space chars"]);

  cy.log ("Step 6: Click Submit button")
  contactUsPage.clickToSubmitBtn();

  cy.log ("Step 7: Verify error message of First Name field")
  contactUsPage.assertFirstNameErrorMessage("This field is required.");

  cy.log ("Step 8: Verify error message of Last Name field")
  contactUsPage.assertLastNameErrorMessage("This field is required.");

  cy.log ("Step 9: Verify error message of Email field")
  contactUsPage.assertEmailAddressErrorMessage("This field is required.");
    
  cy.log ("Step 10: Verify error message of Message field")
  contactUsPage.assertMessageErrorMessage("This field is required.");

})

it.only('Exercise 2: User can submit successfully when user input valid data ', () => {
    
  cy.log ("Step 1: Go to Contact us page")
  contactUsPage.visitContactUsPage();

  cy.log ("Step 2: Input valid value for Fisrt name field")
  contactUsPage.inputValueToFirstName(Data["Value"]["First Name"]);

  cy.log ("Step 3: Input valid value for Last Name field")
  contactUsPage.inputValueToLastName(Data["Value"]["Last Name"]);

  cy.log ("Step 4: Input invalid value for Email field")
  contactUsPage.inputValueToEmaillAddress(Data["Value"]["Email Address"]);
  
  cy.log ("Step 5: Input valid value for Message field")
  contactUsPage.inputValueToMessage(Data["Value"]["Message"]);

  cy.log ("Step 6: Click Submit button")
  contactUsPage.clickToSubmitBtn();

  cy.log ("Step 7: Verify submit successfully")
  contactUsPage.assertSubmitSuccessfully("The form has been submitted successfully.");

})









