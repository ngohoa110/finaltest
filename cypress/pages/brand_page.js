class BrandPage {

    url = "https://prep.brownells.com/brands/";

    elements = {
    
        shopAllBtn: () => cy.get('.content-block__content > p > a'),
        listingBrandpageTitle: () => cy.get('.manufacture-listing-title'),
        letterC: () => cy.get('.manufacturer-list > :nth-child(3) > a'),
        listingBrandCTitle: () => cy.get('.manufacturer-detail__title'),
        brandname: () => cy.get('.col-xl-8 > .row > :nth-child(1)'),
        listingProductBrandTitle: () => cy.get('.manufacturer-listing__header--title'),
        ViewAllBrandBtn: () => cy.get('.d-block'),
        AllBrandTitle: () => cy.get('.manufacturer-detail__title'),
    }

    visitBrandPage() {
        cy.visit(this.url);
    }
    clickOnShopAllBtn() {
        this.elements.shopAllBtn().click();
    }
    assertBrandListingTitle(text){
        this.elements.listingBrandpageTitle().invoke("text").should("equal",text);
        }
    clickOnLetterC() {
        this.elements.letterC().click();
    }
    assertBrandCListingTitle(text){
        this.elements.listingBrandCTitle().invoke("text").should("equal",text);
        }
    clickOnBrandName() {
        cy.wait(1000)
        cy.intercept('POST', "**/api/v2/search").as('visitProductBrandListing')
        this.elements.brandname().click();
        cy.wait('@visitProductBrandListing').its('response.statusCode').should('eq', 200)
        }
    assertBrandProductListingTitle(text){
        
        this.elements.listingProductBrandTitle().invoke("text").should("equal",text);
            }
    clickOnViewAllBrandBtn() {
        this.elements.ViewAllBrandBtn().click();
            }
    assertAllBrandTitle(text){
        
        this.elements.AllBrandTitle().invoke("text").should("equal",text);
                    }

    }
    

export default BrandPage