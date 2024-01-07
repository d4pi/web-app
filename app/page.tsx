'use client';

import { useSearchParams } from 'next/navigation';
import D4Item from './D4Item';
import React from 'react';
import Script from 'next/script';

const d4pi_d4Items = [] as D4Item[];
let d4pi_isSkipped_becauseDuplicateIds_count = 0;

export default function Home() {
  const d4ItemImageBorderOverwriteWidth_defaultValue = 32;
  const d4ItemImageMaxWidth_defaultValue = 410;
  const d4ItemImageMinWidth_defaultValue = 340;
  const d4ItemPictureHeight_defaultValue = 128;
  const d4ItemPictureWidth_defaultValue = 128;
  const d4ItemScreenshotBrightnessThreshold_defaultValue = 25;
  const isVerboseMode_defaultValue = true;
  const processorArgumentClassName = 'bg-gray-700 p-1 rounded';

  const [d4ItemImageBorderOverwriteWidth, setD4ItemImageBorderOverwriteWidth] = React.useState(d4ItemImageBorderOverwriteWidth_defaultValue);
  const [d4ItemImageMaxWidth, setD4ItemImageMaxWidth] = React.useState(d4ItemImageMaxWidth_defaultValue);
  const [d4ItemImageMinWidth, setD4ItemImageMinWidth] = React.useState(d4ItemImageMinWidth_defaultValue);
  const [d4ItemPictureHeight, setD4ItemPictureHeight] = React.useState(d4ItemPictureHeight_defaultValue);
  const [d4ItemPictureWidth, setD4ItemPictureWidth] = React.useState(d4ItemPictureWidth_defaultValue);
  const [d4Items, setD4Items] = React.useState([...d4pi_d4Items]);
  const [d4ItemScreenshotBrightnessThreshold, setD4ItemScreenshotBrightnessThreshold] = React.useState(d4ItemScreenshotBrightnessThreshold_defaultValue);
  const [isSkipped_becauseDuplicateId_count, setIsSkipped_becauseDuplicateId_count] = React.useState(d4pi_isSkipped_becauseDuplicateIds_count);
  const [isVerboseMode, setIsVerboseMode] = React.useState(isVerboseMode_defaultValue);
  const buttonInputType = 'button';
  const d4ItemImageBorderOverwriteWidth_settingName = 'IBOW';
  const d4ItemImageBorderOverwriteWidthComponent = <code className={processorArgumentClassName}>Item Image Border Overwrite Width</code>;
  const d4ItemImageBorderOverwriteWidthInputId = 'd4item-image-border-overwrite-width-input';
  const d4ItemImageMaxWidth_settingName = 'IXW';
  const d4ItemImageMaxWidthComponent = <code className={processorArgumentClassName}>Item Image Maximum Width</code>;
  const d4ItemImageMaxWidthInputId = 'd4item-image-max-width-input';
  const d4ItemImageMinWidth_settingName = 'INW';
  const d4ItemImageMinWidthComponent = <code className={processorArgumentClassName}>Item Image Minimum Width</code>;
  const d4ItemImageMinWidthInputId = 'd4item-image-min-width-input';
  const d4ItemPictureHeight_settingName = 'PH';
  const d4ItemPictureHeightComponent = <code className={processorArgumentClassName}>Item Picture Height</code>;
  const d4ItemPictureHeightInputId = 'd4item-picture-Height-input';
  const d4ItemPictureWidth_settingName = 'PW';
  const d4ItemPictureWidthComponent = <code className={processorArgumentClassName}>Item Picture Width</code>;
  const d4ItemPictureWidthInputId = 'd4item-picture-width-input';
  const d4ItemScreenshotBrightnessThreshold_settingName = 'SBT';
  const d4ItemScreenshotBrightnessThresholdComponent = <code className={processorArgumentClassName}>Screenshot Brightness Threshold</code>;
  const d4ItemScreenshotBrightnessThresholdInputId = 'd4item-screenshot-brightness-threshold-input';
  const d4ItemScreenshotFileInputId = 'd4Item-screenshot-file-input';
  const defaultTimeout = 250; // Milliseconds
  const example1Url = '/images/example-1.jpg';
  const example2Url = '/images/example-2.jpg';
  const example3Url = '/images/example-3.jpg';
  const exampleLinkClassName = 'mx-2 my-3 px-2 py-1 hover:underline bg-blue-500 hover:bg-blue-700 rounded';
  const isVerboseMode_settingName = 'VM';
  const isVerboseModeInputId = 'd4pi-is-verbose-mode-input';
  const numberInputClassName = 'text-black mx-4';
  const numberInputType = 'number';
  const runExampleInputClassName = 'bg-blue-500 hover:bg-blue-700 mx-2 my-3 px-2 py-1 rounded';
  const scriptStrategy = 'beforeInteractive';
  const searchParams = useSearchParams();
  const ulClassName = 'list-disc ml-8';
  const zeroString = '0';

  function handleD4ItemScreenshotFileInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const d4ItemScreenshotFileList = event.target.files!;
    waitForD4piAppInitialization_then_processD4ItemScreenshotFileList();

    function waitForD4piAppInitialization_then_processD4ItemScreenshotFileList() {
      if (isD4piAppInitialized()) {
        processD4ItemScreenshotFileList();
      } else {
        setTimeout(() => { waitForD4piAppInitialization_then_processD4ItemScreenshotFileList(); }, defaultTimeout);
      }

      function processD4ItemScreenshotFileList() {
        const d4ItemScreenshotFiles = Array.from(d4ItemScreenshotFileList);
        d4ItemScreenshotFiles.forEach(d4ItemScreenshotFile => {
          const newD4Item = new D4Item(
            d4ItemImageBorderOverwriteWidth,
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
            newD4Item.isSkipped_becauseDuplicateIds = true;
            ++d4pi_isSkipped_becauseDuplicateIds_count;
            setIsSkipped_becauseDuplicateId_count(d4pi_isSkipped_becauseDuplicateIds_count);
          } else {
            d4pi_d4Items.push(newD4Item);
            setD4Items([...d4pi_d4Items]);
            const d4ItemScreenshotFileReader = new FileReader();
            d4ItemScreenshotFileReader.onload = () => {
              const d4ItemScreenshotDataUrl = d4ItemScreenshotFileReader.result as string;
              waitForD4ItemRendering_thenInitializeD4ItemScreenshot(newD4Item, d4ItemScreenshotDataUrl);
            }
            d4ItemScreenshotFileReader.readAsDataURL(d4ItemScreenshotFile);
          }
        });
      }
    }
  }

  function isD4piAppInitialized(): boolean { return globalThis.d4pi_is_opencv_runtimeInitialized; }

  function waitForD4ItemRendering_thenInitializeD4ItemScreenshot(d4Item: D4Item, screenshotUrl: string) {
    if (isD4ItemRendered()) {
      initializeD4ItemScreenshot();
    } else {
      setTimeout(() => { waitForD4ItemRendering_thenInitializeD4ItemScreenshot(d4Item, screenshotUrl); }, defaultTimeout);
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
      d4Item.screenshotElement.src = screenshotUrl;
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
            d4Item.itemImageProcessorArgument_borderOverwriteWidth,
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
              d4Item.isProcessingCompleted = true;
              setD4Items([...d4pi_d4Items]);
            }
          }
        }
      }
    }
  }

  function handleD4ItemBorderOverwriteWidthInputChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemImageBorderOverwriteWidth(Number(event.target.value)); }

  function handleD4ItemImageMaxWidthInputChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemImageMaxWidth(Number(event.target.value)); }

  function handleD4ItemImageMinWidthInputChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemImageMinWidth(Number(event.target.value)); }

  function handleD4ItemPictureHeightInputChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemPictureHeight(Number(event.target.value)); }

  function handleD4ItemPictureWidthInputChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemPictureWidth(Number(event.target.value)); }

  function handleD4ItemScreenshotBrightnessInputChange(event: React.ChangeEvent<HTMLInputElement>): void { setD4ItemScreenshotBrightnessThreshold(Number(event.target.value)); }

  function handleIsVerboseModeInputChange(event: React.ChangeEvent<HTMLInputElement>): void { setIsVerboseMode(event.target.checked); }

  function waitForD4piAppInitialization_then_processD4piExample(screenshotUrl: string, d4piExampleName: string) {
    if (isD4piAppInitialized()) {
      processD4piExample();
    } else {
      setTimeout(() => { waitForD4piAppInitialization_then_processD4piExample(screenshotUrl, d4piExampleName); }, defaultTimeout);
    }

    function processD4piExample() {
      const newD4Item = new D4Item(
        d4ItemImageBorderOverwriteWidth,
        d4ItemImageMaxWidth,
        d4ItemImageMinWidth,
        d4ItemPictureHeight,
        d4ItemPictureWidth,
        d4ItemScreenshotBrightnessThreshold,
        0,
        d4piExampleName,
        0
      );
      if (d4pi_d4Items.some(d4Item => d4Item.id === newD4Item.id)) {
        newD4Item.isSkipped_becauseDuplicateIds = true;
        ++d4pi_isSkipped_becauseDuplicateIds_count;
        setIsSkipped_becauseDuplicateId_count(d4pi_isSkipped_becauseDuplicateIds_count);
      } else {
        d4pi_d4Items.push(newD4Item);
        setD4Items([...d4pi_d4Items]);
        waitForD4ItemRendering_thenInitializeD4ItemScreenshot(newD4Item, screenshotUrl);
      }
    }
  }

  function handleRunExample1InputClick(event: React.MouseEvent<HTMLInputElement, MouseEvent>): void { waitForD4piAppInitialization_then_processD4piExample(example1Url, `D4pi Example 1`); }

  function handleRunExample2InputClick(event: React.MouseEvent<HTMLInputElement, MouseEvent>): void { waitForD4piAppInitialization_then_processD4piExample(example2Url, `D4pi Example 2`); }

  function handleRunExample3InputClick(event: React.MouseEvent<HTMLInputElement, MouseEvent>): void { waitForD4piAppInitialization_then_processD4piExample(example3Url, `D4pi Example 3`); }

  function hideIfNotVerboseMode(): string { return isVerboseMode ? '' : 'hidden'; }

  function getItemCountersComponent() {
    const queued = d4Items.length + isSkipped_becauseDuplicateId_count;
    const completed = d4Items.filter(d4Item => d4Item.isProcessingCompleted).length
    const inProgress = queued - completed - isSkipped_becauseDuplicateId_count;
    const warning = d4Items.filter(d4Item => d4Item.itemImageBoundingRectangleWidth === 0).length;

    function inProgressClass(): string { return inProgress === 0 ? 'bg-green-700' : 'bg-yellow-700'; }

    function warningClass(): string { return warning === 0 ? '' : 'bg-orange-700'; }

    return <>
      <li>
        <span>(Total Requests: {queued})</span>
        ===
        <span>(Completed Requests: {completed})</span>
        +
        <span>(Skipped Requests (because of duplicate ids): {isSkipped_becauseDuplicateId_count})</span>
        +
        <span className={`p-1 rounded ${inProgressClass()}`}>(Requests being Processed: {inProgress})</span>
      </li>
      <li>
        <span className={`p-1 rounded ${warningClass()}`}>Warning (completed without detecting any game item image): {warning}</span>
      </li>
    </>;
  }

  function exportSettingsAsUrl(): string {
    const settingStrings = [
      (d4ItemImageBorderOverwriteWidth === d4ItemImageBorderOverwriteWidth_defaultValue) ? '' : formatNameValuePair(d4ItemImageBorderOverwriteWidth_settingName, d4ItemImageBorderOverwriteWidth),
      (d4ItemImageMaxWidth === d4ItemImageMaxWidth_defaultValue) ? '' : formatNameValuePair(d4ItemImageMaxWidth_settingName, d4ItemImageMaxWidth),
      (d4ItemImageMinWidth === d4ItemImageMinWidth_defaultValue) ? '' : formatNameValuePair(d4ItemImageMinWidth_settingName, d4ItemImageMinWidth),
      (d4ItemPictureHeight === d4ItemPictureHeight_defaultValue) ? '' : formatNameValuePair(d4ItemPictureHeight_settingName, d4ItemPictureHeight),
      (d4ItemPictureWidth === d4ItemPictureWidth_defaultValue) ? '' : formatNameValuePair(d4ItemPictureWidth_settingName, d4ItemPictureWidth),
      (d4ItemScreenshotBrightnessThreshold === d4ItemScreenshotBrightnessThreshold_defaultValue) ? '' : formatNameValuePair(d4ItemScreenshotBrightnessThreshold_settingName, d4ItemScreenshotBrightnessThreshold),
      (isVerboseMode === isVerboseMode_defaultValue) ? '' : formatNameValuePair(isVerboseMode_settingName, isVerboseMode),
    ];
    const url = settingStrings.filter(str => str !== '').join('&');
    if (url === '') {
      return '/';
    } else {
      return '/?' + url;
    }

    function formatNameValuePair<T>(name: string, value: T): string { return `${name}=${value}`; }
  }

  function handleImportSettingsFromUrlClick(event: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
    {
      const value = getNumberSettingValueFromUrl(d4ItemImageBorderOverwriteWidth_settingName);
      if (value !== null) { setD4ItemImageBorderOverwriteWidth(value); }
    }

    {
      const value = getNumberSettingValueFromUrl(d4ItemImageMaxWidth_settingName);
      if (value !== null) { setD4ItemImageMaxWidth(value); }
    }

    {
      const value = getNumberSettingValueFromUrl(d4ItemImageMinWidth_settingName);
      if (value !== null) { setD4ItemImageMinWidth(value); }
    }

    {
      const value = getNumberSettingValueFromUrl(d4ItemPictureHeight_settingName);
      if (value !== null) { setD4ItemPictureHeight(value); }
    }

    {
      const value = getNumberSettingValueFromUrl(d4ItemPictureWidth_settingName);
      if (value !== null) { setD4ItemPictureWidth(value); }
    }

    {
      const value = getNumberSettingValueFromUrl(d4ItemScreenshotBrightnessThreshold_settingName);
      if (value !== null) { setD4ItemScreenshotBrightnessThreshold(value); }
    }

    {
      const value = getBooleanSettingValueFromUrl(isVerboseMode_settingName);
      if (value !== null) { setIsVerboseMode(value); }
    }

    function getNumberSettingValueFromUrl(settingName: string): number | null {
      if (searchParams.has(settingName)) {
        const value = Number(searchParams.get(settingName));
        if (Number.isSafeInteger(value)) {
          return value;
        }
      }
      return null;
    }

    function getBooleanSettingValueFromUrl(settingName: string): boolean | null {
      if (searchParams.has(settingName)) {
        return searchParams.get(settingName)?.toLowerCase() === 'true';
      }
      return null;
    }
  }

  function handleLoadDefaultSettingsClick(event: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
    if (d4ItemImageBorderOverwriteWidth !== d4ItemImageBorderOverwriteWidth_defaultValue) { setD4ItemImageBorderOverwriteWidth(d4ItemImageBorderOverwriteWidth_defaultValue); }
    if (d4ItemImageMaxWidth !== d4ItemImageMaxWidth_defaultValue) { setD4ItemImageMaxWidth(d4ItemImageMaxWidth_defaultValue); }
    if (d4ItemImageMinWidth !== d4ItemImageMinWidth_defaultValue) { setD4ItemImageMinWidth(d4ItemImageMinWidth_defaultValue); }
    if (d4ItemPictureHeight !== d4ItemPictureHeight_defaultValue) { setD4ItemPictureHeight(d4ItemPictureHeight_defaultValue); }
    if (d4ItemPictureWidth !== d4ItemPictureWidth_defaultValue) { setD4ItemPictureWidth(d4ItemPictureWidth_defaultValue); }
    if (d4ItemScreenshotBrightnessThreshold !== d4ItemScreenshotBrightnessThreshold_defaultValue) { setD4ItemScreenshotBrightnessThreshold(d4ItemScreenshotBrightnessThreshold_defaultValue); }
    if (isVerboseMode !== isVerboseMode_defaultValue) { setIsVerboseMode(isVerboseMode_defaultValue); }
  }

  return <>
    <Script src='/code/is_opencv_runtimeInitialized.js' strategy={scriptStrategy} />
    <Script src='https://docs.opencv.org/4.9.0/opencv.js' strategy={scriptStrategy} />
    <Script src='/code/fromD4ItemScreenshot_toD4ItemTextImage.js' strategy={scriptStrategy} />
    <Script src='https://cdn.jsdelivr.net/npm/tesseract.js@5.0.4/dist/tesseract.min.js' strategy={scriptStrategy} />
    <Script src='/code/fromImage_toText.js' strategy={scriptStrategy} />

    <main>
      <div>
        Start here.
        <ul className={ulClassName}>
          <li>
            <label htmlFor={d4ItemScreenshotFileInputId}>Choose Screenshot(s) to be Processed</label>
            <input id={d4ItemScreenshotFileInputId} className='mx-4' accept='image/*' multiple onChange={handleD4ItemScreenshotFileInputChange} type='file' />
          </li>

          <li>
            <label htmlFor={isVerboseModeInputId}>Verbose Mode</label>
            <input id={isVerboseModeInputId} className='mx-4' checked={isVerboseMode} onChange={handleIsVerboseModeInputChange} type='checkbox' />
          </li>

          <li>
            (⚗️ Experimental)
            <input className='bg-green-700 hover:bg-green-600 mx-2 my-3 px-2 py-1 rounded' onClick={handleImportSettingsFromUrlClick} type={buttonInputType} value='Import Settings from URL' />
            <input className='bg-green-700 hover:bg-green-600 mx-2 my-3 px-2 py-1 rounded' onClick={handleLoadDefaultSettingsClick} type={buttonInputType} value='Load Default Settings' />
            <a className='mx-2 my-3 px-2 py-1 hover:underline bg-green-700 hover:bg-green-600 rounded' href={exportSettingsAsUrl()}>Current Settings as URL</a>
            (Experimental 🧪)
          </li>
        </ul>

        <div>
          Examples:
          <ul className={ulClassName}>
            <li>
              <input className={runExampleInputClassName} onClick={handleRunExample1InputClick} type={buttonInputType} value='Run Example 1' />
              <input className={runExampleInputClassName} onClick={handleRunExample2InputClick} type={buttonInputType} value='Run Example 2' />
              <input className={runExampleInputClassName} onClick={handleRunExample3InputClick} type={buttonInputType} value='Run Example 3' />
            </li>

            <li>
              <a className={exampleLinkClassName} href={example1Url}>💾 example-1.jpg (678K)</a>
              <a className={exampleLinkClassName} href={example2Url}>💾 example-2.jpg (626K)</a>
              <a className={exampleLinkClassName} href={example3Url}>💾 example-3.jpg (607K)</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`divide-y-2 divide-gray-800 ${hideIfNotVerboseMode()}`}>
        <div>
          The following defaults settings are derived from our test environment:
          <ul className={ulClassName}>
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
          You may have to adjust these settings as necessary.
          <ul className={ulClassName}>
            <li>
              <label htmlFor={d4ItemScreenshotBrightnessThresholdInputId}>{d4ItemScreenshotBrightnessThresholdComponent}</label>
              <input id={d4ItemScreenshotBrightnessThresholdInputId} className={numberInputClassName} max='255' min={zeroString} onChange={handleD4ItemScreenshotBrightnessInputChange} type={numberInputType} value={d4ItemScreenshotBrightnessThreshold} />

              <ul className={ulClassName}>
                <li>
                  Screenshot pixels darker/brighter than this value are treated as black/white, respectively.
                </li>
                <li>
                  A good threshold value makes the a game item image&apos;s bounding rectangle(s) stand out as if drawn with thick black lines of uniform thickness.
                </li>
                <li>
                  Run an example and check out its &quot;Screenshot after Brightness Threshold&quot; result image.
                </li>
              </ul>
            </li>

            <li>
              <label htmlFor={d4ItemImageMinWidthInputId}>{d4ItemImageMinWidthComponent}</label>
              <input id={d4ItemImageMinWidthInputId} className={numberInputClassName} min={zeroString} onChange={handleD4ItemImageMinWidthInputChange} type={numberInputType} value={d4ItemImageMinWidth} />

              <ul className={ulClassName}>
                <li>
                  Game item image candidates with widths narrower than this value are discarded.
                </li>
                <li>
                  As a screenshot may contain multiple rectangle-like shapes, a good minimum-width value weeds out undesirable candidates.
                </li>
                <li>
                  Run an example and check out its &quot;Screenshot after after Game Item Image Detection&quot; result image.
                </li>
              </ul>
            </li>

            <li>
              <label htmlFor={d4ItemImageMaxWidthInputId}>{d4ItemImageMaxWidthComponent}</label>
              <input id={d4ItemImageMaxWidthInputId} className={numberInputClassName} min={zeroString} onChange={handleD4ItemImageMaxWidthInputChange} type={numberInputType} value={d4ItemImageMaxWidth} />

              <ul className={ulClassName}>
                <li>
                  Game item image candidates with widths wider than this value are discarded.
                </li>
                <li>
                  As a screenshot may contain multiple rectangle-like shapes, a good minimum-width value weeds out undesirable candidates.
                </li>
                <li>
                  Run an example and check out its &quot;Screenshot after after Game Item Image Detection&quot; result image.
                </li>
              </ul>
            </li>

            <li>
              <label htmlFor={d4ItemPictureWidthInputId}>{d4ItemPictureWidthComponent}</label>
              <input id={d4ItemPictureWidthInputId} className={numberInputClassName} min={zeroString} onChange={handleD4ItemPictureWidthInputChange} type={numberInputType} value={d4ItemPictureWidth} />

              <ul className={ulClassName}>
                <li>
                  The top-right-corner game item pictures are removed to improve text recognition accuracy.
                </li>
                <li>
                  A good pair of game item picture width & height values makes it possible to reduce noises without degrading a game item image&apos;s informational value.
                </li>
                <li>
                  Run an example and check out its &quot;Game Item Image&quot; and &quot;Game Text Image&quot; result images.
                </li>
              </ul>
            </li>

            <li>
              <label htmlFor={d4ItemPictureHeightInputId}>{d4ItemPictureHeightComponent}</label>
              <input id={d4ItemPictureHeightInputId} className={numberInputClassName} min={zeroString} onChange={handleD4ItemPictureHeightInputChange} type={numberInputType} value={d4ItemPictureHeight} />

              <ul className={ulClassName}>
                <li>
                  The top-right-corner game item pictures are removed to improve text recognition accuracy.
                </li>
                <li>
                  A good pair of game item picture width & height values makes it possible to reduce noises without degrading a game item image&apos;s informational value.
                </li>
                <li>
                  Run an example and check out its &quot;Game Item Image&quot; and &quot;Game Text Image&quot; result images.
                </li>
              </ul>
            </li>

            <li>
              <label htmlFor={d4ItemImageBorderOverwriteWidthInputId}>{d4ItemImageBorderOverwriteWidthComponent}</label>
              <input id={d4ItemImageBorderOverwriteWidthInputId} className={numberInputClassName} min={zeroString} onChange={handleD4ItemBorderOverwriteWidthInputChange} type={numberInputType} value={d4ItemImageBorderOverwriteWidth} />

              <ul className={ulClassName}>
                <li>
                  Game item images&apos; borders are removed to improve text recognition accuracy.
                </li>
                <li>
                  A good border-overwrite-width values makes it possible to reduce noises without degrading a game item image&apos;s informational value.
                </li>
                <li>
                  Run an example and check out its &quot;Game Item Image&quot; and &quot;Game Text Image&quot; result images.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          Statistics
          <ul className={ulClassName}>
            {getItemCountersComponent()}
          </ul>
        </div>

        <div>
          Processor Workspaces:
          <ul className={ulClassName}>
            {
              d4Items.map(d4Item =>
                <li key={d4Item.id}>
                  Screenshot File Name: <code className='mx-4'>{d4Item.screenshotFileName}</code>
                  <ul className={ulClassName}>
                    <li>
                      Screenshot File Last-Modified: <code>{d4Item.screenshotFileLastModified}</code>
                    </li>

                    <li>
                      Screenshot File Size: <code>{d4Item.screenshotFileSize}</code>
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
