import { Vangular3Page } from './app.po';

describe('vangular3 App', () => {
  let page: Vangular3Page;

  beforeEach(() => {
    page = new Vangular3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
