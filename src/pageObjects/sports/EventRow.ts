import PageObject from '../PageObject.ts';
import { Locator, Page } from '@playwright/test';

export default class EventRow extends PageObject {
  teamHomeLocator: Locator;
  teamAwayLocator: Locator;
  oddsLocator;
  constructor(page: Page, public mainLocator: Locator) {
    super(page);
    this.teamHomeLocator = this.child(".team-home");
    this.teamAwayLocator = this.child(".team-away");
    this.oddsLocator = this.child(".odds");
  }

  async formatedMatchName() {
      const teamHome = await this.teamHomeLocator.textContent();
      const teamAway = await this.teamAwayLocator.textContent();
      return `${teamHome} - ${teamAway}`;
  }




}