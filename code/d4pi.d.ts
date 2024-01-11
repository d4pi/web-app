declare function d4pi_fromImage_toText(
    text_dataId: string,
    textImage_canvas: HTMLCanvasElement
);
declare function d4pi_fromInputImage_toTextImage(
    inputImage_afterBrightnessThreshold_canvasId: string,
    inputImage_afterItemImageDetection_canvasId: string,
    inputImage_image: HTMLImageElement,
    itemImage_canvasId: string,
    itemImage_dataId: string,
    textImage_canvasId: string,
    screenshot_processor_InputImageBrightnessThreshold: number,
    screenshot_processor_ItemImageMaxWidth: number,
    screenshot_processor_ItemImageMinWidth: number,
    screenshot_processor_ItemPictureHeight: number,
    screenshot_processor_ItemPictureWidth: number,
    screenshot_processor_TextImageBorderTrimSize: number,
    screenshot_processor_TextImageCornerTrimSize: number
);
declare var d4pi_isCodeLoaded: boolean;
declare var d4pi_isOpencvRuntimeInitialized: boolean;
declare var d4pi_itemImageData: any;
declare var d4pi_textData: any;
