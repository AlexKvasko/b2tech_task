import PageObject from '../PageObject.ts';
import { Locator, Page } from '@playwright/test';
import EventRow from './EventRow.ts';
import { FilterFunction } from './EventFilters.ts';

export default class EventsContainer extends PageObject{
  constructor(page: Page, public mainLocator: Locator) {
    super(page);
  }


  async getAllEventRows(): Promise<EventRow[]> {
    const allRows: Locator[] = await this.child(".event-row").all();
    return allRows.map(row => new EventRow(this.page, row));
  }

  async filterEvents<T>(events: EventRow[], filter: FilterFunction<T>, filterArguments : {args: T[]}) {
    const filteredEvents: EventRow[] = [];
    for (const event of events) {
      if(await filter(event, ...filterArguments.args)){
        filteredEvents.push(event);
      }
    }
return filteredEvents;
  }

}