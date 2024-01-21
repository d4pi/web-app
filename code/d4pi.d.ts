declare function _fromImage_toText(
    text_data_id: string,
    textImage_canvas: HTMLCanvasElement
);
declare function _fromInputImage_toTextImage(
    inputImage_afterBrightnessThreshold_canvas_id: string,
    inputImage_afterItemImageDetection_canvas_id: string,
    inputImage_image: HTMLImageElement,
    itemImage_canvas_id: string,
    itemImage_data_id: string,
    textImage_canvas_id: string,
    screenshot_processor_InputImageBrightnessThreshold: number,
    screenshot_processor_ItemImageMaxWidth: number,
    screenshot_processor_ItemImageMinWidth: number,
    screenshot_processor_ItemPictureHeight: number,
    screenshot_processor_ItemPictureWidth: number,
    screenshot_processor_TextImageBorderTrimSize: number,
    screenshot_processor_TextImageCornerTrimSize: number
);
declare var _isCodeLoaded: boolean;
declare var _isOpencvRuntimeInitialized: boolean;
declare var _itemImageData;
declare var _textData;
