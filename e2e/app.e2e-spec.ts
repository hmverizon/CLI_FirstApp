import { CLIFirstAppPage } from './app.po';

describe('cli-first-app App', function() {
  let page: CLIFirstAppPage;

  beforeEach(() => {
    page = new CLIFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
