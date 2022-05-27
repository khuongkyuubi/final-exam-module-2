export class Product {
  private _code : number;
  private _name: string;
  private _type : string;
  private _price : number;
  private _quantity : number;
  private _detail : string;
    private _createAt : Date;

  constructor(...input) {
      this._code = input[0];
      this._name = input[1];
      this._type = input[2];
      this._price = input[3];
      this._quantity = input[4];
      this._detail = input[5];
      this._createAt = input[6];
  }


    get code(): number {
        return this._code;
    }

    set code(value: number) {
        this._code = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get detail(): string {
        return this._detail;
    }

    set detail(value: string) {
        this._detail = value;
    }


    get createAt(): Date {
        return this._createAt;
    }

    set createAt(value: Date) {
        this._createAt = value;
    }
}