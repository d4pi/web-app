'use client';

import Filter from '@/code/Filter';
import Filterable from '@/code/Filterable';
import React from 'react';
import Script from 'next/script';
import ItemAttribute from '@/code/ItemAttribute';

// # App
const _attributeFilters = [] as Filter[];
const _filterables = [] as Filterable[];
const _nameFilters = [] as Filter[];
const _typeFilters = [] as Filter[];
let _discardedScreenshots_count = 0;

export default function Home(): React.JSX.Element {

  // # App
  const [attributeFilters, set_attributeFilters] = React.useState(_attributeFilters);
  const [discardedScreenshots_count, set_discardedScreenshots_count] = React.useState(_discardedScreenshots_count);
  const [filterables, set_filterables] = React.useState(_filterables);
  const [nameFilters, set_nameFilters] = React.useState(_nameFilters);
  const [typeFilters, set_typeFilters] = React.useState(_typeFilters);
  const defaultTimeout = 127;

  // # CSS Classes
  const group_div_class = 'border-2 border-dotted border-neutral-600 m-5 max-w-fit p-5 rounded-2xl';
  const number_input_class = 'text-black text-right w-20';
  const ol_class = 'list-decimal list-inside';
  const small_group_div_class = 'border-2 border-dotted border-neutral-600 m-2.5 max-w-fit p-5 rounded-lg';
  const ul_class = 'list-disc list-inside';

  // # Components

  // ## AppControl CheckboxInput
  const AppControl_CheckboxInput_id = 'AppControl_CheckboxInput_id';
  function handle_AppControl_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void {
    const eventTargetChecked = event.target.checked;
    set_AppControl_ShowDevControl_CheckboxInput_checked(eventTargetChecked);
    set_AppControl_ShowDevTestInformation_CheckboxInput_checked(eventTargetChecked);
    set_AppControl_ShowScreenshotProcessorControl_CheckboxInput_checked(eventTargetChecked);
    set_AppControl_ShowStatusReport_CheckboxInput_checked(eventTargetChecked);
    set_AppControl_ShowTutorial_CheckboxInput_checked(eventTargetChecked);
  }

  // ## AppControl ShowDevControl CheckboxInput
  const AppControl_ShowDevControl_CheckboxInput_defaultChecked = true;
  const AppControl_ShowDevControl_CheckboxInput_id = 'AppControl_ShowDevControl_CheckboxInput_id';
  const AppControl_ShowDevControl_CheckboxInput_labelText = 'Dev Control';
  const [AppControl_ShowDevControl_CheckboxInput_checked, set_AppControl_ShowDevControl_CheckboxInput_checked] = React.useState(AppControl_ShowDevControl_CheckboxInput_defaultChecked);
  function handle_AppControl_ShowDevControl_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_AppControl_ShowDevControl_CheckboxInput_checked(event.target.checked); }

  // ## AppControl ShowDevTestInformation CheckboxInput
  const AppControl_ShowDevTestInformation_CheckboxInput_defaultChecked = false;
  const AppControl_ShowDevTestInformation_CheckboxInput_id = 'AppControl_ShowDevTestInformation_CheckboxInput_id';
  const AppControl_ShowDevTestInformation_CheckboxInput_labelText = 'Dev/Test Information';
  const [AppControl_ShowDevTestInformation_CheckboxInput_checked, set_AppControl_ShowDevTestInformation_CheckboxInput_checked] = React.useState(AppControl_ShowDevTestInformation_CheckboxInput_defaultChecked);
  function handle_AppControl_ShowDevTestInformation_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_AppControl_ShowDevTestInformation_CheckboxInput_checked(event.target.checked); }

  // ## AppControl ShowScreenshotProcessorControl CheckboxInput
  const AppControl_ShowScreenshotProcessorControl_CheckboxInput_defaultChecked = false;
  const AppControl_ShowScreenshotProcessorControl_CheckboxInput_id = 'AppControl_ShowScreenshotProcessorControl_CheckboxInput_id';
  const AppControl_ShowScreenshotProcessorControl_CheckboxInput_labelText = 'Screenshot Processor Control';
  const [AppControl_ShowScreenshotProcessorControl_CheckboxInput_checked, set_AppControl_ShowScreenshotProcessorControl_CheckboxInput_checked] = React.useState(AppControl_ShowScreenshotProcessorControl_CheckboxInput_defaultChecked);
  function handle_AppControl_ShowScreenshotProcessorControl_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_AppControl_ShowScreenshotProcessorControl_CheckboxInput_checked(event.target.checked); }

  // ## AppControl ShowStatusReport CheckboxInput
  const AppControl_ShowStatusReport_CheckboxInput_defaultChecked = false;
  const AppControl_ShowStatusReport_CheckboxInput_id = 'AppControl_ShowStatusReport_CheckboxInput_id';
  const AppControl_ShowStatusReport_CheckboxInput_labelText = 'Status Report';
  const [AppControl_ShowStatusReport_CheckboxInput_checked, set_AppControl_ShowStatusReport_CheckboxInput_checked] = React.useState(AppControl_ShowStatusReport_CheckboxInput_defaultChecked);
  function handle_AppControl_ShowStatisticsReport_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_AppControl_ShowStatusReport_CheckboxInput_checked(event.target.checked); }

  // ## AppControl ShowTutorial CheckboxInput
  const AppControl_ShowTutorial_CheckboxInput_defaultChecked = true;
  const AppControl_ShowTutorial_CheckboxInput_id = 'AppControl_ShowTutorial_CheckboxInput_id';
  const AppControl_ShowTutorial_CheckboxInput_labelText = 'Tutorial';
  const [AppControl_ShowTutorial_CheckboxInput_checked, set_AppControl_ShowTutorial_CheckboxInput_checked] = React.useState(AppControl_ShowTutorial_CheckboxInput_defaultChecked);
  function handle_AppControl_ShowTutorial_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_AppControl_ShowTutorial_CheckboxInput_checked(event.target.checked); }

  // ## DevControl CheckboxInput
  const DevControl_CheckboxInput_id = 'DevControl_CheckboxInput_id';
  function handle_DevControl_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void {
    const eventTargetChecked = event.target.checked;
    set_DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_checked(eventTargetChecked);
    set_DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_checked(eventTargetChecked);
    set_DevControl_ShowInputImage_CheckboxInput_checked(eventTargetChecked);
    set_DevControl_ShowItemImage_CheckboxInput_checked(eventTargetChecked);
    set_DevControl_ShowText_CheckboxInput_checked(eventTargetChecked);
    set_DevControl_ShowTextImage_CheckboxInput_checked(eventTargetChecked);
  }

  // ## DevControl ShowInputImage_afterBrightnessThreshold CheckboxInput
  const DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_defaultChecked = false;
  const DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_id = 'DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_id';
  const DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_labelText = 'Input Image after Brightness Threshold';
  const [DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_checked, set_DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_checked] = React.useState(DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_defaultChecked);
  function handle_DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_checked(event.target.checked); }

  // ## DevControl ShowInputImage_afterItemImageDetection CheckboxInput
  const DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_defaultChecked = false;
  const DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_id = 'DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_id';
  const DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_labelText = 'Input Image after Item Image Detection';
  const [DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_checked, set_DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_checked] = React.useState(DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_defaultChecked);
  function handle_DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_checked(event.target.checked); }

  // ## DevControl ShowInputImage CheckboxInput
  const DevControl_ShowInputImage_CheckboxInput_defaultChecked = false;
  const DevControl_ShowInputImage_CheckboxInput_id = 'DevControl_ShowInputImage_CheckboxInput_id';
  const DevControl_ShowInputImage_CheckboxInput_labelText = 'Input Image';
  const [DevControl_ShowInputImage_CheckboxInput_checked, set_DevControl_ShowInputImage_CheckboxInput_checked] = React.useState(DevControl_ShowInputImage_CheckboxInput_defaultChecked);
  function handle_DevControl_ShowInputImage_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_DevControl_ShowInputImage_CheckboxInput_checked(event.target.checked); }

  // ## DevControl ShowItemImage CheckboxInput
  const DevControl_ShowItemImage_CheckboxInput_defaultChecked = true;
  const DevControl_ShowItemImage_CheckboxInput_id = 'DevControl_ShowItemImage_CheckboxInput_id';
  const DevControl_ShowItemImage_CheckboxInput_labelText = 'Item Image';
  const [DevControl_ShowItemImage_CheckboxInput_checked, set_DevControl_ShowItemImage_CheckboxInput_checked] = React.useState(DevControl_ShowItemImage_CheckboxInput_defaultChecked);
  function handle_DevControl_ShowItemImage_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_DevControl_ShowItemImage_CheckboxInput_checked(event.target.checked); }

  // ## DevControl ShowText CheckboxInput
  const DevControl_ShowText_CheckboxInput_defaultChecked = false;
  const DevControl_ShowText_CheckboxInput_id = 'DevControl_ShowText_CheckboxInput_id';
  const DevControl_ShowText_CheckboxInput_labelText = 'Text';
  const [DevControl_ShowText_CheckboxInput_checked, set_DevControl_ShowText_CheckboxInput_checked] = React.useState(DevControl_ShowText_CheckboxInput_defaultChecked);
  function handle_DevControl_ShowText_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_DevControl_ShowText_CheckboxInput_checked(event.target.checked); }

  // ## DevControl ShowTextImage CheckboxInput
  const DevControl_ShowTextImage_CheckboxInput_defaultChecked = false;
  const DevControl_ShowTextImage_CheckboxInput_id = 'DevControl_ShowTextImage_CheckboxInput_id';
  const DevControl_ShowTextImage_CheckboxInput_labelText = 'Text Image';
  const [DevControl_ShowTextImage_CheckboxInput_checked, set_DevControl_ShowTextImage_CheckboxInput_checked] = React.useState(DevControl_ShowTextImage_CheckboxInput_defaultChecked);
  function handle_DevControl_ShowTextImage_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void { set_DevControl_ShowTextImage_CheckboxInput_checked(event.target.checked); }

  // ## Filters Attribute
  const Filters_Attribute_MinValue_NumberInput_id = 'Filters_Attribute_MinValue_NumberInput_id';
  const Filters_Attribute_Options_TextInput_id = 'Filters_Attribute_Options_TextInput_id';
  const Filters_Attribute_Pattern_TextInput_id = 'Filters_Attribute_Pattern_TextInput_id';
  const Filters_Attribute_Score_NumberInput_id = 'Filters_Attribute_Score_NumberInput_id';
  function handle_Filters_Attribute_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const pattern = getInputValue(Filters_Attribute_Pattern_TextInput_id);
    if (pattern !== '') {
      const newFilter = new Filter(
        getNumberInputValue(Filters_Attribute_MinValue_NumberInput_id),
        new RegExp(
          pattern,
          getInputValue(Filters_Attribute_Options_TextInput_id)
        ),
        getNumberInputValue(Filters_Attribute_Score_NumberInput_id)
      );
      if (_attributeFilters.every(filter => filter.key !== newFilter.key)) {
        _attributeFilters.push(newFilter);
        set_attributeFilters([..._attributeFilters]);
        applyFilters_and_setFilterables();
      }
    }
  }

  // ## Filters Name
  const Filters_Name_Options_TextInput_id = 'Filters_Name_Options_TextInput_id';
  const Filters_Name_Pattern_TextInput_id = 'Filters_Name_Pattern_TextInput_id';
  const Filters_Name_Score_NumberInput_id = 'Filters_Name_Score_NumberInput_id';
  function handle_Filters_Name_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const pattern = getInputValue(Filters_Name_Pattern_TextInput_id);
    if (pattern !== '') {
      const newFilter = new Filter(
        0,
        new RegExp(
          pattern,
          getInputValue(Filters_Name_Options_TextInput_id)
        ),
        getNumberInputValue(Filters_Name_Score_NumberInput_id)
      );
      if (_nameFilters.every(filter => filter.key !== newFilter.key)) {
        _nameFilters.push(newFilter);
        set_nameFilters([..._nameFilters]);
        applyFilters_and_setFilterables();
      }
    }
  }

  // ## Filters Type
  const Filters_Type_Options_TextInput_id = 'Filters_Type_Options_TextInput_id';
  const Filters_Type_Pattern_TextInput_id = 'Filters_Type_Pattern_TextInput_id';
  const Filters_Type_Score_NumberInput_id = 'Filters_Type_Score_NumberInput_id';
  function handle_Filters_Type_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const pattern = getInputValue(Filters_Type_Pattern_TextInput_id);
    if (pattern !== '') {
      const newFilter = new Filter(
        0,
        new RegExp(
          pattern,
          getInputValue(Filters_Type_Options_TextInput_id)
        ),
        getNumberInputValue(Filters_Type_Score_NumberInput_id)
      );
      if (_typeFilters.every(filter => filter.key !== newFilter.key)) {
        _typeFilters.push(newFilter);
        set_typeFilters([..._typeFilters]);
        applyFilters_and_setFilterables();
      }
    }
  }

  // ## Screenshots Load FileInput
  const Screenshots_Load_FileInput_id = 'Screenshots_Load_FileInput_id';
  function handle_Screenshots_Load_FileInput_change(event: React.ChangeEvent<HTMLInputElement>): void {
    const screenshotFileList = event.target.files!;
    waitForAppInitialization_then_processScreenshotFileList();

    function waitForAppInitialization_then_processScreenshotFileList(): void {
      if (isAppInitialized()) {
        processScreenshotFileList();
      } else {
        setTimeout(() => waitForAppInitialization_then_processScreenshotFileList(), defaultTimeout);
      }

      function processScreenshotFileList(): void {
        const screenshotFiles = Array.from(screenshotFileList);
        screenshotFiles.forEach(screenshotFile => {
          const newFilterable = new Filterable(
            getNumberInputValue(ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_id),
            getNumberInputValue(ScreenshotProcessor_ItemImageMaxWidth_NumberInput_id),
            getNumberInputValue(ScreenshotProcessor_ItemImageMinWidth_NumberInput_id),
            getNumberInputValue(ScreenshotProcessor_ItemPictureHeight_NumberInput_id),
            getNumberInputValue(ScreenshotProcessor_ItemPictureWidth_NumberInput_id),
            getNumberInputValue(ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_id),
            getNumberInputValue(ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_id),
            screenshotFile.lastModified,
            screenshotFile.name,
            screenshotFile.size
          );
          if (_filterables.some(filterable => filterable.key === newFilterable.key)) {
            ++_discardedScreenshots_count;
            set_discardedScreenshots_count(_discardedScreenshots_count);
          } else {
            _filterables.push(newFilterable);
            set_filterables([..._filterables]);
            const screenshotFileReader = new FileReader();
            screenshotFileReader.onload = () => {
              const screenshotDataUrl = screenshotFileReader.result as string;
              waitForFilterablesRendering_then_initializeFilterableInputImage(newFilterable, screenshotDataUrl);
            };
            screenshotFileReader.readAsDataURL(screenshotFile);
          }
        });
      }
    }
  }

  // ## Screenshots LoadDemo Button
  function handle_Screenshots_LoadDemo_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    waitForAppInitialization_then_processDemoScreenshot(1704654020, 'Demo Screenshot 1', 693354, '/images/demo-screenshot-1.jpg');
    waitForAppInitialization_then_processDemoScreenshot(1704654020, 'Demo Screenshot 2', 640421, '/images/demo-screenshot-2.jpg');
    waitForAppInitialization_then_processDemoScreenshot(1704654020, 'Demo Screenshot 3', 621025, '/images/demo-screenshot-3.jpg');
    waitForAppInitialization_then_processDemoScreenshot(1704654020, 'Demo Screenshot 4', 612918, '/images/demo-screenshot-4.jpg');
    waitForAppInitialization_then_processDemoScreenshot(1704654020, 'Demo Screenshot 5', 643168, '/images/demo-screenshot-5.jpg');
  }

  function waitForAppInitialization_then_processDemoScreenshot(demoScreenshot_lastModified_timestamp: number, demoScreenshot_name: string, demoScreenshot_size: number, demoScreenshot_url: string): void {
    if (isAppInitialized()) {
      processDemoScreenshot();
    } else {
      setTimeout(() => waitForAppInitialization_then_processDemoScreenshot(demoScreenshot_lastModified_timestamp, demoScreenshot_name, demoScreenshot_size, demoScreenshot_url), defaultTimeout);
    }

    function processDemoScreenshot(): void {
      const newFilterable = new Filterable(
        getNumberInputValue(ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_id),
        getNumberInputValue(ScreenshotProcessor_ItemImageMaxWidth_NumberInput_id),
        getNumberInputValue(ScreenshotProcessor_ItemImageMinWidth_NumberInput_id),
        getNumberInputValue(ScreenshotProcessor_ItemPictureHeight_NumberInput_id),
        getNumberInputValue(ScreenshotProcessor_ItemPictureWidth_NumberInput_id),
        getNumberInputValue(ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_id),
        getNumberInputValue(ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_id),
        demoScreenshot_lastModified_timestamp,
        demoScreenshot_name,
        demoScreenshot_size
      );
      if (_filterables.some(filterable => filterable.key === newFilterable.key)) {
        ++_discardedScreenshots_count;
        set_discardedScreenshots_count(_discardedScreenshots_count);
      } else {
        _filterables.push(newFilterable);
        set_filterables([..._filterables]);
        waitForFilterablesRendering_then_initializeFilterableInputImage(newFilterable, demoScreenshot_url);
      }
    }
  }

  // ## ScreenshotProcessor InputImageBrightnessThreshold NumberInput
  const ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_defaultValue = 25;
  const ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_id = 'ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_id';
  const ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_labelText = 'Input Image Brightness Threshold';

  // ## ScreenshotProcessor ItemImageMaxWidth NumberInput
  const ScreenshotProcessor_ItemImageMaxWidth_NumberInput_defaultValue = 410;
  const ScreenshotProcessor_ItemImageMaxWidth_NumberInput_id = 'ScreenshotProcessor_ItemImageMaxWidth_NumberInput_id';
  const ScreenshotProcessor_ItemImageMaxWidth_NumberInput_labelText = 'Item Image Max Width';

  // ## ScreenshotProcessor ItemImageMinWidth NumberInput
  const ScreenshotProcessor_ItemImageMinWidth_NumberInput_defaultValue = 340;
  const ScreenshotProcessor_ItemImageMinWidth_NumberInput_id = 'ScreenshotProcessor_ItemImageMinWidth_NumberInput_id';
  const ScreenshotProcessor_ItemImageMinWidth_NumberInput_labelText = 'Item Image Min Width';

  // ## ScreenshotProcessor ItemPictureHeight NumberInput
  const ScreenshotProcessor_ItemPictureHeight_NumberInput_defaultValue = 128;
  const ScreenshotProcessor_ItemPictureHeight_NumberInput_id = 'ScreenshotProcessor_ItemPictureHeight_NumberInput_id';
  const ScreenshotProcessor_ItemPictureHeight_NumberInput_labelText = 'Item Picture Height';

  // ## ScreenshotProcessor ItemPictureWidth NumberInput
  const ScreenshotProcessor_ItemPictureWidth_NumberInput_defaultValue = 128;
  const ScreenshotProcessor_ItemPictureWidth_NumberInput_id = 'ScreenshotProcessor_ItemPictureWidth_NumberInput_id';
  const ScreenshotProcessor_ItemPictureWidth_NumberInput_labelText = 'Item Picture Width';

  // ## ScreenshotProcessor TextImageBorderTrimSize NumberInput
  const ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_defaultValue = 32;
  const ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_id = 'ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_id';
  const ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_labelText = 'Text Image Border Trim Size';

  // ## ScreenshotProcessor TextImageCornerTrimSize NumberInput
  const ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_defaultValue = 25;
  const ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_id = 'ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_id';
  const ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_labelText = 'Text Image Corner Trim Size';

  // ## StatusReport
  function StatusReport(): React.JSX.Element {
    const card_div_class = 'border-2 border-dotted border-neutral-500 m-2.5 p-2.5 rounded-lg';

    const processingFilterables = filterables.filter(filterable => !filterable.isProcessed);
    const processingFilterables_Image = processingFilterables.filter(filterable => filterable.isProcessing_Image);
    const processingFilterables_Text = processingFilterables.filter(filterable => filterable.isProcessing_Text);

    const processedFilterables = filterables.filter(screenshot => screenshot.isProcessed);
    const averageTime = processedFilterables.length > 0 ? Math.round(processedFilterables.reduce((totalTime, processedFilterable) => totalTime + processedFilterable.processTime, 0) / processedFilterables.length) / 1000 : 'N/A';
    const averageTime_Image = processedFilterables.length > 0 ? Math.round(processedFilterables.reduce((totalTime, processedFilterable) => totalTime + processedFilterable.processTime_Image, 0) / processedFilterables.length) / 1000 : 'N/A';
    const averageTime_Text = processedFilterables.length > 0 ? Math.round(processedFilterables.reduce((totalTime, processedFilterable) => totalTime + processedFilterable.processTime_Text, 0) / processedFilterables.length) / 1000 : 'N/A';
    const lowConfidence = processedFilterables.filter(filterable => filterable.itemImage_data_candidates.length === 0);

    return <>
      <div className={card_div_class}>
        Total <code>{filterables.length}</code>

        <div className='flex flex-wrap'>
          <div className={`${card_div_class} ${processingFilterables.length > 0 ? 'border-yellow-500' : ''}`}>
            <span className={`${processingFilterables.length > 0 ? 'text-yellow-500' : ''}`}>Processing <code>{processingFilterables.length}</code></span>

            <div className={`${card_div_class} ${processingFilterables_Image.length > 0 ? 'border-yellow-500' : ''}`}>
              <span className={`${processingFilterables_Image.length > 0 ? 'text-yellow-500' : ''}`}>Image <code>{processingFilterables_Image.length}</code></span>
            </div>

            <div className={`${card_div_class} ${processingFilterables_Text.length > 0 ? 'border-yellow-500' : ''}`}>
              <span className={`${processingFilterables_Text.length > 0 ? 'text-yellow-500' : ''}`}>Text <code>{processingFilterables_Text.length}</code></span>
            </div>
          </div>

          <div className={card_div_class}>
            Processed <code>{processedFilterables.length}</code>

            <div className={card_div_class}>
              Average Time <code>{averageTime}</code> s

              <div className={card_div_class}>
                Image <code>{averageTime_Image}</code> s
              </div>

              <div className={card_div_class}>
                Text <code>{averageTime_Text}</code> s
              </div>
            </div>

            <div className={`${card_div_class} ${lowConfidence.length > 0 ? 'border-yellow-500' : ''}`}>
              <span className={`${lowConfidence.length > 0 ? 'text-yellow-500' : ''}`}>Low Confidence <code>{lowConfidence.length}</code></span>
            </div>
          </div>
        </div>
      </div >

      <div className={`${card_div_class} ${discardedScreenshots_count > 0 ? 'border-yellow-500' : ''}`}>
        <span className={`${discardedScreenshots_count > 0 ? 'text-yellow-500' : ''}`}>Discarded <code>{discardedScreenshots_count}</code></span>
      </div>
    </>;
  }

  // # Utilities

  function applyFilters_and_setFilterables(): void {
    _filterables.forEach(filterable => {
      filterable.score = 0;
      _nameFilters.forEach(filter => {
        if (filter.regexp.test(filterable.itemName)) {
          filterable.score += filter.score;
        }
      });
      _typeFilters.forEach(filter => {
        if (filter.regexp.test(filterable.itemType)) {
          filterable.score += filter.score;
        }
      });
      filterable.itemAttributes.filter(itemAttribute => !itemAttribute.isItemTypeBuiltIn).forEach(itemAttribute => {
        _attributeFilters.forEach(filter => {
          if (filter.regexp.test(itemAttribute.text) && filter.minValue <= itemAttribute.value) {
            filterable.score += filter.score;
          }
        });
      });
    });
    set_filterables([..._filterables]);
  }

  function getHtmlElement<T extends HTMLElement>(htmlElement_id: string) { return document.getElementById(htmlElement_id) as T; }

  function getInputValue(numberInput_id: string): string { return getHtmlElement<HTMLInputElement>(numberInput_id).value; }

  function getNumberInputValue(numberInput_id: string): number { return Number(getInputValue(numberInput_id)); }

  function isAppInitialized(): boolean { return _isCodeLoaded && _isOpencvRuntimeInitialized; }

  function showIfTrue(b: boolean): string { return b ? '' : 'hidden'; }

  function waitForFilterablesRendering_then_initializeFilterableInputImage(filterable: Filterable, filterableInputImageUrl: string): void {
    if (isFilterablesRendered()) {
      initializeFilterableInputImage();
    } else {
      setTimeout(() => waitForFilterablesRendering_then_initializeFilterableInputImage(filterable, filterableInputImageUrl), defaultTimeout);
    }

    function isFilterablesRendered(): boolean {
      return (
        htmlElementExists(filterable.inputImage_afterBrightnessThreshold_canvas_id)
        && htmlElementExists(filterable.inputImage_afterItemImageDetection_canvas_id)
        && htmlElementExists(filterable.inputImage_image_id)
        && htmlElementExists(filterable.itemImage_canvas_id)
        && htmlElementExists(filterable.textImage_canvas_id)
      );

      function htmlElementExists(htmlElement_id: string): boolean { return getHtmlElement(htmlElement_id) !== null; }
    }

    function initializeFilterableInputImage(): void {
      getHtmlElement<HTMLImageElement>(filterable.inputImage_image_id).src = filterableInputImageUrl;
      waitForFilterableInputImageInitialization_then_processFilterableInputImage();

      function waitForFilterableInputImageInitialization_then_processFilterableInputImage(): void {
        if (isFilterableInputImageInitialized()) {
          processFilterableInputImage();
        } else {
          setTimeout(() => waitForFilterableInputImageInitialization_then_processFilterableInputImage(), defaultTimeout);
        }

        function isFilterableInputImageInitialized(): boolean { return getHtmlElement<HTMLImageElement>(filterable.inputImage_image_id).width !== 0; }

        function processFilterableInputImage(): void {
          filterable.start_Processing_Image();
          _fromInputImage_toTextImage(
            filterable.inputImage_afterBrightnessThreshold_canvas_id,
            filterable.inputImage_afterItemImageDetection_canvas_id,
            getHtmlElement<HTMLImageElement>(filterable.inputImage_image_id),
            filterable.itemImage_canvas_id,
            filterable.itemImage_data_id,
            filterable.textImage_canvas_id,
            filterable.screenshot_processor_InputImageBrightnessThreshold,
            filterable.screenshot_processor_ItemImageMaxWidth,
            filterable.screenshot_processor_ItemImageMinWidth,
            filterable.screenshot_processor_ItemPictureHeight,
            filterable.screenshot_processor_ItemPictureWidth,
            filterable.screenshot_processor_TextImageBorderTrimSize,
            filterable.screenshot_processor_TextImageCornerTrimSize
          );
          filterable.end_Processing_Image();
          set_filterables([..._filterables]);

          filterable.start_Processing_Text();
          _fromImage_toText(
            filterable.text_dataId,
            getHtmlElement<HTMLCanvasElement>(filterable.textImage_canvas_id)
          );
          waitForFilterableTextDataInitialization_then_processFilterableTextData();

          function waitForFilterableTextDataInitialization_then_processFilterableTextData(): void {
            if (isFilterableTextDataInitialized()) {
              processFilterableTextData();
            } else {
              setTimeout(() => waitForFilterableTextDataInitialization_then_processFilterableTextData(), defaultTimeout);
            }

            function isFilterableTextDataInitialized(): boolean { return filterable.text_data_exists; }

            function processFilterableTextData(): void {
              filterable.end_Processing_Text();
              filterable.processTextData();
              applyFilters_and_setFilterables
            }
          }
        }
      }
    }
  }

  return <>
    <Script src='/code/isOpencvRuntimeInitialized.js' strategy='beforeInteractive' />
    <Script src='https://docs.opencv.org/4.9.0/opencv.js' strategy='beforeInteractive' />
    <Script src='https://cdn.jsdelivr.net/npm/tesseract.js@5.0.4/dist/tesseract.min.js' strategy='beforeInteractive' />
    <Script src='/code/fromImage_toText.js' strategy='beforeInteractive' />
    <Script src='/code/fromInputImage_toTextImage.js' strategy='beforeInteractive' />
    <Script src='/code/isCodeLoaded.js' strategy='beforeInteractive' />

    <main>
      <div className='flex flex-wrap'>
        <div className={group_div_class}>
          <ul className='space-y-2'>
            <li>
              <input id={AppControl_CheckboxInput_id} className='mr-5' defaultChecked={false} onChange={handle_AppControl_CheckboxInput_change} type='checkbox' />
              <label htmlFor={AppControl_CheckboxInput_id}><strong>App Control</strong></label>
            </li>

            <li>
              <input id={AppControl_ShowDevControl_CheckboxInput_id} className='mr-5' checked={AppControl_ShowDevControl_CheckboxInput_checked} onChange={handle_AppControl_ShowDevControl_CheckboxInput_change} type='checkbox' />
              <label htmlFor={AppControl_ShowDevControl_CheckboxInput_id}>{AppControl_ShowDevControl_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={AppControl_ShowDevTestInformation_CheckboxInput_id} className='mr-5' checked={AppControl_ShowDevTestInformation_CheckboxInput_checked} onChange={handle_AppControl_ShowDevTestInformation_CheckboxInput_change} type='checkbox' />
              <label htmlFor={AppControl_ShowDevTestInformation_CheckboxInput_id}>{AppControl_ShowDevTestInformation_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={AppControl_ShowScreenshotProcessorControl_CheckboxInput_id} className='mr-5' checked={AppControl_ShowScreenshotProcessorControl_CheckboxInput_checked} onChange={handle_AppControl_ShowScreenshotProcessorControl_CheckboxInput_change} type='checkbox' />
              <label htmlFor={AppControl_ShowScreenshotProcessorControl_CheckboxInput_id}>{AppControl_ShowScreenshotProcessorControl_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={AppControl_ShowStatusReport_CheckboxInput_id} className='mr-5' checked={AppControl_ShowStatusReport_CheckboxInput_checked} onChange={handle_AppControl_ShowStatisticsReport_CheckboxInput_change} type='checkbox' />
              <label htmlFor={AppControl_ShowStatusReport_CheckboxInput_id}>{AppControl_ShowStatusReport_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={AppControl_ShowTutorial_CheckboxInput_id} className='mr-5' checked={AppControl_ShowTutorial_CheckboxInput_checked} onChange={handle_AppControl_ShowTutorial_CheckboxInput_change} type='checkbox' />
              <label htmlFor={AppControl_ShowTutorial_CheckboxInput_id}>{AppControl_ShowTutorial_CheckboxInput_labelText}</label>
            </li>
          </ul>
        </div>

        <div className={`${group_div_class} ${showIfTrue(AppControl_ShowDevControl_CheckboxInput_checked)}`}>
          <ul className='space-y-2'>
            <li>
              <input id={DevControl_CheckboxInput_id} className='mr-5' defaultChecked={false} onChange={handle_DevControl_CheckboxInput_change} type='checkbox' />
              <label htmlFor={DevControl_CheckboxInput_id}><strong>{AppControl_ShowDevControl_CheckboxInput_labelText}</strong></label>
            </li>

            <li>
              <input id={DevControl_ShowInputImage_CheckboxInput_id} className='mr-5' checked={DevControl_ShowInputImage_CheckboxInput_checked} onChange={handle_DevControl_ShowInputImage_CheckboxInput_change} type='checkbox' />
              <label htmlFor={DevControl_ShowInputImage_CheckboxInput_id}>{DevControl_ShowInputImage_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_id} className='mr-5' checked={DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_checked} onChange={handle_DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_change} type='checkbox' />
              <label htmlFor={DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_id}>{DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_id} className='mr-5' checked={DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_checked} onChange={handle_DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_change} type='checkbox' />
              <label htmlFor={DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_id}>{DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={DevControl_ShowItemImage_CheckboxInput_id} className='mr-5' checked={DevControl_ShowItemImage_CheckboxInput_checked} onChange={handle_DevControl_ShowItemImage_CheckboxInput_change} type='checkbox' />
              <label htmlFor={DevControl_ShowItemImage_CheckboxInput_id}>{DevControl_ShowItemImage_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={DevControl_ShowTextImage_CheckboxInput_id} className='mr-5' checked={DevControl_ShowTextImage_CheckboxInput_checked} onChange={handle_DevControl_ShowTextImage_CheckboxInput_change} type='checkbox' />
              <label htmlFor={DevControl_ShowTextImage_CheckboxInput_id}>{DevControl_ShowTextImage_CheckboxInput_labelText}</label>
            </li>

            <li>
              <input id={DevControl_ShowText_CheckboxInput_id} className='mr-5' checked={DevControl_ShowText_CheckboxInput_checked} onChange={handle_DevControl_ShowText_CheckboxInput_change} type='checkbox' />
              <label htmlFor={DevControl_ShowText_CheckboxInput_id}>{DevControl_ShowText_CheckboxInput_labelText}</label>
            </li>
          </ul>
        </div>

        <div className={`${group_div_class} space-y-2 ${showIfTrue(AppControl_ShowDevTestInformation_CheckboxInput_checked)}`}>
          <strong>{AppControl_ShowDevTestInformation_CheckboxInput_labelText}</strong>

          <div>
            Environment:
            <ul className={ul_class}>
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
            <ul className={ul_class}>
              <li>1080p (1920*1080)</li>
              <li>Diablo 4: GAMEPLAY: Advanced Tooltip Information: Enabled</li>
              <li>Diablo 4: GRAPHICS: Brightness: Default</li>
              <li>Diablo 4: GRAPHICS: Font Scale: Small</li>
              <li>Xbox Series X</li>
            </ul>
          </div>
        </div>

        <div className={`${group_div_class} space-y-2 ${showIfTrue(AppControl_ShowScreenshotProcessorControl_CheckboxInput_checked)}`}>
          <strong>{AppControl_ShowScreenshotProcessorControl_CheckboxInput_labelText}</strong>

          <ul className='space-y-2'>
            <li>
              <input id={ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_defaultValue} max='255' min='0' type='number' />
              <label htmlFor={ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_id}>{ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_labelText}</label>
            </li>

            <li>
              <input id={ScreenshotProcessor_ItemImageMaxWidth_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ScreenshotProcessor_ItemImageMaxWidth_NumberInput_defaultValue} min='0' type='number' />
              <label htmlFor={ScreenshotProcessor_ItemImageMaxWidth_NumberInput_id}>{ScreenshotProcessor_ItemImageMaxWidth_NumberInput_labelText}</label>
            </li>

            <li>
              <input id={ScreenshotProcessor_ItemImageMinWidth_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ScreenshotProcessor_ItemImageMinWidth_NumberInput_defaultValue} min='0' type='number' />
              <label htmlFor={ScreenshotProcessor_ItemImageMinWidth_NumberInput_id}>{ScreenshotProcessor_ItemImageMinWidth_NumberInput_labelText}</label>
            </li>

            <li>
              <input id={ScreenshotProcessor_ItemPictureHeight_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ScreenshotProcessor_ItemPictureHeight_NumberInput_defaultValue} min='0' type='number' />
              <label htmlFor={ScreenshotProcessor_ItemPictureHeight_NumberInput_id}>{ScreenshotProcessor_ItemPictureHeight_NumberInput_labelText}</label>
            </li>

            <li>
              <input id={ScreenshotProcessor_ItemPictureWidth_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ScreenshotProcessor_ItemPictureWidth_NumberInput_defaultValue} min='0' type='number' />
              <label htmlFor={ScreenshotProcessor_ItemPictureWidth_NumberInput_id}>{ScreenshotProcessor_ItemPictureWidth_NumberInput_labelText}</label>
            </li>

            <li>
              <input id={ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_defaultValue} min='0' type='number' />
              <label htmlFor={ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_id}>{ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_labelText}</label>
            </li>

            <li>
              <input id={ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_defaultValue} min='0' type='number' />
              <label htmlFor={ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_id}>{ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_labelText}</label>
            </li>
          </ul>
        </div>

        <div className={`${group_div_class} ${showIfTrue(AppControl_ShowStatusReport_CheckboxInput_checked)}`}>
          <strong>{AppControl_ShowStatusReport_CheckboxInput_labelText}</strong>

          {StatusReport()}
        </div>

        <div className={`${group_div_class} ${showIfTrue(AppControl_ShowTutorial_CheckboxInput_checked)}`}>
          <strong>{AppControl_ShowTutorial_CheckboxInput_labelText}</strong>

          <p>D4pi turns screenshots into searchable & filterable items.  Everything runs locally inside your web browser.</p>

          <div className={small_group_div_class}>
            <ol className={ol_class}>
              <li>
                <button className='bg-blue-700 font-bold hover:bg-blue-600 mx-2 my-1.5 px-2 py-1 rounded-lg text-neutral-200' onClick={handle_Screenshots_LoadDemo_button_click}>Load Demo Screenshots</button>
                <code><a className='underline' href='/images/demo-screenshot-1.jpg'>1.jpg</a> <a className='underline' href='/images/demo-screenshot-2.jpg'>2.jpg</a> <a className='underline' href='/images/demo-screenshot-3.jpg'>3.jpg</a> <a className='underline' href='/images/demo-screenshot-4.jpg'>4.jpg</a> <a className='underline' href='/images/demo-screenshot-5.jpg'>5.jpg</a></code>
              </li>

              <li>Wait a few seconds for the screenshots to be processed.</li>

              <li> --- --- </li>
            </ol>
          </div>
        </div>
      </div>

      <div className={group_div_class}>
        <div className={small_group_div_class}>
          <label htmlFor={Screenshots_Load_FileInput_id}><strong>Load Screenshots from Disk</strong></label>
          <input id={Screenshots_Load_FileInput_id} className='bg-neutral-700 ml-5' accept='image/*' multiple onChange={handle_Screenshots_Load_FileInput_change} type='file' />
        </div>

        <div className={small_group_div_class}>
          <strong>Filter by Name</strong>
          <div className={`${small_group_div_class} flex flex-wrap`}>
            <div className='mr-2.5'>
              <label htmlFor={Filters_Name_Pattern_TextInput_id}>Pattern</label>
              <br />
              <input id={Filters_Name_Pattern_TextInput_id} className='px-2 text-black' type='text' />
            </div>

            <div className='mx-2.5'>
              <label htmlFor={Filters_Name_Options_TextInput_id}>Options</label>
              <br />
              <input id={Filters_Name_Options_TextInput_id} className='px-2 text-black' defaultValue='i' size={5} type='text' />
            </div>

            <div className='mx-2.5'>
              <label htmlFor={Filters_Name_Score_NumberInput_id}>Score</label>
              <br />
              <input id={Filters_Name_Score_NumberInput_id} className={number_input_class} defaultValue='0' type='number' />
            </div>

            <div className='ml-2.5'>
              <button className='bg-blue-700 font-bold hover:bg-blue-600 px-2 py-1 rounded-lg text-neutral-200' onClick={handle_Filters_Name_AddFilter_button_click} type='button'>Add Filter</button>
            </div>
          </div>

          <div className={small_group_div_class}>
            <table className='border-collapse border table-auto'>
              <thead>
                <tr>
                  <th className='px-10'>RegExp</th>
                  <th className='px-10'>Score</th>
                </tr>
              </thead>
              <tbody>
                {
                  nameFilters.map(filter =>
                    <tr key={filter.key}>
                      <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.regexp.toString()}</code></td>
                      <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>

        <div className={small_group_div_class}>
          <strong>Filter by Type</strong>
          <div className={`${small_group_div_class} flex flex-wrap`}>
            <div className='mr-2.5'>
              <label htmlFor={Filters_Type_Pattern_TextInput_id}>Pattern</label>
              <br />
              <input id={Filters_Type_Pattern_TextInput_id} className='px-2 text-black' type='text' />
            </div>

            <div className='mx-2.5'>
              <label htmlFor={Filters_Type_Options_TextInput_id}>Options</label>
              <br />
              <input id={Filters_Type_Options_TextInput_id} className='px-2 text-black' defaultValue='i' size={5} type='text' />
            </div>

            <div className='mx-2.5'>
              <label htmlFor={Filters_Type_Score_NumberInput_id}>Score</label>
              <br />
              <input id={Filters_Type_Score_NumberInput_id} className={number_input_class} defaultValue='0' type='number' />
            </div>

            <div className='ml-2.5'>
              <button className='bg-blue-700 font-bold hover:bg-blue-600 px-2 py-1 rounded-lg text-neutral-200' onClick={handle_Filters_Type_AddFilter_button_click} type='button'>Add Filter</button>
            </div>
          </div>

          <div className={small_group_div_class}>
            <table className='border-collapse border table-auto'>
              <thead>
                <tr>
                  <th className='px-10'>RegExp</th>
                  <th className='px-10'>Score</th>
                </tr>
              </thead>
              <tbody>
                {
                  typeFilters.map(filter =>
                    <tr key={filter.key}>
                      <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.regexp.toString()}</code></td>
                      <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>

        <div className={small_group_div_class}>
          <strong>Filter by Attribute</strong>
          <div className={`${small_group_div_class} flex flex-wrap`}>
            <div className='mr-2.5'>
              <label htmlFor={Filters_Attribute_Pattern_TextInput_id}>Pattern</label>
              <br />
              <input id={Filters_Attribute_Pattern_TextInput_id} className='px-2 text-black' type='text' />
            </div>

            <div className='mx-2.5'>
              <label htmlFor={Filters_Attribute_Options_TextInput_id}>Options</label>
              <br />
              <input id={Filters_Attribute_Options_TextInput_id} className='px-2 text-black' defaultValue='i' size={5} type='text' />
            </div>

            <div className='mx-2.5'>
              <label htmlFor={Filters_Attribute_MinValue_NumberInput_id}>MinValue</label>
              <br />
              <input id={Filters_Attribute_MinValue_NumberInput_id} className={number_input_class} defaultValue='0' type='number' />
            </div>

            <div className='mx-2.5'>
              <label htmlFor={Filters_Attribute_Score_NumberInput_id}>Score</label>
              <br />
              <input id={Filters_Attribute_Score_NumberInput_id} className={number_input_class} defaultValue='0' type='number' />
            </div>

            <div className='ml-2.5'>
              <button className='bg-blue-700 font-bold hover:bg-blue-600 px-2 py-1 rounded-lg text-neutral-200' onClick={handle_Filters_Attribute_AddFilter_button_click} type='button'>Add Filter</button>
            </div>
          </div>

          <div className={small_group_div_class}>
            <table className='border-collapse border table-auto'>
              <thead>
                <tr>
                  <th className='px-10'>RegExp</th>
                  <th className='px-10'>MinValue</th>
                  <th className='px-10'>Score</th>
                </tr>
              </thead>
              <tbody>
                {
                  attributeFilters.map(filter =>
                    <tr key={filter.key}>
                      <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.regexp.toString()}</code></td>
                      <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.minValue}</code></td>
                      <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        {
          filterables.toSorted((a, b) => b.score - a.score).map(filterable =>
            <div key={filterable.key} className={group_div_class}>
              <div>
                Score: <code>{filterable.score}</code>
              </div>

              <div className={small_group_div_class}>
                <p><strong>{filterable.itemName}</strong></p>
                <p>{filterable.itemType}</p>
                <p>{filterable.itemPower}</p>
              </div>

              <div className={`${small_group_div_class} divide-dotted divide-neutral-500 divide-y-2`}>
                {
                  filterable.itemAttributes.filter(itemAttribute => itemAttribute.isItemTypeBuiltIn).length > 0 ?

                    <div>
                      <ul className={ul_class}>
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
                  <ul className={ul_class}>
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

              <div className={`${small_group_div_class} ${showIfTrue(DevControl_ShowInputImage_CheckboxInput_checked)}`}>
                <strong>{DevControl_ShowInputImage_CheckboxInput_labelText}</strong>
                <ul className={ul_class}>
                  <li>Data Last Modified Timestamp: {filterable.screenshotFileLastModifiedTimestamp}</li>
                  <li>Data Name: {filterable.screenshotFileName}</li>
                  <li>Data Size: {filterable.screenshotFileSize}</li>
                </ul>
                <div>
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img id={filterable.inputImage_image_id} className='max-w-none' alt={filterable.key} />
                  }
                </div>
              </div>

              <div className={`${small_group_div_class} ${showIfTrue(DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_checked)}`}>
                <strong>{DevControl_ShowInputImage_afterBrightnessThreshold_CheckboxInput_labelText}</strong>
                <ul className={ul_class}>
                  <li>{ScreenshotProcessor_InputImageBrightnessThreshold_NumberInput_labelText}: {filterable.screenshot_processor_InputImageBrightnessThreshold}</li>
                </ul>
                <div>
                  <canvas id={filterable.inputImage_afterBrightnessThreshold_canvas_id} />
                </div>
              </div>

              <div className={`${small_group_div_class} ${showIfTrue(DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_checked)}`}>
                <strong>{DevControl_ShowInputImage_afterItemImageDetection_CheckboxInput_labelText}</strong>
                <ul className={ul_class}>
                  <li>{ScreenshotProcessor_ItemImageMinWidth_NumberInput_labelText}: {filterable.screenshot_processor_ItemImageMinWidth}</li>
                  <li>{ScreenshotProcessor_ItemImageMaxWidth_NumberInput_labelText}: {filterable.screenshot_processor_ItemImageMaxWidth}</li>
                  <div className={small_group_div_class}>
                    <p>Candidates:</p>
                    <ul className={ul_class}>
                      {
                        filterable.itemImage_data_candidates.map(candidate =>
                          <li key={`${filterable.itemImage_data_id} ${candidate.id}`}>
                            <span className={filterable.itemImage_data_winner.id === candidate.id ? 'font-bold' : ''}>{candidate.id}</span>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                </ul>
                <div>
                  <canvas id={filterable.inputImage_afterItemImageDetection_canvas_id} />
                </div>
              </div>

              <div className={`${small_group_div_class} ${showIfTrue(DevControl_ShowItemImage_CheckboxInput_checked)}`}>
                <strong>{DevControl_ShowItemImage_CheckboxInput_labelText}</strong>
                <div>
                  <canvas id={filterable.itemImage_canvas_id} />
                </div>
              </div>

              <div className={`${small_group_div_class} ${showIfTrue(DevControl_ShowTextImage_CheckboxInput_checked)}`}>
                <strong>{DevControl_ShowTextImage_CheckboxInput_labelText}</strong>
                <ul className={ul_class}>
                  <li>{ScreenshotProcessor_ItemPictureHeight_NumberInput_labelText}: {filterable.screenshot_processor_ItemPictureHeight}</li>
                  <li>{ScreenshotProcessor_ItemPictureWidth_NumberInput_labelText}: {filterable.screenshot_processor_ItemPictureWidth}</li>
                  <li>{ScreenshotProcessor_TextImageBorderTrimSize_NumberInput_labelText}: {filterable.screenshot_processor_TextImageBorderTrimSize}</li>
                  <li>{ScreenshotProcessor_TextImageCornerTrimSize_NumberInput_labelText}: {filterable.screenshot_processor_TextImageCornerTrimSize}</li>
                </ul>
                <div>
                  <canvas id={filterable.textImage_canvas_id} />
                </div>
              </div>

              <div className={`${small_group_div_class} ${showIfTrue(DevControl_ShowText_CheckboxInput_checked)}`}>
                <strong>{DevControl_ShowText_CheckboxInput_labelText}</strong>
                <ul className={ul_class}>
                  <li>Confidence: {filterable.text_data_confidence}</li>
                  <li>itemType_startIndex: {filterable.itemType_startIndex}</li>
                  <li>itemType_endIndex: {filterable.itemType_endIndex}</li>
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
