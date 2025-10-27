import HomePage from "../support/pageObjects/homePage";
import ArticlePage from "../support/pageObjects/articlePage";
import data from "../fixtures/articles.json";

describe ('Abertura e validação de artigos no Blog do Agi', () => {
    const homePage = new HomePage();
    const articlePage = new ArticlePage();

    it ('Deve abrir um artigo e validar o titulo, autor e data', () => {
        cy.visit(data.baseUrl);
        cy.wait(2000);
        homePage.openSearchBar();
        homePage.searchArticle(data.keywords.valid);
        homePage.openArticleByTitle(data.articleExpectedTitle);
        articlePage.getTitle().should('contain.text', data.articleExpectedTitle);
        articlePage.getMetaInfo().should('contain.text', 'por');
    });
});