import TypeFilter from "./TypeFilter";

export default class NameFilter extends TypeFilter {
    private _nameRegExp: RegExp;

    constructor(
        namePattern: string,
        score: number,
        typePattern: string
    ) {
        super(score, typePattern);
        this._nameRegExp = new RegExp(namePattern, TypeFilter.default_RegExp_options);
    }

    get key(): string { return `NameFilter (nameRegExp: ${this._nameRegExp}) (super.key: ${super.key})`; }
    get nameRegExp(): RegExp { return this._nameRegExp; }
}
