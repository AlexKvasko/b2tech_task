import { Locator, Page } from '@playwright/test';

export default abstract class PageObject {
  abstract mainLocator: Locator;

  constructor(public page: Page) {}

  async shouldBeVisible(): Promise<void> {
    await this.mainLocator.waitFor({state: 'visible'});
  }

   locator(selector: string, options?:Parameters<Page["locator"]>[1]): Locator {
    return this.page.locator(selector, options);
  }

  child(selector: string, options?:Parameters<Page["locator"]>[1]): Locator{
    return this.mainLocator.locator(selector, options);
  }
}
