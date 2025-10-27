class ArticlePage {
    getTitle() {
        return cy.get('.entry-title', {timeout:10000});
    }

    getMetaInfo() {
        return cy.get('.entry-meta', {timeout:10000});
    }

    validateExpectedTitle(expectedTitle) {
        this.getTitle().should('contain.text', expectedTitle);
    }
}

export default ArticlePage;    