declare function d4pi_fromD4ItemScreenshot_toD4ItemTextImage(
    d4ItemScreenshotElement: HTMLImageElement,
    d4ItemScreenshotBrightnessThreshold,
    d4ItemScreenshot_afterBrightnessThreshold_elementId: string,
    d4ItemImageMinWidth: number,
    d4ItemImageMaxWidth: number,
    d4ItemItemImageBoundingRectangleDataId: string,
    d4ItemScreenshot_afterItemImageDetection_elementId: string,
    d4ItemItemImageElementId: string,
    d4ItemPictureWidth: number,
    d4ItemPictureHeight: number,
    d4ItemImageBorderOverwriteWidth: number,
    d4ItemTextImageElementId: string);
declare function d4pi_fromImage_toText(
    d4ItemTextImageElement: HTMLCanvasElement,
    d4ItemTextLanguageCode: string,
    d4ItemTextId: string);
declare var d4pi_is_opencv_runtimeInitialized: boolean;
declare var d4pi_itemImageBoundingRectangleData: any;
declare var d4pi_textData: any;
