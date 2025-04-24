import ApiClient from '../ApiClient.ts';
import { APIRequestContext } from '@playwright/test';
import { LoadBetRequest } from './BetRequest.ts';

export default class BetClient extends ApiClient {
  betEndpodint = '/services/clapi/api/Bet/';

  constructor(request: APIRequestContext, public headers: { brandId: string, channelId: string }) {
    super(request);
    this.request = request;
  }

  async loadBet(requestBody: LoadBetRequest) {
    return await this.post(this.betEndpodint + 'GetBetSlipDataCL', { data: requestBody, headers: this.headers });
  }
}