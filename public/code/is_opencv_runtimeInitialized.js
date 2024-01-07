// This must be loaded before opencv.js -- see
// https://docs.opencv.org/4.9.0/d0/d84/tutorial_js_usage.html.

'use strict';

globalThis.d4pi_is_opencv_runtimeInitialized = false;

var Module = {
    onRuntimeInitialized() {
        globalThis.d4pi_is_opencv_runtimeInitialized = true;
    }
};
