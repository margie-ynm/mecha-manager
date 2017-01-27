import { MechaManagerPage } from './app.po';

describe('mecha-manager App', function() {
  let page: MechaManagerPage;

  beforeEach(() => {
    page = new MechaManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
