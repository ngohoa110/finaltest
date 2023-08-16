class HomePage {
    url = "https://prep.brownells.com/"

    elements = {
        myAccountBtn: () => cy.get('.header__util-account-btn'),
        welcomeMsg: () => cy.get("a[data-auto-name='header-username']"),
    }

    clickOnMyAccountBtn() {
        this.elements.myAccountBtn()
            .click();
    }

    assertWelcomeMessageDisplayContains(textExpect) {
        this.elements.welcomeMsg()
            .invoke("text")
            .should("contains",textExpect);
    }
}

export default HomePage