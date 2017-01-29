import { PartyGamesPage } from './app.po';

describe('party-games App', function() {
  let page: PartyGamesPage;

  beforeEach(() => {
    page = new PartyGamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
