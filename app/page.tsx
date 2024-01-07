'use client';

import D4Item from './D4Item';
import React from 'react';
import Script from 'next/script';

const d4pi_d4Items = [] as D4Item[];

export default function Home() {
  const processorArgument_class = 'bg-gray-700';

  const [d4ItemImageMaxWidth, setD4ItemImageMaxWidth] = React.useState(410);
  const [d4ItemImageMinWidth, setD4ItemImageMinWidth] = React.useState(340);
  const [d4ItemPictureHeight, setD4ItemPictureHeight] = React.useState(130);
  const [d4ItemPictureWidth, setD4ItemPictureWidth] = React.useState(130);
  const [d4Items, setD4Items] = React.useState([...d4pi_d4Items]);
  const [d4ItemScreenshotBrightnessThreshold, setD4ItemScreenshotBrightnessThreshold] = React.useState(25);
  const [isVerboseMode, setIsVerboseMode] = React.useState(true);
  const d4ItemImageMaxWidthComponent = <code className={processorArgument_class}>In-Game Item Image Maximum Width</code>;
  const d4ItemImageMaxWidthInputId = 'd4item-image-max-width-input';
  const d4ItemImageMinWidthComponent = <code className={processorArgument_class}>In-Game Item Image Minimum Width</code>;
  const d4ItemImageMinWidthInputId = 'd4item-image-min-width-input';
  const d4ItemPictureHeightComponent = <code className={processorArgument_class}>In-Game Item Picture Height</code>;
  const d4ItemPictureHeightInputId = 'd4item-picture-Height-input';
  const d4ItemPictureWidthComponent = <code className={processorArgument_class}>In-Game Item Picture Width</code>;
  const d4ItemPictureWidthInputId = 'd4item-picture-width-input';
  const d4ItemScreenshotBrightnessThresholdComponent = <code className={processorArgument_class}>Screenshot Brightness Threshold</code>;
  const d4ItemScreenshotBrightnessThresholdInputId = 'd4item-screenshot-brightness-threshold-input';
  const d4ItemScreenshotFileInputId = 'd4Item-screenshot-file-input';
  const isVerboseModeInputId = 'd4pi-is-verbose-mode-input';
  const numberInput_class = 'text-black mx-4';
  const numberInput_type = 'number';
  const script_strategy = 'beforeInteractive';
  const ul_class = 'list-disc ml-8';
  const zero_string = '0';

  function handleD4ItemScreenshotFileInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const d4ItemScreenshotFileList = event.target.files!;
    waitForD4piAppInitialization_then_processD4ItemScreenshotFileList();

    function waitForD4piAppInitialization_then_processD4ItemScreenshotFileList() {
      const defaultTimeout = 250; // Milliseconds

      if (isD4piAppInitialized()) {
        processD4ItemScreenshotFileList();
      } else {
        setTimeout(() => { waitForD4piAppInitialization_then_processD4ItemScreenshotFileList(); }, defaultTimeout);
      }

      function isD4piAppInitialized(): boolean { return globalThis.d4pi_is_opencv_runtimeInitialized; }

      function processD4ItemScreenshotFileList() {
        const d4ItemScreenshotFiles = Array.from(d4ItemScreenshotFileList);
        d4ItemScreenshotFiles.forEach(d4ItemScreenshotFile => {
          const newD4Item = new D4Item(
            d4ItemImageMaxWidth,
            d4ItemImageMinWidth,
            d4ItemPictureHeight,
            d4ItemPictureWidth,
            d4ItemScreenshotBrightnessThreshold,
            d4ItemScreenshotFile.lastModified,
            d4ItemScreenshotFile.name,
            d4ItemScreenshotFile.size
          );
          if (d4pi_d4Items.some(d4Item => d4Item.id === newD4Item.id)) {
            newD4Item.isSkipped_becauseAlreadyProcessed = true;
          }
          d4pi_d4Items.push(newD4Item);
          setD4Items([...d4pi_d4Items]);
          if (!newD4Item.isSkipped_becauseAlreadyProcessed) {
            const d4ItemScreenshotFileReader = new FileReader();
            d4ItemScreenshotFileReader.onload = () => {
              const d4ItemScreenshotDataUrl = d4ItemScreenshotFileReader.result as string;
              waitForD4ItemRendering_thenInitializeD4ItemScreenshot(newD4Item, d4ItemScreenshotDataUrl);
            }
            d4ItemScreenshotFileReader.readAsDataURL(d4ItemScreenshotFile);
          }
        });

        function waitForD4ItemRendering_thenInitializeD4ItemScreenshot(d4Item: D4Item, screenshotDataUrl: string) {
          if (isD4ItemRendered()) {
            initializeD4ItemScreenshot();
          } else {
            setTimeout(() => { waitForD4ItemRendering_thenInitializeD4ItemScreenshot(d4Item, screenshotDataUrl); }, defaultTimeout);
          }

          function isD4ItemRendered(): boolean {
            return (
              d4Item.itemImageElement !== null
              && d4Item.screenshot_afterBrightnessThreshold_element !== null
              && d4Item.screenshot_afterItemImageDetection_element !== null
              && d4Item.screenshotElement !== null
              && d4Item.textImageElement !== null
            );
          }

          function initializeD4ItemScreenshot() {
            d4Item.screenshotElement.src = screenshotDataUrl;
            waitForD4ItemScreenshotInitialization_thenProcessD4ItemScreenshot();

            function waitForD4ItemScreenshotInitialization_thenProcessD4ItemScreenshot() {
              if (isD4ItemScreenshotInitialized()) {
                processD4ItemScreenshot();
              } else {
                setTimeout(() => { waitForD4ItemScreenshotInitialization_thenProcessD4ItemScreenshot() }, defaultTimeout);
              }

              function isD4ItemScreenshotInitialized(): boolean { return d4Item.screenshotElement.width !== 0; }

              function processD4ItemScreenshot() {
                d4pi_fromD4ItemScreenshot_toD4ItemTextImage(
                  d4Item.screenshotElement,
                  d4Item.itemImageProcessorArgument_screenshotBrightnessThreshold,
                  d4Item.screenshot_afterBrightnessThreshold_elementId,
                  d4Item.itemImageProcessorArgument_imageMinWidth,
                  d4Item.itemImageProcessorArgument_imageMaxWidth,
                  d4Item.itemImageBoundingRectangleDataId,
                  d4Item.screenshot_afterItemImageDetection_elementId,
                  d4Item.itemImageElementId,
                  d4Item.itemImageProcessorArgument_pictureWidth,
                  d4Item.itemImageProcessorArgument_pictureHeight,
                  d4Item.textImageElementId
                );
                d4pi_fromImage_toText(d4Item.textImageElement, 'eng', d4Item.textDataId);
                waitForD4ItemTextInitialization_thenProcessD4ItemText(d4Item);

                function waitForD4ItemTextInitialization_thenProcessD4ItemText(d4Item: D4Item) {
                  if (isD4ItemTextInitialized()) {
                    ProcessD4ItemText();
                  } else {
                    setTimeout(() => { waitForD4ItemTextInitialization_thenProcessD4ItemText(d4Item); }, defaultTimeout);
                  }

                  function isD4ItemTextInitialized(): boolean { return globalThis.d4pi_textData[d4Item.textDataId] !== undefined; }

                  function ProcessD4ItemText() {
                    d4Item.isFilterable = true;
                    setD4Items([...d4pi_d4Items]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  function handleD4ItemImageMaxWidthChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemImageMaxWidth(Number(event.target.value)); }

  function handleD4ItemImageMinWidthChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemImageMinWidth(Number(event.target.value)); }

  function handleD4ItemPictureHeightChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemPictureHeight(Number(event.target.value)); }

  function handleD4ItemPictureWidthChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemPictureWidth(Number(event.target.value)); }

  function handleD4ItemScreenshotBrightnessChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemScreenshotBrightnessThreshold(Number(event.target.value)); }

  function handleIsVerboseModeInputChange(event: React.ChangeEvent<HTMLInputElement>): void { setIsVerboseMode(event.target.checked); }

  function hideIfNotVerboseMode(): string { return isVerboseMode ? '' : 'hidden'; }

  return <>
    <Script src='/code/is_opencv_runtimeInitialized.js' strategy={script_strategy} />
    <Script src='https://docs.opencv.org/4.9.0/opencv.js' strategy={script_strategy} />
    <Script src='/code/fromD4ItemScreenshot_toD4ItemTextImage.js' strategy={script_strategy} />
    <Script src='https://cdn.jsdelivr.net/npm/tesseract.js@5.0.4/dist/tesseract.min.js' strategy={script_strategy} />
    <Script src='/code/fromImage_toText.js' strategy={script_strategy} />

    <main>
      <div>
        Start here.
        <ul className={ul_class}>
          <li>
            <label htmlFor={d4ItemScreenshotFileInputId}>Choose Screenshot(s) to be Processed</label>
            <input id={d4ItemScreenshotFileInputId} className='mx-4' accept='image/*' multiple onChange={handleD4ItemScreenshotFileInputChange} type='file' />
          </li>
          <li>
            <label htmlFor={isVerboseModeInputId}>Verbose Mode</label>
            <input id={isVerboseModeInputId} className='mx-4' checked={isVerboseMode} onChange={handleIsVerboseModeInputChange} type='checkbox' />
          </li>
        </ul>
      </div>

      <div className={`divide-y-2 divide-gray-800 ${hideIfNotVerboseMode()}`}>
        <div>
          Adjust these values as necessary to improve in-game item image & text processor&apos;s correctness.
          <ul className={ul_class}>
            <li>
              <label htmlFor={d4ItemScreenshotBrightnessThresholdInputId}>{d4ItemScreenshotBrightnessThresholdComponent}</label>
              <input id={d4ItemScreenshotBrightnessThresholdInputId} className={numberInput_class} max='255' min={zero_string} onChange={handleD4ItemScreenshotBrightnessChange} type={numberInput_type} value={d4ItemScreenshotBrightnessThreshold} />
              Screenshot pixels darker/brighter than this value are treated as black/white, respectively.
            </li>

            <li>
              <label htmlFor={d4ItemImageMinWidthInputId}>{d4ItemImageMinWidthComponent}</label>
              <input id={d4ItemImageMinWidthInputId} className={numberInput_class} min={zero_string} onChange={handleD4ItemImageMinWidthChange} type={numberInput_type} value={d4ItemImageMinWidth} />
              In-game item image candidates with widths narrower than this value are discarded.
            </li>

            <li>
              <label htmlFor={d4ItemImageMaxWidthInputId}>{d4ItemImageMaxWidthComponent}</label>
              <input id={d4ItemImageMaxWidthInputId} className={numberInput_class} min={zero_string} onChange={handleD4ItemImageMaxWidthChange} type={numberInput_type} value={d4ItemImageMaxWidth} />
              In-game item image candidates with widths wider than this value are discarded.
            </li>

            <li>
              <label htmlFor={d4ItemPictureWidthInputId}>{d4ItemPictureWidthComponent}</label>
              <input id={d4ItemPictureWidthInputId} className={numberInput_class} min={zero_string} onChange={handleD4ItemPictureWidthChange} type={numberInput_type} value={d4ItemPictureWidth} />
              In-game items&apos; pictures (whose width is defined by this value) are removed from their images&apos; top-right corners.
            </li>

            <li>
              <label htmlFor={d4ItemPictureHeightInputId}>{d4ItemPictureHeightComponent}</label>
              <input id={d4ItemPictureHeightInputId} className={numberInput_class} min={zero_string} onChange={handleD4ItemPictureHeightChange} type={numberInput_type} value={d4ItemPictureHeight} />
              In-game items&apos; pictures (whose height is defined by this value) are removed from their images&apos; top-right corners.
            </li>
          </ul>
        </div>

        <div>
          <ul className={ul_class}>
            <li>
              A good {d4ItemScreenshotBrightnessThresholdComponent} value makes the in-game item image&apos;s bounding rectangle(s) stand out (as if drawn with thick black lines of uniform thickness).
            </li>
            <li>
              A good pair of {d4ItemImageMinWidthComponent} and {d4ItemImageMaxWidthComponent} values retains the only correct in-game item image&apos;s bounding rectangle (drawn with thick green lines).
            </li>
            <li>
              A good pair of {d4ItemPictureWidthComponent} and {d4ItemPictureHeightComponent} values removes the in-game item&apos;s picture without degrading its image&apos;s informational value.
            </li>
          </ul>
        </div>

        <div>
          The default values seem to work well enough in our test environment with certain in-game settings:
          <ul className={ul_class}>
            <li>
              Xbox Series X
            </li>

            <li>
              1080p (1920*1080)
            </li>

            <li>
              (In-Game) GRAPHICS: Font Scale: Small
            </li>

            <li>
              (In-Game) GRAPHICS: Brightness: Default
            </li>

            <li>
              (In-Game) GAMEPLAY: Advanced Tooltip Information: Enabled
            </li>
          </ul>
        </div>

        <div>
          <ul className={ul_class}>
            {
              d4Items.map(d4Item =>
                <li key={d4Item.id}>
                  Screenshot File Name:
                  <code className='mx-4'>{d4Item.screenshotFileName}</code>
                  <ul className={ul_class}>
                    <li>
                      Screenshot File Last-Modified:
                      <code>{d4Item.screenshotFileLastModified}</code>
                    </li>

                    <li>
                      Screenshot File Size:
                      <code>{d4Item.screenshotFileSize}</code>
                    </li>

                    <li>
                      Screenshot:
                      {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img id={d4Item.screenshotElementId} className='max-w-none' alt={d4Item.id} />
                      }
                    </li>

                    <li>
                      Screenshot after Brightness Threshold:
                      ({d4ItemScreenshotBrightnessThresholdComponent}: {d4Item.itemImageProcessorArgument_screenshotBrightnessThreshold})
                      <canvas id={d4Item.screenshot_afterBrightnessThreshold_elementId} />
                    </li>

                    <li>
                      Screenshot after after Game Item Image Detection:
                      ({d4ItemImageMinWidthComponent}: {d4Item.itemImageProcessorArgument_imageMinWidth})
                      <span>(Detected Game Item Image Width: {d4Item.itemImageBoundingRectangleWidth})</span>
                      ({d4ItemImageMaxWidthComponent}: {d4Item.itemImageProcessorArgument_imageMaxWidth})
                      <canvas id={d4Item.screenshot_afterItemImageDetection_elementId} />
                    </li>

                    <li>
                      Game Item Image:
                      <canvas id={d4Item.itemImageElementId} />
                    </li>

                    <li>
                      Game Text Image:
                      ({d4ItemPictureWidthComponent}: {d4Item.itemImageProcessorArgument_pictureWidth})
                      ({d4ItemPictureHeightComponent}: {d4Item.itemImageProcessorArgument_pictureHeight})
                      <canvas id={d4Item.textImageElementId} />
                    </li>

                    <li>
                      Game Item Text:
                      (confidence: {d4Item.textConfidence})
                      <pre>{d4Item.text}</pre>
                    </li>
                  </ul>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </main >
  </>;
}
