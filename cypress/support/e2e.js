beforeEach(() => {
    const urlsToForceNetworkError = [
        'https://dc.services.visualstudio.com/**',
        'https://cdn.cookielaw.org/**',
        'https://www.googletagmanager.com/**',
        'https://cdn.listrakbi.com/**',
        'https://surveys-static.survicate.com/**'
    ]
    urlsToForceNetworkError.forEach((url) => {
        cy.intercept(url, { forceNetworkError: true })
    })
})