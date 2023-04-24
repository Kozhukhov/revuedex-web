import { immerable } from 'immer';

export class ApplicationModel {
  [immerable] = true;

  company: string;

  constructor() {
    this.company = '';
  }

  setCompany(company: string): void {
    this.company = company;
  }
}
