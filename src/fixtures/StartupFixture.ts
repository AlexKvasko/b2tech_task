import { test as base } from '@playwright/test';
import SportsPage from '../pageObjects/sports/SportsPage.ts';

export type StartUpFixture = {
  sportsPage: SportsPage;
};
export const test = base.extend<StartUpFixture>({
  sportsPage: async ({ page }, use) => {
    await page.goto("/");
    const dashboard: SportsPage = new SportsPage(page);
    await dashboard.shouldBeVisible();
    await use(dashboard);
  },
});
