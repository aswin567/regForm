import { GoorgoPage } from './app.po';

describe('goorgo App', function() {
  let page: GoorgoPage;

  beforeEach(() => {
    page = new GoorgoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
