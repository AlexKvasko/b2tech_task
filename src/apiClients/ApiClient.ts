import { APIRequestContext } from '@playwright/test';

export default class ApiClient {
  constructor(public request: APIRequestContext) {
  }

  async post(url: string , options?: Parameters<APIRequestContext["post"]>[1]) {
    return this.request.post(url, options)
  }
}