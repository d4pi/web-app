export default class Filter {
    minValue = 0;
    regexp = Filter.dummyRegExp;
    score = 0;

    constructor(
        minValue: number,
        regexp: RegExp,
        score: number
    ) {
        this.minValue = minValue;
        this.regexp = regexp;
        this.score = score;
    }

    get key(): string { return `Filter (minValue: ${this.minValue}) (regexp: ${this.regexp}) (score: ${this.score})`; }

    private static dummyRegExp = new RegExp('');
}
