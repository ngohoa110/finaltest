import Converter from "../ultis/converter";
let converter = new Converter();
class PdpPage {

    elements = {
        qdpLabel: () => cy.get('.tablet-sticky-bottom > .variant__volume-discount > .pdp-favorite'),
        variantOption: (option) => cy.get("input[value='" + option + "']"),
        quantityInput: () => cy.get('#qty'),
        itempriceInMiniCart: () => cy.get('.mini-cart__product-price--cost'),
        AddtocartBtn: () => cy.get('.pdp-info__btn > .btn'),
        quantityInputInMiniCart: () => cy.get('.mini-cart__product-quantity > .input')
    }

    assetQDPLabelDoNotDisplay() {
        this.elements.qdpLabel()
            .should("not.visible")
    }

    assetQDPLabelDisplay() {
        this.elements.qdpLabel()
            .should("be.visible")
    }
    chooseVariant(variantName) {
        this.elements.variantOption(variantName)
            .click();
    }
    inputQuantity(qty) {
        this.elements.quantityInput()
            .clear()
            .type(qty);
    }
    clickAddtocart(qty) {
        this.elements.AddtocartBtn()
            .click();
    }
    assertItemPriceEqual(expectedPrice) {

        this.elements.itempriceInMiniCart()
            .invoke("text")
            .then(priceText => {
                let actualPrice = converter.extractAmountFromPriceString(priceText);
                expect(actualPrice).to.be.closeTo(expectedPrice, 0.001);
            })
    }
    inputQuantityInMinicart(qty) {
        cy.wait(1000)

        cy.intercept('POST', "**/DefaultCart/ChangeCartItem").as('changeCartItem')
        this.elements.quantityInputInMiniCart()
            .clear({ force: true })
            .type(qty, { force: true })
            .type("{enter}", { force: true });

        cy.wait('@changeCartItem').its('response.statusCode').should('eq', 200)
    }
}

export default PdpPage