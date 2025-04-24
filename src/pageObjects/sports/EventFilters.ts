import EventRow from './EventRow.ts';
import { Locator } from '@playwright/test';

export const ODDS_BETWEEN_VALUES: FilterFunction<number> = async (
  event: EventRow,
  lowestValue: number,
  highestValue: number
) => {
  const odds: Locator[] = await event.oddsLocator.all();
  for (let odd of odds) {
    const oddNum: number = Number(await odd.textContent());
    if(oddNum > lowestValue && oddNum < highestValue){
      return true;
    }
  }
  return false;
};


export type FilterFunction<T> = (
  event: EventRow,
  ...params: T[]
) => Promise<boolean>;
