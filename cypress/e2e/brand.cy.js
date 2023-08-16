import BrandPage from "../pages/brand_page";


let brandPage = new BrandPage();

describe('Brand page/ Brand listing page', () => {
  it('Exercise 3: Verify redirect to brand listing page when click to Shop All button', () => {
    cy.log ("Step 1: Go to Brand page")
    brandPage.visitBrandPage();
    cy.log ("Step 2: Click to Shop All button") 
    brandPage.clickOnShopAllBtn();
    cy.log ("Step 3: Verify redirect to brand listing page")
    brandPage.assertDetailBrandTitle("Here are the list of manufacturers we offer");

  })
  it('Exercise 4: Verify brands list page displays correctly when user choose specific letter', () => {
    cy.log ("Step 1: Go to Brand page")
    brandPage.visitBrandPage();
    cy.log ("Step 2: Click to letter C")
    brandPage.clickOnLetterC();
    cy.log ("Step 3: Verify title of page")
    brandPage.assertBrandCListingTitle("All C Brands");
    cy.log ("Step 4: Verify brand list start with letter C")

  })

  it('Exercise 5: Verify brands page displays correctly when user click brand name', () => {
    cy.log ("Step 1: Go to Brand page")
    brandPage.visitBrandPage();
    cy.log ("Step 2: Click to letter C")
    brandPage.clickOnLetterC();
    cy.log ("Step 3: Click to one brand name")
    brandPage.clickOnBrandName();
    cy.log ("Step 4: Verify brand page displays")
    brandPage.assertBrandProductListingTitle("C & H RESEARCH PRODUCTS");

  })

  it.only('Exercise 6: Verify all brands displays correctly when user click "View all brands" button', () => {
    cy.log ("Step 1: Go to Brand page")
    brandPage.visitBrandPage();
    cy.log ("Step 2: Click to View All Brands button")
    brandPage.clickOnViewAllBrandBtn();
    cy.log ("Step 3: Verify all brands displays")
    brandPage.assertAllBrandTitle("All Brands");

  })

})