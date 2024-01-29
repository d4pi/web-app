export default class Attribute {
    private _text: string;
    private _uniqueId: string;
    private _value: number;

    constructor(
        text: string,
        value: number
    ) {
        this._text = text;
        this._uniqueId = `${Date.now()} ${Math.random()}`;
        this._value = value;
    }

    get key(): string { return `Attribute (text: ${this._text}) (uniqueId: ${this._uniqueId}) (value: ${this._value})`; }
    get text(): string { return this._text; }
    get value(): number { return this._value; }
}
