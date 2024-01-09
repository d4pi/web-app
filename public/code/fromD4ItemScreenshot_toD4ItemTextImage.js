'use strict';

const d4pi_d4ItemImage_approximatePolygonColor = new cv.Scalar(96, 0, 96);
const d4pi_d4ItemImage_boundingRectangleCandidateColor = new cv.Scalar(0, 160, 0);
const d4pi_d4ItemImage_boundingRectangleColor = new cv.Scalar(0, 192, 0);
const d4pi_d4ItemImage_convexHullColor = new cv.Scalar(0, 128, 128);
const d4pi_d4ItemImage_edgeColor = new cv.Scalar(64, 64, 64);
const d4pi_d4ItemImage_polygonColor = new cv.Scalar(96, 0, 0);
const d4pi_d4ItemImage_rectangleColor = new cv.Scalar(128, 128, 0);
const d4pi_d4ItemPicture_overwriteColor = new cv.Scalar(0, 0, 0);
const d4pi_d4ItemScreenshot_blurAnchor = new cv.Point(-1, -1);
const d4pi_d4ItemScreenshot_blurKernelSize = new cv.Size(3, 3);

globalThis.d4pi_itemImageBoundingRectangleData = {};

function d4pi_fromD4ItemScreenshot_toD4ItemTextImage(
    d4ItemScreenshotElement,
    d4ItemScreenshotBrightnessThreshold,
    d4ItemScreenshot_afterBrightnessThreshold_elementId,
    d4ItemImageMinWidth,
    d4ItemImageMaxWidth,
    d4ItemItemImageBoundingRectangleDataId,
    d4ItemScreenshot_afterItemImageDetection_elementId,
    d4ItemItemImageElementId,
    d4ItemPictureWidth,
    d4ItemPictureHeight,
    d4ItemImageBorderOverwriteWidth,
    d4ItemTextImageElementId
) {
    const originalInputImage = cv.imread(d4ItemScreenshotElement);

    const inputImage = originalInputImage.clone();
    cv.cvtColor(inputImage, inputImage, cv.COLOR_RGBA2GRAY, 0);
    cv.blur(inputImage, inputImage, d4pi_d4ItemScreenshot_blurKernelSize, d4pi_d4ItemScreenshot_blurAnchor, cv.BORDER_DEFAULT);
    cv.threshold(inputImage, inputImage, d4ItemScreenshotBrightnessThreshold, 255, cv.THRESH_BINARY);
    cv.imshow(d4ItemScreenshot_afterBrightnessThreshold_elementId, inputImage);

    cv.Canny(inputImage, inputImage, 50, 100, 3, true);
    const contours = new cv.MatVector();
    const hierarchy = new cv.Mat();
    cv.findContours(inputImage, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);
    const gameItemImageDetectionReport = cv.Mat.zeros(inputImage.rows, inputImage.cols, cv.CV_8UC3);
    const gameItemImageMinArea = d4ItemImageMinWidth * d4ItemImageMinWidth;
    const gameItemImageMinPerimeter = d4ItemImageMinWidth * 4;
    let drawContourColor = d4pi_d4ItemImage_edgeColor;
    const approximatePolygons = new cv.MatVector();
    const convexHulls = new cv.MatVector();
    let gameItemImageRectangle = null;
    const approximatePolygonEpsilon = (d4ItemImageMinWidth + d4ItemImageMaxWidth) / 2 * 4 * .03;
    for (let i = 0; i < contours.size(); ++i) {
        drawContourColor = d4pi_d4ItemImage_edgeColor;
        const contour = contours.get(i);
        const approximatePolygon = new cv.Mat();
        cv.approxPolyDP(contour, approximatePolygon, approximatePolygonEpsilon, true);
        if (approximatePolygon.rows >= 4) {
            drawContourColor = d4pi_d4ItemImage_polygonColor;
            approximatePolygons.push_back(approximatePolygon);
            const boundingRectangle = cv.boundingRect(approximatePolygon);
            const boundingRectangleArea = Math.max(boundingRectangle.width * boundingRectangle.height, 1);
            const convexHull = new cv.Mat();
            cv.convexHull(approximatePolygon, convexHull, false, true);
            const convexHullArea = cv.contourArea(convexHull, false);
            const areaRatio = convexHullArea / boundingRectangleArea;
            if (areaRatio > .9) {
                drawContourColor = d4pi_d4ItemImage_rectangleColor;
                convexHulls.push_back(convexHull);
                const polygonArcLength = cv.arcLength(approximatePolygon, true);
                if (boundingRectangle.width <= boundingRectangle.height
                    && d4ItemImageMinWidth <= boundingRectangle.width
                    && boundingRectangle.width <= d4ItemImageMaxWidth
                    && gameItemImageMinArea <= boundingRectangleArea
                    && gameItemImageMinPerimeter <= polygonArcLength
                ) {
                    drawContourColor = d4pi_d4ItemImage_boundingRectangleCandidateColor;
                    if (gameItemImageRectangle === null) {
                        gameItemImageRectangle = boundingRectangle;
                    } else if (gameItemImageRectangle.width * gameItemImageRectangle.height < boundingRectangleArea) {
                        gameItemImageRectangle = boundingRectangle;
                    }
                }
            }
            convexHull.delete();
        }
        approximatePolygon.delete();
        cv.drawContours(gameItemImageDetectionReport, contours, i, drawContourColor);
    }
    for (let i = 0; i < approximatePolygons.size(); ++i) {
        cv.drawContours(gameItemImageDetectionReport, approximatePolygons, i, d4pi_d4ItemImage_approximatePolygonColor);
    }
    for (let i = 0; i < convexHulls.size(); ++i) {
        cv.drawContours(gameItemImageDetectionReport, convexHulls, i, d4pi_d4ItemImage_convexHullColor);
    }
    let gameItemImage = null;
    if (gameItemImageRectangle === null) {
        globalThis.d4pi_itemImageBoundingRectangleData[d4ItemItemImageBoundingRectangleDataId] = newItemImageBoundingRectangleData(-1, -1, -1, -1);
        gameItemImage = originalInputImage.clone();
    } else {
        globalThis.d4pi_itemImageBoundingRectangleData[d4ItemItemImageBoundingRectangleDataId] = newItemImageBoundingRectangleData(
            gameItemImageRectangle.x,
            gameItemImageRectangle.y,
            gameItemImageRectangle.width,
            gameItemImageRectangle.height
        );
        cv.rectangle(
            gameItemImageDetectionReport,
            new cv.Point(gameItemImageRectangle.x, gameItemImageRectangle.y),
            new cv.Point(gameItemImageRectangle.x + gameItemImageRectangle.width, gameItemImageRectangle.y + gameItemImageRectangle.height),
            d4pi_d4ItemImage_boundingRectangleColor,
            3,
            cv.LINE_AA
        );
        gameItemImage = originalInputImage.roi(gameItemImageRectangle);
    }
    cv.imshow(d4ItemScreenshot_afterItemImageDetection_elementId, gameItemImageDetectionReport);
    cv.imshow(d4ItemItemImageElementId, gameItemImage);

    cv.cvtColor(gameItemImage, gameItemImage, cv.COLOR_RGBA2GRAY, 0);
    cv.rectangle(
        gameItemImage,
        new cv.Point(gameItemImage.size().width - d4ItemPictureWidth, 0),
        new cv.Point(gameItemImage.size().width, d4ItemPictureHeight),
        d4pi_d4ItemPicture_overwriteColor,
        -1
    );
    cv.rectangle(
        gameItemImage,
        new cv.Point(0, 0),
        new cv.Point(gameItemImage.size().width, gameItemImage.size().height),
        d4pi_d4ItemPicture_overwriteColor,
        d4ItemImageBorderOverwriteWidth,
        cv.LINE_AA
    );
    cv.imshow(d4ItemTextImageElementId, gameItemImage);

    originalInputImage.delete();
    inputImage.delete();
    contours.delete();
    hierarchy.delete();
    gameItemImageDetectionReport.delete();
    approximatePolygons.delete();
    convexHulls.delete();
    gameItemImage.delete();

    function newItemImageBoundingRectangleData(x, y, width, height) {
        return {
            x: x,
            y: y,
            width: width,
            height: height
        };
    }
}
