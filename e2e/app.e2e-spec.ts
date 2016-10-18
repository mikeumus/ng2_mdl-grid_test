import { Ng2GridTestPage } from './app.po';

describe('ng2-grid-test App', function() {
  let page: Ng2GridTestPage;

  beforeEach(() => {
    page = new Ng2GridTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
