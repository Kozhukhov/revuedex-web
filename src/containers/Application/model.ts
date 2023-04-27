import { immerable } from 'immer';

export class ApplicationModel {
  [immerable] = true;

  company: string;

  constructor() {
    this.company = 'PandaDoc';
  }

  setCompany(company: string): void {
    this.company = company;
  }
}
