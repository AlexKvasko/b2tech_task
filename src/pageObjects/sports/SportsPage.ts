import PageObject from '../PageObject.ts';
import { Locator } from '@playwright/test';
import SportsCenterContent from './SportsCenterContent.ts';

export default class SportsPage extends PageObject {
  mainLocator: Locator = this.locator('.au-l-main');
  centerContent: SportsCenterContent = new SportsCenterContent(this.page, this.child(".c2-center"));
}
