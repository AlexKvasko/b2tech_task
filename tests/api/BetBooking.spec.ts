import { expect, test } from '@playwright/test';
import BetClient from '../../src/apiClients/betClient/BetClient';
import { loadResponseActual } from './ActualData';
import { LoadBetResponse, LoadBetResponseSchema } from '../../src/apiClients/betClient/BetResponseSchema';

//Task #3 (API automation test)
// 1. Implement any POST API call from the given website: https://s.gsb.co.zm/ (auth is not needed)
// 2. Use devTools -> Network to get data for it
// 3. Validate JSON schema for this API call
// 4. Use serialization/ deserialization for request/ response

test("[Case 1]: Verify user able to load previously booked bet", async ({request}) => {
  const response =  await new BetClient(request, {brandId:"30", channelId:"0"}).loadBet({bookingCode:"B00008"});
  expect(response.ok()).toBeTruthy();
  const responseData = await response.json();
  const parsed = LoadBetResponseSchema.safeParse(responseData);
  expect(parsed.success).toBeTruthy();
  const deserializedResponse: LoadBetResponse = parsed.data as LoadBetResponse;
  expect(deserializedResponse).toEqual(loadResponseActual)
})
