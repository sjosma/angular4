import { MatDemov2Page } from './app.po';

describe('mat-demov2 App', () => {
  let page: MatDemov2Page;

  beforeEach(() => {
    page = new MatDemov2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
