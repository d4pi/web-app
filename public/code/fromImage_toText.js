'use strict';

globalThis.d4pi_textData = {};

function d4pi_fromImage_toText(d4ItemTextImageElement, d4ItemTextLanguageCode, d4ItemTextId) {
    Tesseract.recognize(
        d4ItemTextImageElement,
        d4ItemTextLanguageCode,
        {} // Tesseract options
    ).catch(() => {
        globalThis.d4pi_textData[d4ItemTextId] = newGameItemData(0, '');
    }).then(result => {
        globalThis.d4pi_textData[d4ItemTextId] = newGameItemData(result.data.confidence, result.data.text);
    });

    function newGameItemData(confidence, text) { return { confidence: confidence, text: text }; }
}
