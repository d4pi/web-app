export default class Screenshot {
    dataLastModifiedTimestamp = 0;
    dataName = '';
    dataSize = 0;
    screenshot_processor_InputImageBrightnessThreshold = 0;
    screenshot_processor_ItemImageMaxWidth = 0;
    screenshot_processor_ItemImageMinWidth = 0;
    screenshot_processor_ItemPictureHeight = 0;
    screenshot_processor_ItemPictureWidth = 0;
    screenshot_processor_TextImageBorderTrimSize = 0;
    screenshot_processor_TextImageCornerTrimSize = 0;

    constructor(
        dataLastModifiedTimestamp: number,
        dataName: string,
        dataSize: number,
        screenshot_processor_InputImageBrightnessThreshold: number,
        screenshot_processor_ItemImageMaxWidth: number,
        screenshot_processor_ItemImageMinWidth: number,
        screenshot_processor_ItemPictureHeight: number,
        screenshot_processor_ItemPictureWidth: number,
        screenshot_processor_TextImageBorderTrimSize: number,
        screenshot_processor_TextImageCornerTrimSize: number
    ) {
        this.dataLastModifiedTimestamp = dataLastModifiedTimestamp;
        this.dataName = dataName;
        this.dataSize = dataSize;
        this.screenshot_processor_InputImageBrightnessThreshold = screenshot_processor_InputImageBrightnessThreshold;
        this.screenshot_processor_ItemImageMaxWidth = screenshot_processor_ItemImageMaxWidth;
        this.screenshot_processor_ItemImageMinWidth = screenshot_processor_ItemImageMinWidth;
        this.screenshot_processor_ItemPictureHeight = screenshot_processor_ItemPictureHeight;
        this.screenshot_processor_ItemPictureWidth = screenshot_processor_ItemPictureWidth;
        this.screenshot_processor_TextImageBorderTrimSize = screenshot_processor_TextImageBorderTrimSize;
        this.screenshot_processor_TextImageCornerTrimSize = screenshot_processor_TextImageCornerTrimSize;

        this.startTime = Date.now();
    }

    get id() { return `Screenshot (fileName: ${this.dataName}) (fileLastModifiedTimestamp: ${this.dataLastModifiedTimestamp}) (fileSize: ${this.dataSize}) (screenshot_processor_BorderTrimSize: ${this.screenshot_processor_TextImageBorderTrimSize}) (screenshot_processor_BrightnessThreshold: ${this.screenshot_processor_InputImageBrightnessThreshold}) (screenshot_processor_MaxWidth: ${this.screenshot_processor_ItemImageMaxWidth}) (screenshot_processor_MinWidth: ${this.screenshot_processor_ItemImageMinWidth}) (screenshot_processor_PictureHeight: ${this.screenshot_processor_ItemPictureHeight}) (screenshot_processor_PictureWidth: ${this.screenshot_processor_ItemPictureWidth})`; }

    get inputImage_afterBrightnessThreshold_canvas() { return document.getElementById(this.inputImage_afterBrightnessThreshold_canvasId) as HTMLCanvasElement; }
    get inputImage_afterBrightnessThreshold_canvasId() { return `${this.id} inputImage_afterBrightnessThreshold_canvas`; }
    get inputImage_afterItemImageDetection_canvas() { return document.getElementById(this.inputImage_afterItemImageDetection_canvasId) as HTMLCanvasElement; }
    get inputImage_afterItemImageDetection_canvasId() { return `${this.id} inputImage_afterItemImageDetection_canvas`; }
    get inputImage_image() { return document.getElementById(this.inputImage_imageId) as HTMLImageElement; }
    get inputImage_imageId() { return `${this.id} inputImage_image`; };
    get itemImage_canvas() { return document.getElementById(this.itemImage_canvasId) as HTMLCanvasElement; }
    get itemImage_canvasId() { return `${this.id} itemImage_canvas`; }
    get itemImage_data_candidates(): IRectangle[] { return this.itemImage_data_exists ? this.itemImage_data.candidates : []; }
    get itemImage_data_exists() { return this.itemImage_data !== undefined; }
    get itemImage_data_winner(): IRectangle { return this.itemImage_data.winner; }
    get itemImage_data() { return d4pi_itemImageData[this.itemImage_dataId]; }
    get itemImage_dataId() { return `${this.id} itemImage_data`; }
    get text_data_confidence(): number { return this.text_data_exists ? this.text_data.confidence : -1; }
    get text_data_exists() { return this.text_data !== undefined; }
    get text_data_text(): string { return this.text_data_exists ? this.text_data.text : ''; }
    get text_data() { return d4pi_textData[this.text_dataId]; }
    get text_dataId() { return `${this.id} text_data`; }
    get textImage_canvas() { return document.getElementById(this.textImage_canvasId) as HTMLCanvasElement; }
    get textImage_canvasId() { return `${this.id} textImage_canvas`; }

    startTime = -1;
    endTime = -1;
    get elapsedTime() { return this.endTime - this.startTime; }

    itemName = 'Unknown';
    itemType = 'Unknown';
    isDone = false;

    processText() {
        this.itemName = 'dummy name ' + Date.now();
        this.itemType = 'dummy type ' + Date.now();
        this.isDone = true;
        this.endTime = Date.now();
    }
}
