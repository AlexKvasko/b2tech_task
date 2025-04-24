import PageObject from '../PageObject.ts';
import { Locator, Page } from '@playwright/test';
import EventsContainer from './EventsContainer.ts';
import { TabName } from './TabNames.ts';

export default class SportsCenterContent extends PageObject {
  eventsContainer: EventsContainer;

  constructor(page: Page, public mainLocator: Locator) {
    super(page);
    this.eventsContainer = new EventsContainer(this.page, this.child(".idb-sbm-inf-events-table"));
  }

  async openUpcomingTab(tabName: TabName) {
    await this.child(".idb-cmm-sports-book-menu li").filter({hasText: tabName}).click();
  }
}
