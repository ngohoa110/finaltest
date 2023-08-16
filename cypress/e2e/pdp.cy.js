import ProductData from "../fixtures/products.json"
import PdpPage from "../pages/pdp"

let pdpPage = new PdpPage();

describe('PDP page', () => {
  it('QDP label does not display when user still does not choose variant', () => {
    cy.log("visit pdp url")
    cy.visit(ProductData.productQDP.url)

    cy.log("assert qdp label do not display")
    pdpPage.assetQDPLabelDoNotDisplay()
  })

  it('QDP label displays when user choose variant', () => {
    cy.log("visit pdp url")
    cy.visit(ProductData.productQDP.url)

    cy.log("Choose variant");
    for(let variant of ProductData.productQDP.variantItems){
      cy.log(variant)
      pdpPage.chooseVariant(variant);
    }
    
    cy.log("assert qdp label displays");
    pdpPage.assetQDPLabelDisplay();

  });

  it.only('QDP apply successfully when user checkout with enough quantity', () => {
    cy.log("visit pdp url")
    cy.visit(ProductData.productQDP.url)

    cy.log("Choose variant");
    for(let variant of ProductData.productQDP.variantItems){
      cy.log(variant)
      pdpPage.chooseVariant(variant);
    }
    
    cy.log("assert qdp label display");
    pdpPage.assetQDPLabelDisplay();

    cy.log('input quantity');
    pdpPage.inputQuantity(ProductData.productQDP.quantityDiscounts[0].quantity)

    cy.log('click to add to cart')
    pdpPage.clickAddtocart()

    cy.log("Assert item values in minicart displays correctly")
    pdpPage.assertItemPriceEqual(ProductData.productQDP.quantityDiscounts[0].totalAmount)

    cy.log("input new quantity in mini cart");
    pdpPage.inputQuantityInMinicart(ProductData.productQDP.quantityDiscounts[1].quantity)

    cy.log('assert new price qdp is applied correctly')
    pdpPage.assertItemPriceEqual(ProductData.productQDP.quantityDiscounts[1].totalAmount)

    cy.log("input more quantity in mini cart");
    pdpPage.inputQuantityInMinicart(ProductData.productQDP.quantityDiscounts[1].quantity + 3)

    cy.log('assert new price qdp is applied correctly')
    pdpPage.assertItemPriceEqual(ProductData.productQDP.quantityDiscounts[1].totalAmount + 3 * ProductData.productQDP.quantityDiscounts[1].pricePerUnit);
    
  });
})