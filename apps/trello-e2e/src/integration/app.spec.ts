import { getGreeting } from '../support/app.po';

describe('trello', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to trello!');
  });
});
