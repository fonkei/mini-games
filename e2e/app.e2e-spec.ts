import { MiniGamesPage } from './app.po';

describe('mini-games App', function() {
  let page: MiniGamesPage;

  beforeEach(() => {
    page = new MiniGamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
