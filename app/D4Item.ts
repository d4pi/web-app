export default class D4Item {
    itemImageProcessorArgument_imageMaxWidth = 0;
    itemImageProcessorArgument_imageMinWidth = 0;
    itemImageProcessorArgument_pictureHeight = 0;
    itemImageProcessorArgument_pictureWidth = 0;
    itemImageProcessorArgument_screenshotBrightnessThreshold = 0;
    isProcessingCompleted = false;
    isSkipped_becauseDuplicateIds = false;
    screenshotFileLastModified = 0;
    screenshotFileName = '';
    screenshotFileSize = 0;

    constructor(
        itemImageProcessorArgument_imageMaxWidth: number,
        itemImageProcessorArgument_imageMinWidth: number,
        itemImageProcessorArgument_pictureHeight: number,
        itemImageProcessorArgument_pictureWidth: number,
        itemImageProcessorArgument_screenshotBrightnessThreshold: number,
        screenshotFileLastModified: number,
        screenshotFileName: string,
        screenshotFileSize: number
    ) {
        this.itemImageProcessorArgument_imageMaxWidth = itemImageProcessorArgument_imageMaxWidth;
        this.itemImageProcessorArgument_imageMinWidth = itemImageProcessorArgument_imageMinWidth;
        this.itemImageProcessorArgument_pictureHeight = itemImageProcessorArgument_pictureHeight;
        this.itemImageProcessorArgument_pictureWidth = itemImageProcessorArgument_pictureWidth;
        this.itemImageProcessorArgument_screenshotBrightnessThreshold = itemImageProcessorArgument_screenshotBrightnessThreshold;
        this.screenshotFileLastModified = screenshotFileLastModified;
        this.screenshotFileName = screenshotFileName;
        this.screenshotFileSize = screenshotFileSize;
    }

    get id(): string { return `D4Item ${this.screenshotFileName} (size ${this.screenshotFileSize} lastModified ${this.screenshotFileLastModified}))`; }
    get itemImageBoundingRectangleDataId(): string { return `item-image-bounding-rectangle-data ${this.id}`; }
    get itemImageBoundingRectangleWidth(): number { return globalThis.d4pi_itemImageBoundingRectangleData[this.itemImageBoundingRectangleDataId]?.width; }
    get itemImageElement(): HTMLCanvasElement { return document.getElementById(this.itemImageElementId) as HTMLCanvasElement; }
    get itemImageElementId(): string { return `item-image ${this.id}`; }
    get screenshot_afterBrightnessThreshold_element(): HTMLCanvasElement { return document.getElementById(this.screenshot_afterBrightnessThreshold_elementId) as HTMLCanvasElement; }
    get screenshot_afterBrightnessThreshold_elementId(): string { return `screenshot-after-brightness-threshold ${this.id}`; }
    get screenshot_afterItemImageDetection_element(): HTMLCanvasElement { return document.getElementById(this.screenshot_afterItemImageDetection_elementId) as HTMLCanvasElement; }
    get screenshot_afterItemImageDetection_elementId(): string { return `screenshot-after-item-image-detection ${this.id}`; }
    get screenshotElement(): HTMLImageElement { return document.getElementById(this.screenshotElementId) as HTMLImageElement; }
    get screenshotElementId(): string { return `screenshot ${this.id}`; }
    get text(): string { return globalThis.d4pi_textData[this.textDataId]?.text; }
    get textConfidence(): number { return globalThis.d4pi_textData[this.textDataId]?.confidence; }
    get textDataId(): string { return `text-data ${this.id}`; }
    get textImageElement(): HTMLCanvasElement { return document.getElementById(this.textImageElementId) as HTMLCanvasElement; }
    get textImageElementId(): string { return `text-Image ${this.id}`; }
}
