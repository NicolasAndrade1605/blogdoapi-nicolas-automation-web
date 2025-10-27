import HomePage from "../support/pageObjects/homePage";
import data from "../fixtures/articles.json";

describe ('Busca de artigos no Blog do Agi', () => {
    const homePage = new HomePage();

    it ('Deve buscar um artigo e validar o titulo do resultado', () => {
        cy.visit(data.baseUrl);
        cy.wait(2000);
        homePage.openSearchBar();
        homePage.searchArticle(data.keywords.valid);
        homePage.getFirstArticleTitle(data.expectedTitle);
    });
});