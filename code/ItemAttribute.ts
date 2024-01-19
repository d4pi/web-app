export default class ItemAttribute {
    isItemTypeBuiltIn = false;
    rawWordsIndex = -1;
    text = '';
    value = 0;

    constructor(
        isItemTypeBuiltIn: boolean,
        rawWordsIndex: number,
        text: string,
        value: number
    ) {
        this.isItemTypeBuiltIn = isItemTypeBuiltIn;
        this.rawWordsIndex = rawWordsIndex;
        this.text = text;
        this.value = value;

        this.key = `${this.text} ${Date.now()}`;
    }

    key = '';
}
