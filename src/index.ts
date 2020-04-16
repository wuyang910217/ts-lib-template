export * from './constants';

export class MyLib {
  constructor(private name: string) {}

  getName(): string {
    return 'Hi, ' + this.name;
  }
}
