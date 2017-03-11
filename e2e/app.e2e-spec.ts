import { BussinessContactsPage } from './app.po';

describe('bussiness-contacts App', () => {
  let page: BussinessContactsPage;

  beforeEach(() => {
    page = new BussinessContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
