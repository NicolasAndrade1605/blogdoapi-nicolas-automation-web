class HomePage {
    openSearchBar() {
        cy.get('.slide-search.astra-search-icon', {timeout:10000})
        .should('be.visible').click(); 

        cy.get('input[type="search"]', {timeout:10000})
        .should('be.visible');
    }

    searchArticle(keywords) {
        cy.get('input[type="search"]').type(`${keywords}{enter}`);

        cy.url().should('include', `s=${encodeURIComponent(keywords)}`);

        cy.get('h2.entry-title a', {timeout:10000})
        .should('exist');
    }

    getFirstArticleTitle() {
        return cy.get('h2.entry-title a').first().invoke('text')
        .then((text) => text.trim());
    }

    openFirstArticle() {
        cy.contains('h2.entry-title a', title, {timeout:10000})
        .click();
    }

    openArticleByTitle(title) {
        cy.contains('h2.entry-title a', title, {timeout:10000})
        .should('be.visible')
        .click();
    }

}

export default HomePage;