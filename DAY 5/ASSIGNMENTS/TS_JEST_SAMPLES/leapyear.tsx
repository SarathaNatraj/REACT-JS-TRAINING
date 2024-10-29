export class Year {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  /*public isLeap(): boolean {
    return false;
  }*/

  /*public isLeap(): boolean {
    return this.value === 2020;
  }*/

  /*public isLeap(): boolean {
    return this.value % 4 === 0;
  }*/

  public isLeap(): boolean {
    return (
      this.value % 400 === 0 || (this.value % 4 === 0 && this.value % 100 !== 0)
    );
  }
}