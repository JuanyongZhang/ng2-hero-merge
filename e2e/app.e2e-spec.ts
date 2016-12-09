import { Ng2HeroMergePage } from './app.po';

describe('ng2-hero-merge App', function() {
  let page: Ng2HeroMergePage;

  beforeEach(() => {
    page = new Ng2HeroMergePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
