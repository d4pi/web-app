'use client';

import Filter from '@/code/Filter';
import Filterable from '@/code/Filterable';
import React from 'react';
import Script from 'next/script';

// # App

const _attributeFilters = [] as Filter[];
const _filterables = [] as Filterable[];
const _nameFilters = [] as Filter[];
const _typeFilters = [] as Filter[];
let _discardedScreenshots_count = 0;

export default function Home() {

  // # App

  const [attributeFilters, set_attributeFilters] = React.useState(_attributeFilters);
  const [discardedScreenshots_count, set_discardedScreenshots_count] = React.useState(_discardedScreenshots_count);
  const [filterables, set_filterables] = React.useState(_filterables);
  const [nameFilters, set_nameFilters] = React.useState(_nameFilters);
  const [typeFilters, set_typeFilters] = React.useState(_typeFilters);
  const defaultTimeout = 127;

  // # CSS Classes

  const inner_group_div_class = 'border-2 border-dotted border-neutral-600 m-2.5 max-w-fit p-5 rounded-lg';
  const number_input_class = 'text-black text-right w-20';
  const ol_class = 'list-decimal list-inside';
  const outer_group_div_class = 'border-2 border-dotted border-neutral-600 m-5 max-w-fit p-5 rounded-2xl';
  const ul_class = 'list-disc list-inside';

  // # Components

  // ## AppControl
  const AppControl_AttributeFilters_text = 'Attribute Filters';
  const AppControl_DevInfo_text = 'Dev Info';
  const AppControl_ImageProcessorControl_text = 'Image Processor Control';
  const AppControl_NameFilters_text = 'Name Filters';
  const AppControl_StatusReport_text = 'Status Report';
  const AppControl_Tutorial_text = 'Tutorial';
  const AppControl_TypeFilters_text = 'Type Filters';
  const AppControl_ViewControl_text = 'View Control';

  const [AppControl_AttributeFilters_CheckboxInput_checked, set_AppControl_AttributeFilters_CheckboxInput_checked] = React.useState(false);
  const [AppControl_DevInfo_CheckboxInput_checked, set_AppControl_DevInfo_CheckboxInput_checked] = React.useState(false);
  const [AppControl_ImageProcessorControl_CheckboxInput_checked, set_AppControl_ImageProcessorControl_CheckboxInput_checked] = React.useState(false);
  const [AppControl_NameFilters_CheckboxInput_checked, set_AppControl_NameFilters_CheckboxInput_checked] = React.useState(false);
  const [AppControl_StatusReport_CheckboxInput_checked, set_AppControl_StatusReport_CheckboxInput_checked] = React.useState(false);
  const [AppControl_Tutorial_CheckboxInput_checked, set_AppControl_Tutorial_CheckboxInput_checked] = React.useState(true);
  const [AppControl_TypeFilters_CheckboxInput_checked, set_AppControl_TypeFilters_CheckboxInput_checked] = React.useState(false);
  const [AppControl_ViewControl_CheckboxInput_checked, set_AppControl_ViewControl_CheckboxInput_checked] = React.useState(false);

  function AppControl() {
    const AppControl_CheckboxInput_defaultChecked = false;

    const AppControl_CheckboxInput_id = 'AppControl_CheckboxInput_id';

    const AppControl_AttributeFilters_CheckboxInput_id = 'AppControl_AttributeFilters_CheckboxInput_id';
    const AppControl_DevInfo_CheckboxInput_id = 'AppControl_DevInfo_CheckboxInput_id';
    const AppControl_ImageProcessorControl_CheckboxInput_id = 'AppControl_ImageProcessorControl_CheckboxInput_id';
    const AppControl_LoadScreenshots_id = 'AppControl_LoadScreenshots_id';
    const AppControl_NameFilters_CheckboxInput_id = 'AppControl_NameFilters_CheckboxInput_id';
    const AppControl_StatusReport_CheckboxInput_id = 'AppControl_StatusReport_CheckboxInput_id';
    const AppControl_Tutorial_CheckboxInput_id = 'AppControl_Tutorial_CheckboxInput_id';
    const AppControl_TypeFilters_CheckboxInput_id = 'AppControl_TypeFilters_CheckboxInput_id';
    const AppControl_ViewControl_CheckboxInput_id = 'AppControl_ViewControl_CheckboxInput_id';

    return (
      <div className={`${outer_group_div_class} space-y-5`}>
        <ul className='space-y-2'>
          <li>
            <input id={AppControl_CheckboxInput_id} className='mr-5' defaultChecked={AppControl_CheckboxInput_defaultChecked} onChange={handle_AppControl_CheckboxInput_change} type='checkbox' />
            <label htmlFor={AppControl_CheckboxInput_id}><strong>App Control</strong></label>
          </li>

          <li>
            <input id={AppControl_AttributeFilters_CheckboxInput_id} className='mr-5' checked={AppControl_AttributeFilters_CheckboxInput_checked} onChange={event => set_AppControl_AttributeFilters_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_AttributeFilters_CheckboxInput_id}>{AppControl_AttributeFilters_text}</label>
          </li>

          <li>
            <input id={AppControl_DevInfo_CheckboxInput_id} className='mr-5' checked={AppControl_DevInfo_CheckboxInput_checked} onChange={event => set_AppControl_DevInfo_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_DevInfo_CheckboxInput_id}>{AppControl_DevInfo_text}</label>
          </li>

          <li>
            <input id={AppControl_ImageProcessorControl_CheckboxInput_id} className='mr-5' checked={AppControl_ImageProcessorControl_CheckboxInput_checked} onChange={event => set_AppControl_ImageProcessorControl_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_ImageProcessorControl_CheckboxInput_id}>{AppControl_ImageProcessorControl_text}</label>
          </li>

          <li>
            <input id={AppControl_NameFilters_CheckboxInput_id} className='mr-5' checked={AppControl_NameFilters_CheckboxInput_checked} onChange={event => set_AppControl_NameFilters_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_NameFilters_CheckboxInput_id}>{AppControl_NameFilters_text}</label>
          </li>

          <li>
            <input id={AppControl_StatusReport_CheckboxInput_id} className='mr-5' checked={AppControl_StatusReport_CheckboxInput_checked} onChange={event => set_AppControl_StatusReport_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_StatusReport_CheckboxInput_id}>{AppControl_StatusReport_text}</label>
          </li>

          <li>
            <input id={AppControl_Tutorial_CheckboxInput_id} className='mr-5' checked={AppControl_Tutorial_CheckboxInput_checked} onChange={event => set_AppControl_Tutorial_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_Tutorial_CheckboxInput_id}>{AppControl_Tutorial_text}</label>
          </li>

          <li>
            <input id={AppControl_TypeFilters_CheckboxInput_id} className='mr-5' checked={AppControl_TypeFilters_CheckboxInput_checked} onChange={event => set_AppControl_TypeFilters_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_TypeFilters_CheckboxInput_id}>{AppControl_TypeFilters_text}</label>
          </li>

          <li>
            <input id={AppControl_ViewControl_CheckboxInput_id} className='mr-5' checked={AppControl_ViewControl_CheckboxInput_checked} onChange={event => set_AppControl_ViewControl_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_ViewControl_CheckboxInput_id}>{AppControl_ViewControl_text}</label>
          </li>
        </ul>

        <div className='border-2 border-dotted rounded-lg p-3 border-neutral-600'>
          <label htmlFor={AppControl_LoadScreenshots_id}><strong>Load Screenshots</strong></label>
          <br />
          <input id={AppControl_LoadScreenshots_id} className='file:bg-blue-700 file:border-0 file:font-bold file:hover:bg-blue-600 file:px-2 file:py-1 file:rounded-lg file:text-neutral-200 w-40 text-black mt-2' accept='image/*' multiple onChange={handle_AppControl_LoadScreenshots_FileInput_change} type='file' />
        </div>
      </div>
    );

    function handle_AppControl_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void {
      const eventTargetChecked = event.target.checked;
      set_AppControl_AttributeFilters_CheckboxInput_checked(eventTargetChecked);
      set_AppControl_DevInfo_CheckboxInput_checked(eventTargetChecked);
      set_AppControl_ImageProcessorControl_CheckboxInput_checked(eventTargetChecked);
      set_AppControl_NameFilters_CheckboxInput_checked(eventTargetChecked);
      set_AppControl_StatusReport_CheckboxInput_checked(eventTargetChecked);
      set_AppControl_Tutorial_CheckboxInput_checked(eventTargetChecked);
      set_AppControl_TypeFilters_CheckboxInput_checked(eventTargetChecked);
      set_AppControl_ViewControl_CheckboxInput_checked(eventTargetChecked);
    }

    function handle_AppControl_LoadScreenshots_FileInput_change(event: React.ChangeEvent<HTMLInputElement>): void {
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
              getNumberInputValue(ImageProcessorControl_InputImageBrightnessThreshold_NumberInput_id),
              getNumberInputValue(ImageProcessorControl_ItemImageMaxWidth_NumberInput_id),
              getNumberInputValue(ImageProcessorControl_ItemImageMinWidth_NumberInput_id),
              getNumberInputValue(ImageProcessorControl_ItemPictureHeight_NumberInput_id),
              getNumberInputValue(ImageProcessorControl_ItemPictureWidth_NumberInput_id),
              getNumberInputValue(ImageProcessorControl_TextImageBorderTrimSize_NumberInput_id),
              getNumberInputValue(ImageProcessorControl_TextImageCornerTrimSize_NumberInput_id),
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
  }

  // ## AttributeFilters
  function AttributeFilters() {
    const AttributeFilters_MinValue_NumberInput_id = 'AttributeFilters_MinValue_NumberInput_id';
    const AttributeFilters_Options_TextInput_id = 'AttributeFilters_Options_TextInput_id';
    const AttributeFilters_Pattern_TextInput_id = 'AttributeFilters_Pattern_TextInput_id';
    const AttributeFilters_Score_NumberInput_id = 'AttributeFilters_Score_NumberInput_id';

    return (
      <div className={`${outer_group_div_class} ${showIfTrue(AppControl_AttributeFilters_CheckboxInput_checked)}`}>
        <strong>{AppControl_AttributeFilters_text}</strong>

        <div className={`${inner_group_div_class} flex flex-wrap`}>
          <div className='mr-2.5'>
            <label htmlFor={AttributeFilters_Pattern_TextInput_id}>Pattern</label>
            <br />
            <input id={AttributeFilters_Pattern_TextInput_id} className='px-2 text-black' type='text' />
          </div>

          <div className='mx-2.5'>
            <label htmlFor={AttributeFilters_Options_TextInput_id}>Options</label>
            <br />
            <input id={AttributeFilters_Options_TextInput_id} className='px-2 text-black' defaultValue='i' size={5} type='text' />
          </div>

          <div className='mx-2.5'>
            <label htmlFor={AttributeFilters_MinValue_NumberInput_id}>MinValue</label>
            <br />
            <input id={AttributeFilters_MinValue_NumberInput_id} className={number_input_class} defaultValue='0' type='number' />
          </div>

          <div className='mx-2.5'>
            <label htmlFor={AttributeFilters_Score_NumberInput_id}>Score</label>
            <br />
            <input id={AttributeFilters_Score_NumberInput_id} className={number_input_class} defaultValue='0' type='number' />
          </div>

          <div className='ml-2.5'>
            <button className='bg-blue-700 font-bold hover:bg-blue-600 px-2 py-1 rounded-lg text-neutral-200 mt-3.5' onClick={handle_AttributeFilters_AddFilter_button_click} type='button'>Add Filter</button>
          </div>
        </div>

        <div className={inner_group_div_class}>
          <table className='border-collapse border table-auto'>
            <thead>
              <tr>
                <th className='px-10'>RegExp</th>
                <th className='px-10'>MinValue</th>
                <th className='px-10'>Score</th>
              </tr>
            </thead>
            <tbody>
              {attributeFilters.map(filter => <tr key={filter.key}>
                <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.regexp.toString()}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.minValue}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );

    function handle_AttributeFilters_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      const pattern = getInputValue(AttributeFilters_Pattern_TextInput_id);
      if (pattern !== '') {
        const newFilter = new Filter(
          getNumberInputValue(AttributeFilters_MinValue_NumberInput_id),
          new RegExp(pattern, getInputValue(AttributeFilters_Options_TextInput_id)),
          getNumberInputValue(AttributeFilters_Score_NumberInput_id)
        );
        if (_attributeFilters.every(filter => filter.key !== newFilter.key)) {
          _attributeFilters.push(newFilter);
          set_attributeFilters([..._attributeFilters]);
          applyFilters_and_setFilterables();
        }
      }
    }
  }

  // ## DevInfo
  function DevInfo() {
    return <div className={`${outer_group_div_class} space-y-2 ${showIfTrue(AppControl_DevInfo_CheckboxInput_checked)}`}>
      <strong>{AppControl_DevInfo_text}</strong>

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
    </div>;
  }

  // ## Filterables
  function Filterables() {
    return filterables.toSorted((a, b) => b.score - a.score).map(filterable =>
      <div key={filterable.key} className={outer_group_div_class}>
        <div>
          Score: <code>{filterable.score}</code>
        </div>

        <div className={inner_group_div_class}>
          <p><strong>{filterable.itemName}</strong></p>
          <p>{filterable.itemType}</p>
          <p>{filterable.itemPower}</p>
        </div>

        <div className={`${inner_group_div_class} divide-dotted divide-neutral-500 divide-y-2`}>
          {filterable.itemAttributes.filter(itemAttribute => itemAttribute.isItemTypeBuiltIn).length > 0 ?

            <div>
              <ul className={ul_class}>
                {filterable.itemAttributes.filter(itemAttribute => itemAttribute.isItemTypeBuiltIn).map(itemAttribute => <li key={itemAttribute.key}>
                  {itemAttribute.text}
                </li>
                )}
              </ul>
            </div>

            : <></>}

          <div>
            <ul className={ul_class}>
              {filterable.itemAttributes.filter(itemAttribute => !itemAttribute.isItemTypeBuiltIn).map(itemAttribute => <li key={itemAttribute.key}>
                {itemAttribute.text}
              </li>
              )}
            </ul>
          </div>
        </div>

        <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_InputImage_CheckboxInput_checked)}`}>
          <strong>{ViewControl_InputImage_text}</strong>
          <ul className={ul_class}>
            <li>Data Last Modified Timestamp: {filterable.screenshotFileLastModifiedTimestamp}</li>
            <li>Data Name: {filterable.screenshotFileName}</li>
            <li>Data Size: {filterable.screenshotFileSize}</li>
          </ul>
          <div>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img id={filterable.inputImage_image_id} className='max-w-none' alt={filterable.key} />}
          </div>
        </div>

        <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_checked)}`}>
          <strong>{ViewControl_InputImage_afterBrightnessThreshold_text}</strong>
          <ul className={ul_class}>
            <li>{ImageProcessorControl_InputImageBrightnessThreshold_text}: {filterable.screenshot_processor_InputImageBrightnessThreshold}</li>
          </ul>
          <div>
            <canvas id={filterable.inputImage_afterBrightnessThreshold_canvas_id} />
          </div>
        </div>

        <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_InputImage_afterItemImageDetection_CheckboxInput_checked)}`}>
          <strong>{ViewControl_InputImage_afterItemImageDetection_text}</strong>
          <ul className={ul_class}>
            <li>{ImageProcessorControl_ItemImageMinWidth_text}: {filterable.screenshot_processor_ItemImageMinWidth}</li>
            <li>{ImageProcessorControl_ItemImageMaxWidth_text}: {filterable.screenshot_processor_ItemImageMaxWidth}</li>
            <div className={inner_group_div_class}>
              <p>Candidates:</p>
              <ul className={ul_class}>
                {filterable.itemImage_data_candidates.map(candidate => <li key={`${filterable.itemImage_data_id} ${candidate.id}`}>
                  <span className={filterable.itemImage_data_winner.id === candidate.id ? 'font-bold' : ''}>{candidate.id}</span>
                </li>
                )}
              </ul>
            </div>
          </ul>
          <div>
            <canvas id={filterable.inputImage_afterItemImageDetection_canvas_id} />
          </div>
        </div>

        <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_ItemImage_CheckboxInput_checked)}`}>
          <strong>{ViewControl_ItemImage_text}</strong>
          <div>
            <canvas id={filterable.itemImage_canvas_id} />
          </div>
        </div>

        <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_TextImage_CheckboxInput_checked)}`}>
          <strong>{ViewControl_TextImage_text}</strong>
          <ul className={ul_class}>
            <li>{ImageProcessorControl_ItemPictureHeight_text}: {filterable.screenshot_processor_ItemPictureHeight}</li>
            <li>{ImageProcessorControl_ItemPictureWidth_text}: {filterable.screenshot_processor_ItemPictureWidth}</li>
            <li>{ImageProcessorControl_TextImageBorderTrimSize_text}: {filterable.screenshot_processor_TextImageBorderTrimSize}</li>
            <li>{ImageProcessorControl_TextImageCornerTrimSize_text}: {filterable.screenshot_processor_TextImageCornerTrimSize}</li>
          </ul>
          <div>
            <canvas id={filterable.textImage_canvas_id} />
          </div>
        </div>

        <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_Text_CheckboxInput_checked)}`}>
          <strong>{ViewControl_Text_text}</strong>
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
    );
  }

  // ## ImageProcessorControl
  const ImageProcessorControl_InputImageBrightnessThreshold_NumberInput_id = 'ImageProcessorControl_InputImageBrightnessThreshold_NumberInput_id';
  const ImageProcessorControl_InputImageBrightnessThreshold_text = 'Input Image Brightness Threshold';
  const ImageProcessorControl_ItemImageMaxWidth_NumberInput_id = 'ImageProcessorControl_ItemImageMaxWidth_NumberInput_id';
  const ImageProcessorControl_ItemImageMaxWidth_text = 'Item Image Max Width';
  const ImageProcessorControl_ItemImageMinWidth_NumberInput_id = 'ImageProcessorControl_ItemImageMinWidth_NumberInput_id';
  const ImageProcessorControl_ItemImageMinWidth_text = 'Item Image Min Width';
  const ImageProcessorControl_ItemPictureHeight_NumberInput_id = 'ImageProcessorControl_ItemPictureHeight_NumberInput_id';
  const ImageProcessorControl_ItemPictureHeight_text = 'Item Picture Height';
  const ImageProcessorControl_ItemPictureWidth_NumberInput_id = 'ImageProcessorControl_ItemPictureWidth_NumberInput_id';
  const ImageProcessorControl_ItemPictureWidth_text = 'Item Picture Width';
  const ImageProcessorControl_TextImageBorderTrimSize_NumberInput_id = 'ImageProcessorControl_TextImageBorderTrimSize_NumberInput_id';
  const ImageProcessorControl_TextImageBorderTrimSize_text = 'Text Image Border Trim Size';
  const ImageProcessorControl_TextImageCornerTrimSize_NumberInput_id = 'ImageProcessorControl_TextImageCornerTrimSize_NumberInput_id';
  const ImageProcessorControl_TextImageCornerTrimSize_text = 'Text Image Corner Trim Size';

  function ImageProcessorControl() {
    const ImageProcessorControl_InputImageBrightnessThreshold_NumberInput_defaultValue = 25;
    const ImageProcessorControl_ItemImageMaxWidth_NumberInput_defaultValue = 410;
    const ImageProcessorControl_ItemImageMinWidth_NumberInput_defaultValue = 340;
    const ImageProcessorControl_ItemPictureHeight_NumberInput_defaultValue = 128;
    const ImageProcessorControl_ItemPictureWidth_NumberInput_defaultValue = 128;
    const ImageProcessorControl_TextImageBorderTrimSize_NumberInput_defaultValue = 32;
    const ImageProcessorControl_TextImageCornerTrimSize_NumberInput_defaultValue = 25;

    return (
      <div className={`${outer_group_div_class} space-y-2 ${showIfTrue(AppControl_ImageProcessorControl_CheckboxInput_checked)}`}>
        <strong>{AppControl_ImageProcessorControl_text}</strong>

        <ul className='space-y-2'>
          <li>
            <input id={ImageProcessorControl_InputImageBrightnessThreshold_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ImageProcessorControl_InputImageBrightnessThreshold_NumberInput_defaultValue} max='255' min='0' type='number' />
            <label htmlFor={ImageProcessorControl_InputImageBrightnessThreshold_NumberInput_id}>{ImageProcessorControl_InputImageBrightnessThreshold_text}</label>
          </li>

          <li>
            <input id={ImageProcessorControl_ItemImageMaxWidth_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ImageProcessorControl_ItemImageMaxWidth_NumberInput_defaultValue} min='0' type='number' />
            <label htmlFor={ImageProcessorControl_ItemImageMaxWidth_NumberInput_id}>{ImageProcessorControl_ItemImageMaxWidth_text}</label>
          </li>

          <li>
            <input id={ImageProcessorControl_ItemImageMinWidth_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ImageProcessorControl_ItemImageMinWidth_NumberInput_defaultValue} min='0' type='number' />
            <label htmlFor={ImageProcessorControl_ItemImageMinWidth_NumberInput_id}>{ImageProcessorControl_ItemImageMinWidth_text}</label>
          </li>

          <li>
            <input id={ImageProcessorControl_ItemPictureHeight_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ImageProcessorControl_ItemPictureHeight_NumberInput_defaultValue} min='0' type='number' />
            <label htmlFor={ImageProcessorControl_ItemPictureHeight_NumberInput_id}>{ImageProcessorControl_ItemPictureHeight_text}</label>
          </li>

          <li>
            <input id={ImageProcessorControl_ItemPictureWidth_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ImageProcessorControl_ItemPictureWidth_NumberInput_defaultValue} min='0' type='number' />
            <label htmlFor={ImageProcessorControl_ItemPictureWidth_NumberInput_id}>{ImageProcessorControl_ItemPictureWidth_text}</label>
          </li>

          <li>
            <input id={ImageProcessorControl_TextImageBorderTrimSize_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ImageProcessorControl_TextImageBorderTrimSize_NumberInput_defaultValue} min='0' type='number' />
            <label htmlFor={ImageProcessorControl_TextImageBorderTrimSize_NumberInput_id}>{ImageProcessorControl_TextImageBorderTrimSize_text}</label>
          </li>

          <li>
            <input id={ImageProcessorControl_TextImageCornerTrimSize_NumberInput_id} className={`${number_input_class} mr-5`} defaultValue={ImageProcessorControl_TextImageCornerTrimSize_NumberInput_defaultValue} min='0' type='number' />
            <label htmlFor={ImageProcessorControl_TextImageCornerTrimSize_NumberInput_id}>{ImageProcessorControl_TextImageCornerTrimSize_text}</label>
          </li>
        </ul>
      </div>
    );
  }

  // ## NameFilters
  const NameFilters_Options_TextInput_id = 'NameFilters_Options_TextInput_id';
  const NameFilters_Pattern_TextInput_id = 'NameFilters_Pattern_TextInput_id';
  const NameFilters_Score_NumberInput_id = 'NameFilters_Score_NumberInput_id';

  function NameFilters() {
    return <div className={`${outer_group_div_class} ${showIfTrue(AppControl_NameFilters_CheckboxInput_checked)}`}>
      <strong>{AppControl_NameFilters_text}</strong>

      <div className={`${inner_group_div_class} flex flex-wrap`}>
        <div className='mr-2.5'>
          <label htmlFor={NameFilters_Pattern_TextInput_id}>Pattern</label>
          <br />
          <input id={NameFilters_Pattern_TextInput_id} className='px-2 text-black' type='text' />
        </div>

        <div className='mx-2.5'>
          <label htmlFor={NameFilters_Options_TextInput_id}>Options</label>
          <br />
          <input id={NameFilters_Options_TextInput_id} className='px-2 text-black' defaultValue='i' size={5} type='text' />
        </div>

        <div className='mx-2.5'>
          <label htmlFor={NameFilters_Score_NumberInput_id}>Score</label>
          <br />
          <input id={NameFilters_Score_NumberInput_id} className={number_input_class} defaultValue='0' type='number' />
        </div>

        <div className='ml-2.5'>
          <button className='bg-blue-700 font-bold hover:bg-blue-600 px-2 py-1 rounded-lg text-neutral-200 mt-3.5' onClick={handle_NameFilters_AddFilter_button_click} type='button'>Add Filter</button>
        </div>
      </div>

      <div className={inner_group_div_class}>
        <table className='border-collapse border table-auto'>
          <thead>
            <tr>
              <th className='px-10'>RegExp</th>
              <th className='px-10'>Score</th>
            </tr>
          </thead>
          <tbody>
            {nameFilters.map(filter => <tr key={filter.key}>
              <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.regexp.toString()}</code></td>
              <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>;
  }

  function handle_NameFilters_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const pattern = getInputValue(NameFilters_Pattern_TextInput_id);
    if (pattern !== '') {
      const newFilter = new Filter(
        0,
        new RegExp(pattern, getInputValue(NameFilters_Options_TextInput_id)),
        getNumberInputValue(NameFilters_Score_NumberInput_id)
      );
      if (_nameFilters.every(filter => filter.key !== newFilter.key)) {
        _nameFilters.push(newFilter);
        set_nameFilters([..._nameFilters]);
        applyFilters_and_setFilterables();
      }
    }
  }

  // ## Screenshots LoadDemo Button
  function handle_Screenshots_LoadDemo_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    waitForAppInitialization_then_processDemoScreenshot(1705833567, 'Demo Screenshot 1', 693354, '/images/demo-screenshot-1.jpg');
    waitForAppInitialization_then_processDemoScreenshot(1705833567, 'Demo Screenshot 2', 640421, '/images/demo-screenshot-2.jpg');
    waitForAppInitialization_then_processDemoScreenshot(1705833567, 'Demo Screenshot 3', 621025, '/images/demo-screenshot-3.jpg');
    waitForAppInitialization_then_processDemoScreenshot(1705833567, 'Demo Screenshot 4', 612918, '/images/demo-screenshot-4.jpg');
    waitForAppInitialization_then_processDemoScreenshot(1705833567, 'Demo Screenshot 5', 643168, '/images/demo-screenshot-5.jpg');
  }

  function waitForAppInitialization_then_processDemoScreenshot(demoScreenshot_lastModified_timestamp: number, demoScreenshot_name: string, demoScreenshot_size: number, demoScreenshot_url: string): void {
    if (isAppInitialized()) {
      processDemoScreenshot();
    } else {
      setTimeout(() => waitForAppInitialization_then_processDemoScreenshot(demoScreenshot_lastModified_timestamp, demoScreenshot_name, demoScreenshot_size, demoScreenshot_url), defaultTimeout);
    }

    function processDemoScreenshot(): void {
      const newFilterable = new Filterable(
        getNumberInputValue(ImageProcessorControl_InputImageBrightnessThreshold_NumberInput_id),
        getNumberInputValue(ImageProcessorControl_ItemImageMaxWidth_NumberInput_id),
        getNumberInputValue(ImageProcessorControl_ItemImageMinWidth_NumberInput_id),
        getNumberInputValue(ImageProcessorControl_ItemPictureHeight_NumberInput_id),
        getNumberInputValue(ImageProcessorControl_ItemPictureWidth_NumberInput_id),
        getNumberInputValue(ImageProcessorControl_TextImageBorderTrimSize_NumberInput_id),
        getNumberInputValue(ImageProcessorControl_TextImageCornerTrimSize_NumberInput_id),
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

  // ## StatusReport
  function StatusReport() {
    const card_div_class = 'border-2 border-dotted border-neutral-500 m-2.5 p-2.5 rounded-lg';

    const processingFilterables = filterables.filter(filterable => !filterable.isProcessed);
    const processingFilterables_Image = processingFilterables.filter(filterable => filterable.isProcessing_Image);
    const processingFilterables_Text = processingFilterables.filter(filterable => filterable.isProcessing_Text);

    const processedFilterables = filterables.filter(screenshot => screenshot.isProcessed);
    const averageTime = processedFilterables.length > 0 ? Math.round(processedFilterables.reduce((totalTime, processedFilterable) => totalTime + processedFilterable.processTime, 0) / processedFilterables.length) / 1000 : 'N/A';
    const averageTime_Image = processedFilterables.length > 0 ? Math.round(processedFilterables.reduce((totalTime, processedFilterable) => totalTime + processedFilterable.processTime_Image, 0) / processedFilterables.length) / 1000 : 'N/A';
    const averageTime_Text = processedFilterables.length > 0 ? Math.round(processedFilterables.reduce((totalTime, processedFilterable) => totalTime + processedFilterable.processTime_Text, 0) / processedFilterables.length) / 1000 : 'N/A';
    const lowConfidence = processedFilterables.filter(filterable => filterable.itemImage_data_candidates.length === 0);

    return <div className={`${outer_group_div_class} ${showIfTrue(AppControl_StatusReport_CheckboxInput_checked)}`}>
      <strong>{AppControl_StatusReport_text}</strong>

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
    </div>;
  }

  // ## Tutorial
  function Tutorial() {
    return <div className={`${outer_group_div_class} ${showIfTrue(AppControl_Tutorial_CheckboxInput_checked)}`}>
      <strong>{AppControl_Tutorial_text}</strong>

      <p>D4pi turns screenshots into searchable & filterable items.  Everything runs locally inside your web browser.</p>

      <div className={inner_group_div_class}>
        <ol className={ol_class}>
          <li>
            <button className='bg-blue-700 font-bold hover:bg-blue-600 mx-2 my-1.5 px-2 py-1 rounded-lg text-neutral-200' onClick={handle_Screenshots_LoadDemo_button_click}>Load Demo Screenshots</button>
            <code><a className='underline' href='/images/demo-screenshot-1.jpg'>1.jpg</a> <a className='underline' href='/images/demo-screenshot-2.jpg'>2.jpg</a> <a className='underline' href='/images/demo-screenshot-3.jpg'>3.jpg</a> <a className='underline' href='/images/demo-screenshot-4.jpg'>4.jpg</a> <a className='underline' href='/images/demo-screenshot-5.jpg'>5.jpg</a></code>
          </li>

          <li>Wait a few seconds for the screenshots to be processed.</li>

          <li> --- --- </li>
        </ol>
      </div>
    </div>;
  }

  // ## TypeFilters
  function TypeFilters() {
    const TypeFilters_Options_TextInput_id = 'TypeFilters_Options_TextInput_id';
    const TypeFilters_Pattern_TextInput_id = 'TypeFilters_Pattern_TextInput_id';
    const TypeFilters_Score_NumberInput_id = 'TypeFilters_Score_NumberInput_id';

    return (
      <div className={`${outer_group_div_class} ${showIfTrue(AppControl_TypeFilters_CheckboxInput_checked)}`}>
        <strong>{AppControl_TypeFilters_text}</strong>

        <div className={`${inner_group_div_class} flex flex-wrap`}>
          <div className='mr-2.5'>
            <label htmlFor={TypeFilters_Pattern_TextInput_id}>Pattern</label>
            <br />
            <input id={TypeFilters_Pattern_TextInput_id} className='px-2 text-black' type='text' />
          </div>

          <div className='mx-2.5'>
            <label htmlFor={TypeFilters_Options_TextInput_id}>Options</label>
            <br />
            <input id={TypeFilters_Options_TextInput_id} className='px-2 text-black' defaultValue='i' size={5} type='text' />
          </div>

          <div className='mx-2.5'>
            <label htmlFor={TypeFilters_Score_NumberInput_id}>Score</label>
            <br />
            <input id={TypeFilters_Score_NumberInput_id} className={number_input_class} defaultValue='0' type='number' />
          </div>

          <div className='ml-2.5'>
            <button className='bg-blue-700 font-bold hover:bg-blue-600 px-2 py-1 rounded-lg text-neutral-200 mt-3.5' onClick={handle_TypeFilters_AddFilter_button_click} type='button'>Add Filter</button>
          </div>
        </div>

        <div className={inner_group_div_class}>
          <table className='border-collapse border table-auto'>
            <thead>
              <tr>
                <th className='px-10'>RegExp</th>
                <th className='px-10'>Score</th>
              </tr>
            </thead>
            <tbody>
              {typeFilters.map(filter => <tr key={filter.key}>
                <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.regexp.toString()}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );

    function handle_TypeFilters_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      const pattern = getInputValue(TypeFilters_Pattern_TextInput_id);
      if (pattern !== '') {
        const newFilter = new Filter(
          0,
          new RegExp(pattern, getInputValue(TypeFilters_Options_TextInput_id)),
          getNumberInputValue(TypeFilters_Score_NumberInput_id)
        );
        if (_typeFilters.every(filter => filter.key !== newFilter.key)) {
          _typeFilters.push(newFilter);
          set_typeFilters([..._typeFilters]);
          applyFilters_and_setFilterables();
        }
      }
    }
  }

  // ## ViewControl
  const ViewControl_InputImage_afterBrightnessThreshold_text = 'Input Image after Brightness Threshold';
  const ViewControl_InputImage_afterItemImageDetection_text = 'Input Image after Item Image Detection';
  const ViewControl_InputImage_text = 'Input Image';
  const ViewControl_ItemImage_text = 'Item Image';
  const ViewControl_Text_text = 'Text';
  const ViewControl_TextImage_text = 'Text Image';

  const [ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_checked, set_ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_checked] = React.useState(false);
  const [ViewControl_InputImage_afterItemImageDetection_CheckboxInput_checked, set_ViewControl_InputImage_afterItemImageDetection_CheckboxInput_checked] = React.useState(false);
  const [ViewControl_InputImage_CheckboxInput_checked, set_ViewControl_InputImage_CheckboxInput_checked] = React.useState(false);
  const [ViewControl_ItemImage_CheckboxInput_checked, set_ViewControl_ItemImage_CheckboxInput_checked] = React.useState(true);
  const [ViewControl_Text_CheckboxInput_checked, set_ViewControl_Text_CheckboxInput_checked] = React.useState(false);
  const [ViewControl_TextImage_CheckboxInput_checked, set_ViewControl_TextImage_CheckboxInput_checked] = React.useState(false);

  function ViewControl() {
    const ViewControl_CheckboxInput_defaultChecked = false;

    const ViewControl_CheckboxInput_id = 'ViewControl_CheckboxInput_id';

    const ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_id = 'ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_id';
    const ViewControl_InputImage_afterItemImageDetection_CheckboxInput_id = 'ViewControl_InputImage_afterItemImageDetection_CheckboxInput_id';
    const ViewControl_InputImage_CheckboxInput_id = 'ViewControl_InputImage_CheckboxInput_id';
    const ViewControl_ItemImage_CheckboxInput_id = 'ViewControl_ItemImage_CheckboxInput_id';
    const ViewControl_Text_CheckboxInput_id = 'ViewControl_Text_CheckboxInput_id';
    const ViewControl_TextImage_CheckboxInput_id = 'ViewControl_TextImage_CheckboxInput_id';
    return (
      <div className={`${outer_group_div_class} ${showIfTrue(AppControl_ViewControl_CheckboxInput_checked)}`}>
        <ul className='space-y-2'>
          <li>
            <input id={ViewControl_CheckboxInput_id} className='mr-5' defaultChecked={ViewControl_CheckboxInput_defaultChecked} onChange={handle_ViewControl_CheckboxInput_change} type='checkbox' />
            <label htmlFor={ViewControl_CheckboxInput_id}><strong>{AppControl_ViewControl_text}</strong></label>
          </li>

          <li>
            <input id={ViewControl_InputImage_CheckboxInput_id} className='mr-5' checked={ViewControl_InputImage_CheckboxInput_checked} onChange={event => set_ViewControl_InputImage_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={ViewControl_InputImage_CheckboxInput_id}>{ViewControl_InputImage_text}</label>
          </li>

          <li>
            <input id={ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_id} className='mr-5' checked={ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_checked} onChange={event => set_ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_id}>{ViewControl_InputImage_afterBrightnessThreshold_text}</label>
          </li>

          <li>
            <input id={ViewControl_InputImage_afterItemImageDetection_CheckboxInput_id} className='mr-5' checked={ViewControl_InputImage_afterItemImageDetection_CheckboxInput_checked} onChange={event => set_ViewControl_InputImage_afterItemImageDetection_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={ViewControl_InputImage_afterItemImageDetection_CheckboxInput_id}>{ViewControl_InputImage_afterItemImageDetection_text}</label>
          </li>

          <li>
            <input id={ViewControl_ItemImage_CheckboxInput_id} className='mr-5' checked={ViewControl_ItemImage_CheckboxInput_checked} onChange={event => set_ViewControl_ItemImage_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={ViewControl_ItemImage_CheckboxInput_id}>{ViewControl_ItemImage_text}</label>
          </li>

          <li>
            <input id={ViewControl_TextImage_CheckboxInput_id} className='mr-5' checked={ViewControl_TextImage_CheckboxInput_checked} onChange={event => set_ViewControl_TextImage_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={ViewControl_TextImage_CheckboxInput_id}>{ViewControl_TextImage_text}</label>
          </li>

          <li>
            <input id={ViewControl_Text_CheckboxInput_id} className='mr-5' checked={ViewControl_Text_CheckboxInput_checked} onChange={event => set_ViewControl_Text_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={ViewControl_Text_CheckboxInput_id}>{ViewControl_Text_text}</label>
          </li>
        </ul>
      </div>
    );

    function handle_ViewControl_CheckboxInput_change(event: React.ChangeEvent<HTMLInputElement>): void {
      const eventTargetChecked = event.target.checked;
      set_ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_checked(eventTargetChecked);
      set_ViewControl_InputImage_afterItemImageDetection_CheckboxInput_checked(eventTargetChecked);
      set_ViewControl_InputImage_CheckboxInput_checked(eventTargetChecked);
      set_ViewControl_ItemImage_CheckboxInput_checked(eventTargetChecked);
      set_ViewControl_Text_CheckboxInput_checked(eventTargetChecked);
      set_ViewControl_TextImage_CheckboxInput_checked(eventTargetChecked);
    }
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
              applyFilters_and_setFilterables();
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
        {AppControl()}

        {AttributeFilters()}

        {DevInfo()}

        {ImageProcessorControl()}

        {NameFilters()}

        {StatusReport()}

        {Tutorial()}

        {TypeFilters()}

        {ViewControl()}
      </div>

      <div className='flex flex-wrap'>
        {Filterables()}
      </div>
    </main>
  </>;
}
