import { AngularCliNgFormlyPage } from './app.po';

describe('angular-cli-ng-formly App', () => {
  let page: AngularCliNgFormlyPage;

  beforeEach(() => {
    page = new AngularCliNgFormlyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
