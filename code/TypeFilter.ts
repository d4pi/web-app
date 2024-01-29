export default class TypeFilter {
    private _score: number;
    private _typeRegExp: RegExp;

    protected static readonly default_RegExp_options: string = 'i';

    isEnabled: boolean;

    constructor(
        score: number,
        typePattern: string
    ) {
        this._score = score;
        this._typeRegExp = new RegExp(typePattern, TypeFilter.default_RegExp_options);
        this.isEnabled = true;
    }

    get key(): string { return `TypeFilter (score: ${this._score}) (typeRegExp: ${this._typeRegExp})`; }
    get score(): number { return this._score; }
    get typeRegExp(): RegExp { return this._typeRegExp; }
}
