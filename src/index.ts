export * from './constants';

export class MyLib {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
}
