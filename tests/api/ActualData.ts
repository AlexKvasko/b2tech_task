import { LoadBetResponse } from '../../src/apiClients/betClient/BetResponseSchema';
export const loadResponseActual: LoadBetResponse = {
  result: {
    errorDescription: null,
    additionalInfo: null,
    eventData: null,
    closedOdds: null,
    errorCode: 0,
    resultCode: 0,
    errorCodeDescription: null
  },
  data: [
    {
      previousRequestGuid: null,
      productData: [
        {
          bets: [
            {
              eventId: 355809541,
              date: "2025-06-04T18:45:00Z",
              market: {
                id: 310310,
                name: "3 Way",
                line: null
              },
              awayTeam: {
                id: 310463975,
                name: " Portugal"
              },
              homeTeam: {
                id: 310463969,
                name: " Germany"
              },
              selection: "X",
              odd: 3.25,
              live: false,
              winStatusId: 0
            }
          ],
          stake: 0.0,
          initialStake: 0.0,
          totalStake: 0.0
        }
      ]
    }
  ],
  dataStructure: null,
  additionalData: null,
  userInfo: null,
  isSuccessfull: true
};