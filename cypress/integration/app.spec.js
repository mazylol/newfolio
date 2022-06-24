describe('Navigation', () => {
  it('should navigate to the skills page', () => {
    cy.visit('/');
    cy.get('#skillsp>div').click();
    cy.url().should('include', '/skills');
  });
  it('should navigate to the projects page', () => {
    cy.visit('/');
    cy.get('#projectsp>div').click();
    cy.url().should('include', '/projects');
  });
  it('should navigate to the about page', () => {
    cy.visit('/');
    cy.get('#aboutp>div').click();
    cy.url().should('include', '/about');
  });
});

describe('Error handling', () => {
  it('should go to a 404 page', () => {
    cy.visit({
      url: '/fitnessgrampacertest',
      method: 'GET',
      failOnStatusCode: false
    });
    cy.url().should('include', '/fitnessgrampacertest');
    cy.get('h2').contains('This page could not be found.');
  });
});

describe('Buttons on the skills page', () => {
  it('should click the ts button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://www.typescriptlang.org"]').click();
    cy.url().should('include', 'https://www.typescriptlang.org');
  });
  it('should click the python button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://www.python.org"]').click();
    cy.url().should('include', 'https://www.python.org');
  });
  it('should click the c button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://en.wikipedia.org/wiki/C_(programming_language)"]').click();
    cy.url().should('include', 'https://en.wikipedia.org/wiki/C_(programming_language)');
  });
  it('should click the lua button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://www.lua.org"]').click();
    cy.url().should('include', 'https://www.lua.org');
  });
  it('should click the bash button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://www.gnu.org/software/bash/"').click();
    cy.url().should('include', 'https://www.gnu.org/software/bash/');
  });
  it('should click the react button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://reactjs.org"]').click();
    cy.url().should('include', 'https://reactjs.org');
  });
  it('should click nextjs button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://nextjs.org"]').click();
    cy.url().should('include', 'https://nextjs.org');
  });
  it('should click the vue button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://vuejs.org"]').click();
    cy.url().should('include', 'https://vuejs.org');
  });
  it('should click the nuxt button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://nuxtjs.org"]').click();
    cy.url().should('include', 'https://nuxtjs.org');
  });
  it('should click the svelte button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://svelte.dev"]').click();
    cy.url().should('include', 'https://svelte.dev');
  });
  it('should click the tailwind button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://tailwindcss.com"]').click();
    cy.url().should('include', 'https://tailwindcss.com');
  });
  it('should click the git button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://git-scm.com"]').click();
    cy.url().should('include', 'https://git-scm.com');
  });
  it('should click the vercel button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://vercel.com"]').click();
    cy.url().should('include', 'https://vercel.com');
  });
  it('should click the cloudflare button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://www.cloudflare.com"]').click();
    cy.url().should('include', 'https://www.cloudflare.com');
  });
  it('should click the little tuxie boi', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://www.kernel.org"]').click();
    cy.url().should('include', 'https://www.kernel.org');
  });
  it('should click the circle ci button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://circleci.com"]').click();
    cy.url().should('include', 'https://circleci.com');
  });
  it('should click the vscode button', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://code.visualstudio.com"]').click();
    cy.url().should('include', 'https://code.visualstudio.com');
  });
  it('should click the neovim buttom', () => {
    cy.visit('/skills');
    cy.get('a[href*="https://neovim.io"]').click();
    cy.url().should('include', 'https://neovim.io');
  });
});

describe('Buttons on the projects page', () => {
  it('should click the discode button', () => {
    cy.visit('/projects');
    cy.get('#discodep>div').click();
    cy.url().should('include', 'https://discode.mazylol.com');
  });
  it('should click the mazbot button', () => {
    cy.visit('/projects');
    cy.get('#mazbotp>div').click();
    cy.url().should('include', 'https://github.com/mazylol/mazbot');
  });
});
