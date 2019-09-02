import { ZtiProjektPage } from './app.po';

describe('zti-projekt App', function() {
  let page: ZtiProjektPage;

  beforeEach(() => {
    page = new ZtiProjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
