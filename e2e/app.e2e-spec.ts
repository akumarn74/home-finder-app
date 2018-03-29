import { AppPage } from './app.po';

describe('home-finder-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Nav app message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('HomeFinderApp');
  });
});
