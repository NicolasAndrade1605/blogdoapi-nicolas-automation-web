# QA Web - Blog do Agi Automation

Automação de testes end-to-end no **[Blog do Agi](https://blogdoagi.com.br/)**, desenvolvida como parte do teste técnico de QA Web.

---

## Objetivo

Garantir que as principais funcionalidades de pesquisa e leitura de artigos do Blog do Agi estejam funcionando corretamente através de testes automatizados e reutilizáveis.

---

## Como Executar o Projeto

### Clonar o repositorio
```bash
    git clone https://github.com/NicolasAndrade1605/blogdoapi-nicolas-automation-web.git
    cd blogdoapi-nicolas-automation-web
    mvn clean install 
    mvn test <!-- Executa os testes -->
    mvn allure:serve <!-- Gera e visualiza os relatorios -->
```

---

## Boas praticas do Codigo

- Padrão Page Object Model (POM)
- Separação entre base, page objects, utils e tests
- Esperas explícitas para estabilidade dos testes
- Prints automáticos em caso de falha
- README detalhado com comandos e instruções
- Código limpo e comentado

---

## Nicolas Andrade

- QA Enginner | Automation Test | JavaScript & Cypress
- https://www.linkedin.com/in/nicolas-andrade-bb1a02192/

## Links dos outros repositorios do Desafio

1. **WEB** | https://github.com/NicolasAndrade1605/blogdoapi-nicolas-automation-web.git
2. **API** | https://github.com/NicolasAndrade1605/dogapi-nicolas-automation-api.git
3. **Performance** | https://github.com/NicolasAndrade1605/blazedemo-performance-tests.git