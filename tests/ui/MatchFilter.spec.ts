import { test } from '../../src/fixtures/StartupFixture';
import EventRow from '../../src/pageObjects/sports/EventRow';
import {ODDS_BETWEEN_VALUES } from '../../src/pageObjects/sports/EventFilters';
import { expect } from '@playwright/test';
import { TabNames } from '../../src/pageObjects/sports/TabNames';


// Task #2 (UI automation test)
// 1. Navigate to: https://s.gsb.co.zm/
// 2. Choose "Upcoming" tab
// 3. Find all match names, which have odds value between [3.12 - 3.36]
// 4. Print filtered match names (console output + report) and their actual odd values
// 5. Add validation in case there are no match names with the given criteria

test('[Case 1]: Filter matches with odds value between [3.12 - 3.36]', async ({sportsPage}) => {
  await sportsPage.centerContent.eventsContainer.shouldBeVisible();
  await sportsPage.centerContent.openUpcomingTab(TabNames.UPCOMING);
  const events: EventRow[] = await sportsPage.centerContent.eventsContainer.getAllEventRows();
  const filteredEvents: EventRow[]  = await sportsPage.centerContent.eventsContainer.filterEvents(events, ODDS_BETWEEN_VALUES, {args:[3.12, 3.36]})
  expect(filteredEvents.length, "Events with for corresponding filter criteria not found").toBeGreaterThan(0);
  for (const event of filteredEvents) {
    console.log(await event.formatedMatchName());
    console.log(await event.oddsLocator.allTextContents());
  }
});
