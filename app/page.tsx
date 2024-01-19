'use client';

import Filterable from '@/code/Filterable';
import React from 'react';
import Script from 'next/script';

const d4pi_filterables = [] as Filterable[];
let d4pi_discardedScreenshotProcessorRequestsCount = 0;

export default function Home(): React.JSX.Element {
  const _0String = '0';
  const AppControl_checkboxInputId = 'AppControl CheckboxInput';
  const AppControl_ShowDevControl_checkboxInputId = 'AppControl ShowDevControl CheckboxInput';
  const AppControl_ShowDevTestInformation_checkboxInputId = 'AppControl ShowDevTestInformation CheckboxInput';
  const AppControl_ShowScreenshotProcessorControl_checkboxInputId = 'AppControl ShowScreenshotProcessorControl CheckboxInput';
  const AppControl_ShowSettingsControl_checkboxInputId = 'AppControl ShowSettingsControl CheckboxInput';
  const AppControl_ShowStatisticsReport_checkboxInputId = 'AppControl ShowStatisticsReport CheckboxInput';
  const AppControl_ShowTutorial_checkboxInputId = 'AppControl ShowTutorial CheckboxInput';
  const checkboxInputType = 'checkbox';
  const defaultTimeout = 257; // Milliseconds
  const DevControl_checkboxInputId = 'DevControl CheckboxInput';
  const DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputId = 'DevControl ShowInputImage_afterBrightnessThreshold CheckboxInput';
  const DevControl_ShowInputImage_afterItemImageDetection_checkboxInputId = 'DevControl ShowInputImage_afterItemImageDetection CheckboxInput';
  const DevControl_ShowInputImage_checkboxInputId = 'DevControl ShowInputImage CheckboxInput';
  const DevControl_ShowItemImage_checkboxInputId = 'DevControl ShowItemImage CheckboxInput';
  const DevControl_ShowText_checkboxInputId = 'DevControl ShowText CheckboxInput';
  const DevControl_ShowTextImage_checkboxInputId = 'DevControl ShowTextImage CheckboxInput';
  const group_divClass = 'border-2 border-dotted border-neutral-600 m-5 max-w-fit p-5 rounded-2xl';
  const is_AppControl_checkboxInputChecked_defaultValue = false;
  const is_AppControl_ShowDevControl_checkboxInputChecked_defaultValue = true;
  const is_AppControl_ShowDevTestInformation_checkboxInputChecked_defaultValue = false;
  const is_AppControl_ShowScreenshotProcessorControl_checkboxInputChecked_defaultValue = false;
  const is_AppControl_ShowSettingsControl_checkboxInputChecked_defaultValue = false;
  const is_AppControl_ShowStatisticsReport_checkboxInputChecked_defaultValue = false;
  const is_AppControl_ShowTutorial_checkboxInputChecked_defaultValue = true;
  const is_DevControl_checkboxInputChecked_defaultValue = false;
  const is_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChecked_defaultValue = false;
  const is_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChecked_defaultValue = false;
  const is_DevControl_ShowInputImage_checkboxInputChecked_defaultValue = false;
  const is_DevControl_ShowItemImage_checkboxInputChecked_defaultValue = true;
  const is_DevControl_ShowText_checkboxInputChecked_defaultValue = false;
  const is_DevControl_ShowTextImage_checkboxInputChecked_defaultValue = false;
  const numberInputClass = 'mr-5 text-black text-right w-20';
  const numberInputType = 'number';
  const olClass = 'list-decimal list-inside';
  const screenshot_fileInputId = 'Screenshot FileInput';
  const screenshot_processor_InputImageBrightnessThreshold_defaultValue = 25;
  const screenshot_processor_InputImageBrightnessThreshold_labelText = 'Input Image Brightness Threshold';
  const screenshot_processor_InputImageBrightnessThreshold_numberInputId = 'ScreenshotProcessor InputImageBrightnessThreshold NumberInput';
  const screenshot_processor_ItemImageMaxWidth_defaultValue = 410;
  const screenshot_processor_ItemImageMaxWidth_labelText = 'Item Image Max Width';
  const screenshot_processor_ItemImageMaxWidth_numberInputId = 'ScreenshotProcessor ItemImageMaxWidth NumberInput';
  const screenshot_processor_ItemImageMinWidth_defaultValue = 340;
  const screenshot_processor_ItemImageMinWidth_labelText = 'Item Image Min Width';
  const screenshot_processor_ItemImageMinWidth_numberInputId = 'ScreenshotProcessor ItemImageMinWidth NumberInput';
  const screenshot_processor_ItemPictureHeight_defaultValue = 128;
  const screenshot_processor_ItemPictureHeight_labelText = 'Item Picture Height';
  const screenshot_processor_ItemPictureHeight_numberInputId = 'ScreenshotProcessor ItemPictureHeight NumberInput';
  const screenshot_processor_ItemPictureWidth_defaultValue = 128;
  const screenshot_processor_ItemPictureWidth_labelText = 'Item Picture Width';
  const screenshot_processor_ItemPictureWidth_numberInputId = 'ScreenshotProcessor ItemPictureWidth NumberInput';
  const screenshot_processor_TextImageBorderTrimSize_defaultValue = 32;
  const screenshot_processor_TextImageBorderTrimSize_labelText = 'Text Image Border Trim Size';
  const screenshot_processor_TextImageBorderTrimSize_numberInputId = 'ScreenshotProcessor TextImageBorderTrimSize NumberInput';
  const screenshot_processor_TextImageCornerTrimSize_defaultValue = 25;
  const screenshot_processor_TextImageCornerTrimSize_labelText = 'Text Image Corner Trim Size';
  const screenshot_processor_TextImageCornerTrimSize_numberInputId = 'ScreenshotProcessor TextImageCornerTrimSize NumberInput';
  const scriptStrategy = 'beforeInteractive';
  const small_group_divClass = 'border-2 border-dotted border-neutral-600 m-2.5 max-w-fit p-5 rounded-lg';
  const ulClass = 'list-disc list-inside';

  const [discardedScreenshotProcessorRequestsCount, set_discardedScreenshotProcessorRequestsCount] = React.useState(d4pi_discardedScreenshotProcessorRequestsCount);
  const [filterables, set_filterables] = React.useState(d4pi_filterables);
  const [is_AppControl_checkboxInputChecked, set_is_AppControl_checkboxInputChecked] = React.useState(is_AppControl_checkboxInputChecked_defaultValue);
  const [is_AppControl_ShowDevControl_checkboxInputChecked, set_is_AppControl_ShowDevControl_checkboxInputChecked] = React.useState(is_AppControl_ShowDevControl_checkboxInputChecked_defaultValue);
  const [is_AppControl_ShowDevTestInformation_checkboxInputChecked, set_is_AppControl_ShowDevTestInformation_checkboxInputChecked] = React.useState(is_AppControl_ShowDevTestInformation_checkboxInputChecked_defaultValue);
  const [is_AppControl_ShowScreenshotProcessorControl_checkboxInputChecked, set_is_AppControl_ShowScreenshotProcessorControl_checkboxInputChecked] = React.useState(is_AppControl_ShowScreenshotProcessorControl_checkboxInputChecked_defaultValue);
  const [is_AppControl_ShowSettingsControl_checkboxInputChecked, set_is_AppControl_ShowSettingsControl_checkboxInputChecked] = React.useState(is_AppControl_ShowSettingsControl_checkboxInputChecked_defaultValue);
  const [is_AppControl_ShowStatisticsReport_checkboxInputChecked, set_is_AppControl_ShowStatisticsReport_checkboxInputChecked] = React.useState(is_AppControl_ShowStatisticsReport_checkboxInputChecked_defaultValue);
  const [is_AppControl_ShowTutorial_checkboxInputChecked, set_is_AppControl_ShowTutorial_checkboxInputChecked] = React.useState(is_AppControl_ShowTutorial_checkboxInputChecked_defaultValue);
  const [is_DevControl_checkboxInputChecked, set_is_DevControl_checkboxInputChecked] = React.useState(is_DevControl_checkboxInputChecked_defaultValue);
  const [is_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChecked, set_is_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChecked] = React.useState(is_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChecked_defaultValue);
  const [is_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChecked, set_is_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChecked] = React.useState(is_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChecked_defaultValue);
  const [is_DevControl_ShowInputImage_checkboxInputChecked, set_is_DevControl_ShowInputImage_checkboxInputChecked] = React.useState(is_DevControl_ShowInputImage_checkboxInputChecked_defaultValue);
  const [is_DevControl_ShowItemImage_checkboxInputChecked, set_is_DevControl_ShowItemImage_checkboxInputChecked] = React.useState(is_DevControl_ShowItemImage_checkboxInputChecked_defaultValue);
  const [is_DevControl_ShowText_checkboxInputChecked, set_is_DevControl_ShowText_checkboxInputChecked] = React.useState(is_DevControl_ShowText_checkboxInputChecked_defaultValue);
  const [is_DevControl_ShowTextImage_checkboxInputChecked, set_is_DevControl_ShowTextImage_checkboxInputChecked] = React.useState(is_DevControl_ShowTextImage_checkboxInputChecked_defaultValue);
  const [screenshot_processor_InputImageBrightnessThreshold, set_screenshot_processor_InputImageBrightnessThreshold] = React.useState(screenshot_processor_InputImageBrightnessThreshold_defaultValue);
  const [screenshot_processor_ItemImageMaxWidth, set_screenshot_processor_ItemImageMaxWidth] = React.useState(screenshot_processor_ItemImageMaxWidth_defaultValue);
  const [screenshot_processor_ItemImageMinWidth, set_screenshot_processor_ItemImageMinWidth] = React.useState(screenshot_processor_ItemImageMinWidth_defaultValue);
  const [screenshot_processor_ItemPictureHeight, set_screenshot_processor_ItemPictureHeight] = React.useState(screenshot_processor_ItemPictureHeight_defaultValue);
  const [screenshot_processor_ItemPictureWidth, set_screenshot_processor_ItemPictureWidth] = React.useState(screenshot_processor_ItemPictureWidth_defaultValue);
  const [screenshot_processor_TextImageBorderTrimSize, set_screenshot_processor_TextImageBorderTrimSize] = React.useState(screenshot_processor_TextImageBorderTrimSize_defaultValue);
  const [screenshot_processor_TextImageCornerTrimSize, set_screenshot_processor_TextImageCornerTrimSize] = React.useState(screenshot_processor_TextImageCornerTrimSize_defaultValue);

  function handle_AppControl_ShowDevControl_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_AppControl_ShowDevControl_checkboxInputChecked(event.target.checked); }
  function handle_AppControl_ShowDevTestInformation_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_AppControl_ShowDevTestInformation_checkboxInputChecked(event.target.checked); }
  function handle_AppControl_ShowScreenshotProcessorControl_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_AppControl_ShowScreenshotProcessorControl_checkboxInputChecked(event.target.checked); }
  function handle_AppControl_ShowSettingsControl_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_AppControl_ShowSettingsControl_checkboxInputChecked(event.target.checked); }
  function handle_AppControl_ShowStatisticsReport_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_AppControl_ShowStatisticsReport_checkboxInputChecked(event.target.checked); }
  function handle_AppControl_ShowTutorial_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_AppControl_ShowTutorial_checkboxInputChecked(event.target.checked); }
  function handle_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChecked(event.target.checked); }
  function handle_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChecked(event.target.checked); }
  function handle_DevControl_ShowInputImage_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_DevControl_ShowInputImage_checkboxInputChecked(event.target.checked); }
  function handle_DevControl_ShowItemImage_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_DevControl_ShowItemImage_checkboxInputChecked(event.target.checked); }
  function handle_DevControl_ShowText_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_DevControl_ShowText_checkboxInputChecked(event.target.checked); }
  function handle_DevControl_ShowTextImage_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_is_DevControl_ShowTextImage_checkboxInputChecked(event.target.checked); }
  function handle_screenshot_processor_InputImageBrightnessThreshold_numberInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_screenshot_processor_InputImageBrightnessThreshold(Number(event.target.value)); }
  function handle_screenshot_processor_ItemImageMaxWidth_numberInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_screenshot_processor_ItemImageMaxWidth(Number(event.target.value)); }
  function handle_screenshot_processor_ItemImageMinWidth_numberInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_screenshot_processor_ItemImageMinWidth(Number(event.target.value)); }
  function handle_screenshot_processor_ItemPictureHeight_numberInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_screenshot_processor_ItemPictureHeight(Number(event.target.value)); }
  function handle_screenshot_processor_ItemPictureWidth_numberInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_screenshot_processor_ItemPictureWidth(Number(event.target.value)); }
  function handle_screenshot_processor_TextImageBorderTrimSize_numberInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_screenshot_processor_TextImageBorderTrimSize(Number(event.target.value)); }
  function handle_screenshot_processor_TextImageCornerTrimSize_numberInputChange(event: React.ChangeEvent<HTMLInputElement>): void { set_screenshot_processor_TextImageCornerTrimSize(Number(event.target.value)); }

  function handle_AppControl_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    set_is_AppControl_checkboxInputChecked(event.target.checked);
    set_is_AppControl_ShowDevControl_checkboxInputChecked(event.target.checked);
    set_is_AppControl_ShowDevTestInformation_checkboxInputChecked(event.target.checked);
    set_is_AppControl_ShowScreenshotProcessorControl_checkboxInputChecked(event.target.checked);
    set_is_AppControl_ShowSettingsControl_checkboxInputChecked(event.target.checked);
    set_is_AppControl_ShowStatisticsReport_checkboxInputChecked(event.target.checked);
    set_is_AppControl_ShowTutorial_checkboxInputChecked(event.target.checked);
  }

  function handle_DevControl_checkboxInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    set_is_DevControl_checkboxInputChecked(event.target.checked);
    set_is_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChecked(event.target.checked);
    set_is_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChecked(event.target.checked);
    set_is_DevControl_ShowInputImage_checkboxInputChecked(event.target.checked);
    set_is_DevControl_ShowItemImage_checkboxInputChecked(event.target.checked);
    set_is_DevControl_ShowText_checkboxInputChecked(event.target.checked);
    set_is_DevControl_ShowTextImage_checkboxInputChecked(event.target.checked);
  }

  function handle_RunDemo_buttonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    waitForAppInitialization_then_processDemoExample(1704654020, 'Demo Example 1', 693354, '/images/example-1.jpg');
    waitForAppInitialization_then_processDemoExample(1704654020, 'Demo Example 2', 640421, '/images/example-2.jpg');
    waitForAppInitialization_then_processDemoExample(1704654020, 'Demo Example 3', 621025, '/images/example-3.jpg');
  }

  function handle_screenshot_fileInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const screenshotFileList = event.target.files!;
    waitForAppInitialization_then_processScreenshotFileList();

    function waitForAppInitialization_then_processScreenshotFileList(): void {
      if (isAppInitialized()) {
        processScreenshotFileList();
      } else {
        setTimeout(() => { waitForAppInitialization_then_processScreenshotFileList(); }, defaultTimeout);
      }

      function processScreenshotFileList(): void {
        const screenshotFiles = Array.from(screenshotFileList);
        screenshotFiles.forEach(screenshotFile => {
          const newFilterable = new Filterable(
            screenshot_processor_InputImageBrightnessThreshold,
            screenshot_processor_ItemImageMaxWidth,
            screenshot_processor_ItemImageMinWidth,
            screenshot_processor_ItemPictureHeight,
            screenshot_processor_ItemPictureWidth,
            screenshot_processor_TextImageBorderTrimSize,
            screenshot_processor_TextImageCornerTrimSize,
            screenshotFile.lastModified,
            screenshotFile.name,
            screenshotFile.size
          );
          if (d4pi_filterables.some(filterable => filterable.id === newFilterable.id)) {
            ++d4pi_discardedScreenshotProcessorRequestsCount;
            set_discardedScreenshotProcessorRequestsCount(d4pi_discardedScreenshotProcessorRequestsCount);
          } else {
            d4pi_filterables.push(newFilterable);
            set_filterables([...d4pi_filterables]);
            const screenshotFileReader = new FileReader();
            screenshotFileReader.onload = () => {
              const screenshotInputImageDataUrl = screenshotFileReader.result as string;
              waitForScreenshotsRendering_then_initializeScreenshotInputImage(newFilterable, screenshotInputImageDataUrl);
            };
            screenshotFileReader.readAsDataURL(screenshotFile);
          }
        });
      }
    }
  }

  function isAppInitialized(): boolean {
    return (
      d4pi_isCodeLoaded
      && d4pi_isOpencvRuntimeInitialized
    );
  }

  function showIfTrue(is_Show_checkboxInputChecked: boolean): string { return is_Show_checkboxInputChecked ? '' : 'hidden'; }

  function waitForScreenshotsRendering_then_initializeScreenshotInputImage(filterable: Filterable, screenshotInputImageUrl: string): void {
    if (isScreenshotsRendered()) {
      initializeScreenshotInputImage();
    } else {
      setTimeout(() => { waitForScreenshotsRendering_then_initializeScreenshotInputImage(filterable, screenshotInputImageUrl); }, defaultTimeout);
    }

    function isScreenshotsRendered(): boolean {
      return (
        filterable.inputImage_afterBrightnessThreshold_canvas !== null
        && filterable.inputImage_afterItemImageDetection_canvas !== null
        && filterable.inputImage_image !== null
        && filterable.itemImage_canvas !== null
        && filterable.textImage_canvas !== null
      );
    }

    function initializeScreenshotInputImage(): void {
      filterable.inputImage_image.src = screenshotInputImageUrl;
      waitForScreenshotInputImageInitialization_then_processScreenshotInputImage();

      function waitForScreenshotInputImageInitialization_then_processScreenshotInputImage(): void {
        if (isScreenshotInputImageInitialized()) {
          processScreenshotInputImage();
        } else {
          setTimeout(() => { waitForScreenshotInputImageInitialization_then_processScreenshotInputImage(); }, defaultTimeout);
        }

        function isScreenshotInputImageInitialized(): boolean { return filterable.inputImage_image.width !== 0; }

        function processScreenshotInputImage(): void {
          d4pi_fromInputImage_toTextImage(
            filterable.inputImage_afterBrightnessThreshold_canvasId,
            filterable.inputImage_afterItemImageDetection_canvasId,
            filterable.inputImage_image,
            filterable.itemImage_canvasId,
            filterable.itemImage_dataId,
            filterable.textImage_canvasId,
            filterable.screenshot_processor_InputImageBrightnessThreshold,
            filterable.screenshot_processor_ItemImageMaxWidth,
            filterable.screenshot_processor_ItemImageMinWidth,
            filterable.screenshot_processor_ItemPictureHeight,
            filterable.screenshot_processor_ItemPictureWidth,
            filterable.screenshot_processor_TextImageBorderTrimSize,
            filterable.screenshot_processor_TextImageCornerTrimSize
          );
          d4pi_fromImage_toText(
            filterable.text_dataId,
            filterable.textImage_canvas
          );
          waitForScreenshotTextInitialization_then_processScreenshotText();

          function waitForScreenshotTextInitialization_then_processScreenshotText(): void {
            if (isScreenshotTextInitialized()) {
              processScreenshotText();
            } else {
              setTimeout(() => { waitForScreenshotTextInitialization_then_processScreenshotText(); }, defaultTimeout);
            }

            function isScreenshotTextInitialized(): boolean { return filterable.text_data_exists; }

            function processScreenshotText(): void {
              filterable.processText();
              set_filterables([...d4pi_filterables]);
              d4pi_initialize_filterables_utilities(
                d4pi_filterables,
                set_filterables
              );
            }
          }
        }
      }
    }
  }

  function waitForAppInitialization_then_processDemoExample(demoExample_lastModifiedTimestamp: number, demoExample_name: string, demoExample_size: number, demoExample_data: string): void {
    if (isAppInitialized()) {
      processDemoExample();
    } else {
      setTimeout(() => { waitForAppInitialization_then_processDemoExample(demoExample_lastModifiedTimestamp, demoExample_name, demoExample_size, demoExample_data); }, defaultTimeout);
    }

    function processDemoExample(): void {
      const newFilterable = new Filterable(
        screenshot_processor_InputImageBrightnessThreshold,
        screenshot_processor_ItemImageMaxWidth,
        screenshot_processor_ItemImageMinWidth,
        screenshot_processor_ItemPictureHeight,
        screenshot_processor_ItemPictureWidth,
        screenshot_processor_TextImageBorderTrimSize,
        screenshot_processor_TextImageCornerTrimSize,
        demoExample_lastModifiedTimestamp,
        demoExample_name,
        demoExample_size
      );
      if (d4pi_filterables.some(filterable => filterable.id === newFilterable.id)) {
        ++d4pi_discardedScreenshotProcessorRequestsCount;
        set_discardedScreenshotProcessorRequestsCount(d4pi_discardedScreenshotProcessorRequestsCount);
      } else {
        d4pi_filterables.push(newFilterable);
        set_filterables([...d4pi_filterables]);
        waitForScreenshotsRendering_then_initializeScreenshotInputImage(newFilterable, demoExample_data);
      }
    }
  }

  function renderStatisticsReport(): React.JSX.Element {
    const card_divClass = 'border-2 border-dotted border-neutral-500 m-2.5 p-2.5 rounded-lg';
    const totalCount = filterables.length;
    const doneScreenshots = filterables.filter(screenshot => screenshot.isProcessed);
    const doneCount = doneScreenshots.length;
    const averageTime = doneCount > 0 ? Math.round(doneScreenshots.reduce((totalTime, doneScreenshot) => totalTime + doneScreenshot.processingTime, 0) / doneCount) / 1000 + 's' : 'N/A';
    return <>
      <div className={card_divClass}>
        Total {totalCount}
        <div className={card_divClass}>
          Done {doneCount}
          <div className={card_divClass}>
            Average {averageTime}
          </div>
        </div>
        <div className={card_divClass}>
          Processing {totalCount - doneCount}
        </div>
      </div>
      <div className={card_divClass}>
        Discarded {discardedScreenshotProcessorRequestsCount}
      </div>
      <div className={card_divClass}>
        Warning {filterables.filter(screenshot => screenshot.isProcessed && screenshot.itemImage_data_candidates.length === 0).length}
      </div>
    </>;
  }

  return <>
    <Script src='/code/isOpencvRuntimeInitialized.js' strategy={scriptStrategy} />
    <Script src='https://docs.opencv.org/4.9.0/opencv.js' strategy={scriptStrategy} />
    <Script src='/code/fromImage_toText.js' strategy={scriptStrategy} />
    <Script src='https://cdn.jsdelivr.net/npm/tesseract.js@5.0.4/dist/tesseract.min.js' strategy={scriptStrategy} />
    <Script src='/code/fromInputImage_toTextImage.js' strategy={scriptStrategy} />
    <Script src='/code/filterables_utilities.js' strategy={scriptStrategy} />
    <Script src='/code/isCodeLoaded.js' strategy={scriptStrategy} />

    <main>
      <div className='flex flex-wrap'>
        <div className={group_divClass}>
          <label htmlFor={screenshot_fileInputId}>Choose Screenshot(s) from Disk to be Processed</label>
          <input id={screenshot_fileInputId} className='ml-5' accept='image/*' multiple onChange={handle_screenshot_fileInputChange} type='file' />
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className={`${group_divClass} space-y-2`}>
          <ul className='space-y-2'>
            <li><input id={AppControl_checkboxInputId} className='mr-5' checked={is_AppControl_checkboxInputChecked} onChange={handle_AppControl_checkboxInputChange} type={checkboxInputType} /><label htmlFor={AppControl_checkboxInputId}><strong>App Control</strong></label></li>
            <li><input id={AppControl_ShowDevControl_checkboxInputId} className='mr-5' checked={is_AppControl_ShowDevControl_checkboxInputChecked} onChange={handle_AppControl_ShowDevControl_checkboxInputChange} type={checkboxInputType} /><label htmlFor={AppControl_ShowDevControl_checkboxInputId}>Dev Control</label></li>
            <li><input id={AppControl_ShowDevTestInformation_checkboxInputId} className='mr-5' checked={is_AppControl_ShowDevTestInformation_checkboxInputChecked} onChange={handle_AppControl_ShowDevTestInformation_checkboxInputChange} type={checkboxInputType} /><label htmlFor={AppControl_ShowDevTestInformation_checkboxInputId}>Dev/Test Information</label></li>
            <li><input id={AppControl_ShowScreenshotProcessorControl_checkboxInputId} className='mr-5' checked={is_AppControl_ShowScreenshotProcessorControl_checkboxInputChecked} onChange={handle_AppControl_ShowScreenshotProcessorControl_checkboxInputChange} type={checkboxInputType} /><label htmlFor={AppControl_ShowScreenshotProcessorControl_checkboxInputId}>Screenshot Processor Control</label></li>
            <li><input id={AppControl_ShowSettingsControl_checkboxInputId} className='mr-5' checked={is_AppControl_ShowSettingsControl_checkboxInputChecked} onChange={handle_AppControl_ShowSettingsControl_checkboxInputChange} type={checkboxInputType} /><label htmlFor={AppControl_ShowSettingsControl_checkboxInputId}>Settings Control</label></li>
            <li><input id={AppControl_ShowStatisticsReport_checkboxInputId} className='mr-5' checked={is_AppControl_ShowStatisticsReport_checkboxInputChecked} onChange={handle_AppControl_ShowStatisticsReport_checkboxInputChange} type={checkboxInputType} /><label htmlFor={AppControl_ShowStatisticsReport_checkboxInputId}>Statistics Report</label></li>
            <li><input id={AppControl_ShowTutorial_checkboxInputId} className='mr-5' checked={is_AppControl_ShowTutorial_checkboxInputChecked} onChange={handle_AppControl_ShowTutorial_checkboxInputChange} type={checkboxInputType} /><label htmlFor={AppControl_ShowTutorial_checkboxInputId}>Tutorial</label></li>
          </ul>
        </div>

        <div className={`${group_divClass} space-y-2 ${showIfTrue(is_AppControl_ShowDevControl_checkboxInputChecked)}`}>
          <ul className='space-y-2'>
            <li><input id={DevControl_checkboxInputId} className='mr-5' checked={is_DevControl_checkboxInputChecked} onChange={handle_DevControl_checkboxInputChange} type={checkboxInputType} /><label htmlFor={DevControl_checkboxInputId}><strong>Dev Control</strong></label></li>
            <li><input id={DevControl_ShowInputImage_checkboxInputId} className='mr-5' checked={is_DevControl_ShowInputImage_checkboxInputChecked} onChange={handle_DevControl_ShowInputImage_checkboxInputChange} type={checkboxInputType} /><label htmlFor={DevControl_ShowInputImage_checkboxInputId}>Input Image</label></li>
            <li><input id={DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputId} className='mr-5' checked={is_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChecked} onChange={handle_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChange} type={checkboxInputType} /><label htmlFor={DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputId}>Input Image after Brightness Threshold</label></li>
            <li><input id={DevControl_ShowInputImage_afterItemImageDetection_checkboxInputId} className='mr-5' checked={is_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChecked} onChange={handle_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChange} type={checkboxInputType} /><label htmlFor={DevControl_ShowInputImage_afterItemImageDetection_checkboxInputId}>Input Image after Item Image Detection</label></li>
            <li><input id={DevControl_ShowItemImage_checkboxInputId} className='mr-5' checked={is_DevControl_ShowItemImage_checkboxInputChecked} onChange={handle_DevControl_ShowItemImage_checkboxInputChange} type={checkboxInputType} /><label htmlFor={DevControl_ShowItemImage_checkboxInputId}>Item Image</label></li>
            <li><input id={DevControl_ShowTextImage_checkboxInputId} className='mr-5' checked={is_DevControl_ShowTextImage_checkboxInputChecked} onChange={handle_DevControl_ShowTextImage_checkboxInputChange} type={checkboxInputType} /><label htmlFor={DevControl_ShowTextImage_checkboxInputId}>Text Image</label></li>
            <li><input id={DevControl_ShowText_checkboxInputId} className='mr-5' checked={is_DevControl_ShowText_checkboxInputChecked} onChange={handle_DevControl_ShowText_checkboxInputChange} type={checkboxInputType} /><label htmlFor={DevControl_ShowText_checkboxInputId}>Text</label></li>
          </ul>
        </div>

        <div className={`${group_divClass} space-y-2 ${showIfTrue(is_AppControl_ShowDevTestInformation_checkboxInputChecked)}`}>
          <strong>Dev/Test Information</strong>

          <div>
            Environment:
            <ul className={ulClass}>
              <li>Google Chrome 120</li>
              <li>Next.js 14.0.4</li>
              <li>Node.js 20.10.0</li>
              <li>OpenCV.js 4.9.0</li>
              <li>Tesseract.js 5.0.4</li>
              <li><a className='underline' href='https://github.com/d4pi/d4pi.github.io'>Web Host</a></li>
              <li><a className='underline' href='https://github.com/d4pi/web-app'>Source Code</a></li>
            </ul>
          </div>

          <div>
            Screenshot Source:
            <ul className={ulClass}>
              <li>1080p (1920*1080)</li>
              <li>Diablo 4: GAMEPLAY: Advanced Tooltip Information: Enabled</li>
              <li>Diablo 4: GRAPHICS: Brightness: Default</li>
              <li>Diablo 4: GRAPHICS: Font Scale: Small</li>
              <li>Xbox Series X</li>
            </ul>
          </div>
        </div>

        <div className={`${group_divClass} space-y-2 ${showIfTrue(is_AppControl_ShowScreenshotProcessorControl_checkboxInputChecked)}`}>
          <strong>Screenshot Processor Control</strong>
          <ul className='space-y-2'>
            <li><input id={screenshot_processor_InputImageBrightnessThreshold_numberInputId} className={numberInputClass} max='255' min={_0String} onChange={handle_screenshot_processor_InputImageBrightnessThreshold_numberInputChange} type={numberInputType} value={screenshot_processor_InputImageBrightnessThreshold} /><label htmlFor={screenshot_processor_InputImageBrightnessThreshold_numberInputId}>{screenshot_processor_InputImageBrightnessThreshold_labelText}</label></li>
            <li><input id={screenshot_processor_ItemImageMaxWidth_numberInputId} className={numberInputClass} min={_0String} onChange={handle_screenshot_processor_ItemImageMaxWidth_numberInputChange} type={numberInputType} value={screenshot_processor_ItemImageMaxWidth} /><label htmlFor={screenshot_processor_ItemImageMaxWidth_numberInputId}>{screenshot_processor_ItemImageMaxWidth_labelText}</label></li>
            <li><input id={screenshot_processor_ItemImageMinWidth_numberInputId} className={numberInputClass} min={_0String} onChange={handle_screenshot_processor_ItemImageMinWidth_numberInputChange} type={numberInputType} value={screenshot_processor_ItemImageMinWidth} /><label htmlFor={screenshot_processor_ItemImageMinWidth_numberInputId}>{screenshot_processor_ItemImageMinWidth_labelText}</label></li>
            <li><input id={screenshot_processor_ItemPictureHeight_numberInputId} className={numberInputClass} min={_0String} onChange={handle_screenshot_processor_ItemPictureHeight_numberInputChange} type={numberInputType} value={screenshot_processor_ItemPictureHeight} /><label htmlFor={screenshot_processor_ItemPictureHeight_numberInputId}>{screenshot_processor_ItemPictureHeight_labelText}</label></li>
            <li><input id={screenshot_processor_ItemPictureWidth_numberInputId} className={numberInputClass} min={_0String} onChange={handle_screenshot_processor_ItemPictureWidth_numberInputChange} type={numberInputType} value={screenshot_processor_ItemPictureWidth} /><label htmlFor={screenshot_processor_ItemPictureWidth_numberInputId}>{screenshot_processor_ItemPictureWidth_labelText}</label></li>
            <li><input id={screenshot_processor_TextImageBorderTrimSize_numberInputId} className={numberInputClass} min={_0String} onChange={handle_screenshot_processor_TextImageBorderTrimSize_numberInputChange} type={numberInputType} value={screenshot_processor_TextImageBorderTrimSize} /><label htmlFor={screenshot_processor_TextImageBorderTrimSize_numberInputId}>{screenshot_processor_TextImageBorderTrimSize_labelText}</label></li>
            <li><input id={screenshot_processor_TextImageCornerTrimSize_numberInputId} className={numberInputClass} min={_0String} onChange={handle_screenshot_processor_TextImageCornerTrimSize_numberInputChange} type={numberInputType} value={screenshot_processor_TextImageCornerTrimSize} /><label htmlFor={screenshot_processor_TextImageCornerTrimSize_numberInputId}>{screenshot_processor_TextImageCornerTrimSize_labelText}</label></li>
          </ul>
        </div>

        <div className={`${group_divClass} ${showIfTrue(is_AppControl_ShowSettingsControl_checkboxInputChecked)}`}>
          <strong>Settings Control</strong>
        </div>

        <div className={`${group_divClass} ${showIfTrue(is_AppControl_ShowStatisticsReport_checkboxInputChecked)}`}>
          <strong>Statistics Report</strong>
          {renderStatisticsReport()}
        </div>

        <div className={`${group_divClass} ${showIfTrue(is_AppControl_ShowTutorial_checkboxInputChecked)}`}>
          <strong>Tutorial</strong>

          <p>D4pi converts Diablo 4 item screenshots to filterable data.  Everything runs locally inside your web browser.</p>

          <div className={small_group_divClass}>
            <ol className={olClass}>
              <li>
                <button className='bg-blue-700 font-bold hover:bg-blue-600 mx-2 my-1.5 px-2 py-1 rounded-lg text-neutral-200' onClick={handle_RunDemo_buttonClick} type='button'>Load Demo Screenshots</button>
                <code><a className='underline' href='/images/example-1.jpg'>1.jpg</a> <a className='underline' href='/images/example-2.jpg'>2.jpg</a> <a className='underline' href='/images/example-3.jpg'>3.jpg</a></code>
              </li>

              <li>Wait a few seconds for the screenshots to be processed.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        {
          filterables.toSorted((a, b) => (a.score - b.score) * -1).map(filterable =>
            <div key={filterable.id} className={group_divClass}>
              <div className={small_group_divClass}>
                <p><strong>{filterable.itemName}</strong></p>
                <p>{filterable.itemRarityAndType}</p>
                <p>{filterable.itemPower}</p>
              </div>

              <div className={`${small_group_divClass} divide-dotted divide-neutral-500 divide-y-2`}>
                {
                  filterable.itemAttributes.filter(itemAttribute => itemAttribute.isItemTypeBuiltIn).length > 0 ?

                    <div>
                      <ul className={ulClass}>
                        {
                          filterable.itemAttributes.filter(itemAttribute => itemAttribute.isItemTypeBuiltIn).map(itemAttribute =>
                            <li key={itemAttribute.key}>
                              {itemAttribute.text}
                            </li>
                          )
                        }
                      </ul>
                    </div>

                    : <></>
                }

                <div>
                  <ul className={ulClass}>
                    {
                      filterable.itemAttributes.filter(itemAttribute => !itemAttribute.isItemTypeBuiltIn).map(itemAttribute =>
                        <li key={itemAttribute.key}>
                          {itemAttribute.text}
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>

              <div className={`${small_group_divClass} ${showIfTrue(is_DevControl_ShowInputImage_checkboxInputChecked)}`}>
                <strong>Input Image</strong>
                <ul className={ulClass}>
                  <li>Data Last Modified Timestamp: {filterable.screenshotFileLastModifiedTimestamp}</li>
                  <li>Data Name: {filterable.screenshotFileName}</li>
                  <li>Data Size: {filterable.screenshotFileSize}</li>
                </ul>
                <div>
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img id={filterable.inputImage_imageId} className='max-w-none' alt={filterable.id} />
                  }
                </div>
              </div>

              <div className={`${small_group_divClass} ${showIfTrue(is_DevControl_ShowInputImage_afterBrightnessThreshold_checkboxInputChecked)}`}>
                <strong>Input Image after Brightness Threshold</strong>
                <ul className={ulClass}>
                  <li>{screenshot_processor_InputImageBrightnessThreshold_labelText}: {filterable.screenshot_processor_InputImageBrightnessThreshold}</li>
                </ul>
                <div>
                  <canvas id={filterable.inputImage_afterBrightnessThreshold_canvasId} />
                </div>
              </div>

              <div className={`${small_group_divClass} ${showIfTrue(is_DevControl_ShowInputImage_afterItemImageDetection_checkboxInputChecked)}`}>
                <strong>Input Image after Item Image Detection</strong>
                <ul className={ulClass}>
                  <li>{screenshot_processor_ItemImageMinWidth_labelText}: {filterable.screenshot_processor_ItemImageMinWidth}</li>
                  <li>{screenshot_processor_ItemImageMaxWidth_labelText}: {filterable.screenshot_processor_ItemImageMaxWidth}</li>
                  <div className={small_group_divClass}>
                    <p>Candidates:</p>
                    <ul className={ulClass}>
                      {
                        filterable.itemImage_data_candidates.map(candidate =>
                          <li key={`${filterable.itemImage_dataId} ${candidate.id}`}>
                            <span className={filterable.itemImage_data_winner.id === candidate.id ? 'font-bold' : ''}>{candidate.id}</span>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                </ul>
                <div>
                  <canvas id={filterable.inputImage_afterItemImageDetection_canvasId} />
                </div>
              </div>

              <div className={`${small_group_divClass} ${showIfTrue(is_DevControl_ShowItemImage_checkboxInputChecked)}`}>
                <strong>Item Image</strong>
                <div>
                  <canvas id={filterable.itemImage_canvasId} />
                </div>
              </div>

              <div className={`${small_group_divClass} ${showIfTrue(is_DevControl_ShowTextImage_checkboxInputChecked)}`}>
                <strong>Text Image</strong>
                <ul className={ulClass}>
                  <li>{screenshot_processor_ItemPictureHeight_labelText}: {filterable.screenshot_processor_ItemPictureHeight}</li>
                  <li>{screenshot_processor_ItemPictureWidth_labelText}: {filterable.screenshot_processor_ItemPictureWidth}</li>
                  <li>{screenshot_processor_TextImageBorderTrimSize_labelText}: {filterable.screenshot_processor_TextImageBorderTrimSize}</li>
                  <li>{screenshot_processor_TextImageCornerTrimSize_labelText}: {filterable.screenshot_processor_TextImageCornerTrimSize}</li>
                </ul>
                <div>
                  <canvas id={filterable.textImage_canvasId} />
                </div>
              </div>

              <div className={`${small_group_divClass} ${showIfTrue(is_DevControl_ShowText_checkboxInputChecked)}`}>
                <strong>Text</strong>
                <ul className={ulClass}>
                  <li>Confidence: {filterable.text_data_confidence}</li>
                  <li>itemType_startIndex: {filterable.itemRarityAndType_startIndex}</li>
                  <li>itemType_endIndex: {filterable.itemRarityAndType_endIndex}</li>
                  <li>itemPower_itemIndex: {filterable.itemPower_index}</li>
                </ul>
                <pre>
                  {filterable.text_data_text}
                </pre>
              </div>
            </div>
          )
        }
      </div>
    </main >
  </>;
}
