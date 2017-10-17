import { UnijobsAppPage } from './app.po';

describe('unijobs-app App', () => {
  let page: UnijobsAppPage;

  beforeEach(() => {
    page = new UnijobsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
