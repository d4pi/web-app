import TypeFilter from "./TypeFilter";

export default class AttributeFilter extends TypeFilter {
    private _attributeRegExp: RegExp;
    private _minValue: number;

    constructor(
        attributePattern: string,
        minValue: number,
        score: number,
        typePattern: string
    ) {
        super(score, typePattern);
        this._attributeRegExp = new RegExp(attributePattern, TypeFilter.default_RegExp_options);
        this._minValue = minValue;
    }

    get attributeRegExp(): RegExp { return this._attributeRegExp; }
    get key(): string { return `AttributeFilter (attributeRegExp: ${this._attributeRegExp}) (minValue: ${this._minValue}) (super.key: ${super.key})`; }
    get minValue(): number { return this._minValue; }
}
