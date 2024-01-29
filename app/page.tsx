'use client';

import AttributeFilter from '@/code/AttributeFilter';
import NameFilter from '@/code/NameFilter';
import React from 'react';
import Screenshot from '@/code/Screenshot';
import Script from 'next/script';
import TypeFilter from '@/code/TypeFilter';
import { findAllInRenderedTree } from 'react-dom/test-utils';

// # App

const _attributeFilters: AttributeFilter[] = [];
const _nameFilters: NameFilter[] = [];
const _screenshots: Screenshot[] = [];
const _typeFilters: TypeFilter[] = [];
let _discardedScreenshots_count = 0;

export default function Home() {

  // # App

  const [attributeFilters, set_attributeFilters] = React.useState(_attributeFilters);
  const [discardedScreenshots_count, set_discardedScreenshots_count] = React.useState(_discardedScreenshots_count);
  const [nameFilters, set_nameFilters] = React.useState(_nameFilters);
  const [screenshots, set_screenshots] = React.useState(_screenshots);
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
    const AppControl_LoadScreenshotsFromDisk_id = 'AppControl_LoadScreenshotsFromDisk_id';
    const AppControl_LoadScreenshotsFromUrl_id = 'AppControl_LoadScreenshotsFromUrl_id';
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
            <input id={AppControl_Tutorial_CheckboxInput_id} className='mr-5' checked={AppControl_Tutorial_CheckboxInput_checked} onChange={event => set_AppControl_Tutorial_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_Tutorial_CheckboxInput_id}>{AppControl_Tutorial_text}</label>
          </li>

          <li>
            <input id={AppControl_AttributeFilters_CheckboxInput_id} className='mr-5' checked={AppControl_AttributeFilters_CheckboxInput_checked} onChange={event => set_AppControl_AttributeFilters_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_AttributeFilters_CheckboxInput_id}>{AppControl_AttributeFilters_text}</label>
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
            <input id={AppControl_TypeFilters_CheckboxInput_id} className='mr-5' checked={AppControl_TypeFilters_CheckboxInput_checked} onChange={event => set_AppControl_TypeFilters_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_TypeFilters_CheckboxInput_id}>{AppControl_TypeFilters_text}</label>
          </li>

          <li>
            <input id={AppControl_ViewControl_CheckboxInput_id} className='mr-5' checked={AppControl_ViewControl_CheckboxInput_checked} onChange={event => set_AppControl_ViewControl_CheckboxInput_checked(event.target.checked)} type='checkbox' />
            <label htmlFor={AppControl_ViewControl_CheckboxInput_id}>{AppControl_ViewControl_text}</label>
          </li>
        </ul>

        <div className='border-2 border-dotted rounded-lg p-3 border-neutral-600'>
          <label htmlFor={AppControl_LoadScreenshotsFromDisk_id}><strong>Load Screenshots from Disk</strong></label>
          <br />
          <input id={AppControl_LoadScreenshotsFromDisk_id} className='file:bg-blue-700 file:border-0 file:font-bold file:hover:bg-blue-600 file:px-2 file:py-1 file:rounded-lg file:text-neutral-200 w-40 text-black mt-2' accept='image/*' multiple onChange={handle_AppControl_LoadScreenshots_FileInput_change} type='file' />
        </div>

        <div className='text-neutral-500'>
          <ul className='space-y-1'>
            <li>
              <code>202401291613</code>
            </li>

            <li>
              <code><a href='https://discord.gg/sxUMgj3VcA'>Discord</a></code>
            </li>

            <li>
              <code><a href='https://github.com/d4pi/web-app'>GitHub</a></code>
            </li>

            <li>
              <code><a href='https://www.reddit.com/r/D4pi/'>Reddit</a></code>
            </li>

            <li>
              <input id={AppControl_DevInfo_CheckboxInput_id} className='mr-5' checked={AppControl_DevInfo_CheckboxInput_checked} onChange={event => set_AppControl_DevInfo_CheckboxInput_checked(event.target.checked)} type='checkbox' />
              <label htmlFor={AppControl_DevInfo_CheckboxInput_id}>{AppControl_DevInfo_text}</label>
            </li>
          </ul>
        </div>

        <div className='border-2 border-dotted rounded-lg p-3 border-neutral-600'>
          <code>EXPERIMENTAL</code>
          <br />
          <input id={AppControl_LoadScreenshotsFromUrl_id} className='text-black' defaultValue='/images/demo-screenshot-11.jpg' type='url' />
          <br />
          <button className='bg-gray-700 font-bold hover:bg-gray-600 my-1 px-2 py-1 rounded-lg text-neutral-200' onClick={handle_AppControl_LoadScreenshotsFromUrl_button_click}>Load Screenshots from URL</button>
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

    function handle_AppControl_LoadScreenshotsFromUrl_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      waitForAppInitialization_then_processDemoScreenshot(-1, 'Demo Screenshot 05', -1, getInputValue(AppControl_LoadScreenshotsFromUrl_id));
    }
  }

  // ## AttributeFilters
  function AttributeFilters() {
    const AttributeFilters_AttributePattern_TextInput_id = 'AttributeFilters_AttributePattern_TextInput_id';
    const AttributeFilters_MinValue_NumberInput_id = 'AttributeFilters_MinValue_NumberInput_id';
    const AttributeFilters_Score_NumberInput_id = 'AttributeFilters_Score_NumberInput_id';
    const AttributeFilters_TypePattern_TextInput_id = 'AttributeFilters_TypePattern_TextInput_id';

    return (
      <div className={`${outer_group_div_class} ${showIfTrue(AppControl_AttributeFilters_CheckboxInput_checked)}`}>
        <strong>{AppControl_AttributeFilters_text}</strong>

        <div className={`${inner_group_div_class} flex flex-wrap`}>
          <div className='mr-2.5'>
            <label htmlFor={AttributeFilters_TypePattern_TextInput_id}>Type Pattern</label>
            <br />
            <input id={AttributeFilters_TypePattern_TextInput_id} className='px-2 text-black' defaultValue='.*' type='text' />
          </div>

          <div className='mx-2.5'>
            <label htmlFor={AttributeFilters_AttributePattern_TextInput_id}>Attribute Pattern</label>
            <br />
            <input id={AttributeFilters_AttributePattern_TextInput_id} className='px-2 text-black' type='text' />
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
                <th className='px-10'>Type RegExp</th>
                <th className='px-10'>Attribute RegExp</th>
                <th className='px-10'>MinValue</th>
                <th className='px-10'>Score</th>
                <th className='px-10'>Enabled</th>
              </tr>
            </thead>
            <tbody>
              {attributeFilters.map(filter => <tr key={filter.key}>
                <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.typeRegExp.toString()}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.attributeRegExp.toString()}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.minValue}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2 text-center'>
                  <input checked={filter.isEnabled} onChange={handle_AttributeFilters_Enabled_checkbox_change} type='checkbox' value={filter.key} />
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );

    function handle_AttributeFilters_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      const attributePattern = getInputValue(AttributeFilters_AttributePattern_TextInput_id);
      if (attributePattern !== '') {
        const newFilter = new AttributeFilter(
          attributePattern,
          getNumberInputValue(AttributeFilters_MinValue_NumberInput_id),
          getNumberInputValue(AttributeFilters_Score_NumberInput_id),
          getInputValue(AttributeFilters_TypePattern_TextInput_id)
        );
        if (_attributeFilters.every(filter => filter.key !== newFilter.key)) {
          _attributeFilters.push(newFilter);
          set_attributeFilters([..._attributeFilters]);
          applyFilters_and_setScreenshots();
        }
      }
    }

    function handle_AttributeFilters_Enabled_checkbox_change(event: React.ChangeEvent<HTMLInputElement>): void {
      const filter = _attributeFilters.find(filter => filter.key === event.target.value)!;
      filter.isEnabled = event.target.checked;
      set_attributeFilters([..._attributeFilters]);
      applyFilters_and_setScreenshots();
    }
  }

  // ## DevInfo
  function DevInfo() {
    return <div className={`${outer_group_div_class} space-y-2 ${showIfTrue(AppControl_DevInfo_CheckboxInput_checked)}`}>
      <strong>{AppControl_DevInfo_text}</strong>

      <div>
        Screenshot Source:
        <ul className={ul_class}>
          <li>1080p (1920*1080)</li>
          <li>Diablo4: GAMEPLAY: Advanced Tooltip Information: Enabled</li>
          <li>Diablo4: GRAPHICS: Brightness: Default</li>
          <li>Diablo4: GRAPHICS: Font Scale: Small</li>
          <li>Xbox Series X</li>
        </ul>
      </div>

      <div>
        Environment:
        <ul className={ul_class}>
          <li>Google Chrome 120</li>
          <li>Next.js 14.0.4</li>
          <li>Node.js 20.10.0</li>
          <li>OpenCV.js 4.9.0</li>
          <li>Tesseract.js 5.0.4</li>
        </ul>
      </div>
    </div>;
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
  function NameFilters() {
    const NameFilters_NamePattern_TextInput_id = 'NameFilters_NamePattern_TextInput_id';
    const NameFilters_Score_NumberInput_id = 'NameFilters_Score_NumberInput_id';
    const NameFilters_TypePattern_TextInput_id = 'NameFilters_TypePattern_TextInput_id';

    return <div className={`${outer_group_div_class} ${showIfTrue(AppControl_NameFilters_CheckboxInput_checked)}`}>
      <strong>{AppControl_NameFilters_text}</strong>

      <div className={`${inner_group_div_class} flex flex-wrap`}>
        <div className='mr-2.5'>
          <label htmlFor={NameFilters_TypePattern_TextInput_id}>Type Pattern</label>
          <br />
          <input id={NameFilters_TypePattern_TextInput_id} className='px-2 text-black' defaultValue='.*' type='text' />
        </div>

        <div className='mx-2.5'>
          <label htmlFor={NameFilters_NamePattern_TextInput_id}>Name Pattern</label>
          <br />
          <input id={NameFilters_NamePattern_TextInput_id} className='px-2 text-black' type='text' />
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
              <th className='px-10'>Type RegExp</th>
              <th className='px-10'>Name RegExp</th>
              <th className='px-10'>Score</th>
              <th className='px-10'>Enabled</th>
            </tr>
          </thead>
          <tbody>
            {nameFilters.map(filter => <tr key={filter.key}>
              <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.typeRegExp.toString()}</code></td>
              <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.nameRegExp.toString()}</code></td>
              <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
              <td className='border border-dotted border-neutral-600 px-3 py-2 text-center'>
                <input checked={filter.isEnabled} onChange={handle_NameFilters_Enabled_checkbox_change} type='checkbox' value={filter.key} />
              </td>

            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>;

    function handle_NameFilters_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      const namePattern = getInputValue(NameFilters_NamePattern_TextInput_id);
      if (namePattern !== '') {
        const newFilter = new NameFilter(
          namePattern,
          getNumberInputValue(NameFilters_Score_NumberInput_id),
          getInputValue(NameFilters_TypePattern_TextInput_id)
        );
        if (_nameFilters.every(filter => filter.key !== newFilter.key)) {
          _nameFilters.push(newFilter);
          set_nameFilters([..._nameFilters]);
          applyFilters_and_setScreenshots();
        }
      }
    }

    function handle_NameFilters_Enabled_checkbox_change(event: React.ChangeEvent<HTMLInputElement>): void {
      const filter = _nameFilters.find(filter => filter.key === event.target.value)!;
      filter.isEnabled = event.target.checked;
      set_nameFilters([..._nameFilters]);
      applyFilters_and_setScreenshots();
    }
  }

  // ## Screenshots
  function Screenshots() {
    return screenshots.toSorted((a, b) => b.itemScore - a.itemScore).map(screenshot =>
      <div key={screenshot.key} className={outer_group_div_class}>
        <div>
          <span className={screenshot.itemScore === 0 ? 'text-neutral-700' : ''}>
            Score: <code>{screenshot.itemScore}</code>
          </span>
        </div>

        <div className={inner_group_div_class}>
          <p><strong>{screenshot.itemName}</strong></p>
          <p>{screenshot.itemType}</p>
          <p>{screenshot.itemPower}</p>
        </div>

        <div className={inner_group_div_class}>
          <div>
            <ul className={ul_class}>
              {
                screenshot.itemAttributes.map(itemAttribute =>
                  <li key={itemAttribute.key}>
                    {itemAttribute.text}
                  </li>
                )
              }
            </ul>
          </div>
        </div>

        <div className='flex flex-wrap'>
          <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_InputImage_CheckboxInput_checked)}`}>
            <strong>{ViewControl_InputImage_text}</strong>
            <ul className={ul_class}>
              <li>Data Last Modified Timestamp: {screenshot.screenshotFile_lastModified_timestamp}</li>
              <li>Data Name: {screenshot.screenshotFile_name}</li>
              <li>Data Size: {screenshot.screenshotFile_size}</li>
            </ul>
            <div>
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img id={screenshot.inputImage_image_id} className='max-w-none' alt={screenshot.key} />}
            </div>
          </div>

          <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_InputImage_afterBrightnessThreshold_CheckboxInput_checked)}`}>
            <strong>{ViewControl_InputImage_afterBrightnessThreshold_text}</strong>
            <ul className={ul_class}>
              <li>{ImageProcessorControl_InputImageBrightnessThreshold_text}: {screenshot.imageProcessor_InputImageBrightnessThreshold}</li>
            </ul>
            <div>
              <canvas id={screenshot.inputImage_afterBrightnessThreshold_canvas_id} />
            </div>
          </div>

          <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_InputImage_afterItemImageDetection_CheckboxInput_checked)}`}>
            <strong>{ViewControl_InputImage_afterItemImageDetection_text}</strong>
            <ul className={ul_class}>
              <li>{ImageProcessorControl_ItemImageMinWidth_text}: {screenshot.imageProcessor_ItemImageMinWidth}</li>
              <li>{ImageProcessorControl_ItemImageMaxWidth_text}: {screenshot.imageProcessor_ItemImageMaxWidth}</li>
              <div className={inner_group_div_class}>
                <p>Candidates:</p>
                <ul className={ul_class}>
                  {screenshot.itemImage_data_candidates.map(candidate => <li key={`${screenshot.itemImage_data_id} ${candidate.key}`}>
                    <span className={screenshot.itemImage_data_bestCandidate.key === candidate.key ? 'font-bold' : ''}>{candidate.key}</span>
                  </li>
                  )}
                </ul>
              </div>
            </ul>
            <div>
              <canvas id={screenshot.inputImage_afterItemImageDetection_canvas_id} />
            </div>
          </div>

          <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_ItemImage_CheckboxInput_checked)}`}>
            <strong>{ViewControl_ItemImage_text}</strong>
            <div>
              <canvas id={screenshot.itemImage_canvas_id} />
            </div>
          </div>

          <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_TextImage_CheckboxInput_checked)}`}>
            <strong>{ViewControl_TextImage_text}</strong>
            <ul className={ul_class}>
              <li>{ImageProcessorControl_ItemPictureHeight_text}: {screenshot.imageProcessor_ItemPictureHeight}</li>
              <li>{ImageProcessorControl_ItemPictureWidth_text}: {screenshot.imageProcessor_ItemPictureWidth}</li>
              <li>{ImageProcessorControl_TextImageBorderTrimSize_text}: {screenshot.imageProcessor_TextImageBorderTrimSize}</li>
              <li>{ImageProcessorControl_TextImageCornerTrimSize_text}: {screenshot.imageProcessor_TextImageCornerTrimSize}</li>
            </ul>
            <div>
              <canvas id={screenshot.textImage_canvas_id} />
            </div>
          </div>

          <div className={`${inner_group_div_class} ${showIfTrue(ViewControl_Text_CheckboxInput_checked)}`}>
            <strong>{ViewControl_Text_text}</strong>
            <ul className={ul_class}>
              <li>Confidence: {screenshot.text_data_confidence}</li>
            </ul>
            <pre>
              {screenshot.text_data_text}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  // ## StatusReport
  function StatusReport() {
    const card_div_class = 'border-2 border-dotted border-neutral-500 m-2.5 p-2.5 rounded-lg';

    const processingScreenshots = screenshots.filter(screenshot => screenshot.isProcessing);
    const processingScreenshots_Image = processingScreenshots.filter(screenshot => screenshot.isProcessing_Image);
    const processingScreenshots_Text = processingScreenshots.filter(screenshot => screenshot.isProcessing_Text);

    const processedScreenshots = screenshots.filter(screenshot => !screenshot.isProcessing);
    const averageTime = processedScreenshots.length > 0 ? Math.round(processedScreenshots.reduce((totalTime, processedScreenshot) => totalTime + processedScreenshot.processTime, 0) / processedScreenshots.length) / 1000 : 'N/A';
    const averageTime_Image = processedScreenshots.length > 0 ? Math.round(processedScreenshots.reduce((totalTime, processedScreenshot) => totalTime + processedScreenshot.processTime_Image, 0) / processedScreenshots.length) / 1000 : 'N/A';
    const averageTime_Text = processedScreenshots.length > 0 ? Math.round(processedScreenshots.reduce((totalTime, processedScreenshot) => totalTime + processedScreenshot.processTime_Text, 0) / processedScreenshots.length) / 1000 : 'N/A';
    const lowConfidence = processedScreenshots.filter(screenshot => screenshot.itemImage_data_candidates.length === 0);

    return <div className={`${outer_group_div_class} ${showIfTrue(AppControl_StatusReport_CheckboxInput_checked)}`}>
      <strong>{AppControl_StatusReport_text}</strong>

      <div className={card_div_class}>
        Total <code>{screenshots.length}</code>

        <div className='flex flex-wrap'>
          <div className={`${card_div_class} ${processingScreenshots.length > 0 ? 'border-yellow-500' : ''}`}>
            <span className={`${processingScreenshots.length > 0 ? 'text-yellow-500' : ''}`}>Processing <code>{processingScreenshots.length}</code></span>

            <div className={`${card_div_class} ${processingScreenshots_Image.length > 0 ? 'border-yellow-500' : ''}`}>
              <span className={`${processingScreenshots_Image.length > 0 ? 'text-yellow-500' : ''}`}>Image <code>{processingScreenshots_Image.length}</code></span>
            </div>

            <div className={`${card_div_class} ${processingScreenshots_Text.length > 0 ? 'border-yellow-500' : ''}`}>
              <span className={`${processingScreenshots_Text.length > 0 ? 'text-yellow-500' : ''}`}>Text <code>{processingScreenshots_Text.length}</code></span>
            </div>
          </div>

          <div className={card_div_class}>
            Processed <code>{processedScreenshots.length}</code>

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
    const Tutorial_AttributeFilters_CheckboxInput_id = 'Tutorial_AttributeFilters_CheckboxInput_id';
    const Tutorial_NameFilters_CheckboxInput_id = 'Tutorial_NameFilters_CheckboxInput_id';
    const Tutorial_TypeFilters_CheckboxInput_id = 'Tutorial_TypeFilters_CheckboxInput_id';

    return (
      <div className={`${outer_group_div_class} space-y-4 ${showIfTrue(AppControl_Tutorial_CheckboxInput_checked)}`}>
        <span><strong>{AppControl_Tutorial_text}</strong> -- Start Here!</span>

        <div>
          <ol className={`${ol_class} space-y-2`}>
            <li>
              <button className='bg-blue-700 font-bold hover:bg-blue-600 mx-3 my-1 px-2 py-1 rounded-lg text-neutral-200' onClick={handle_Screenshots_LoadDemo_button_click}>Click Here to Load the Demo</button>
              <span className='text-neutral-500'>-- This directly loads demo screenshots <code><a className='underline' href='/images/demo-screenshot-01.jpg'>1</a> <a className='underline' href='/images/demo-screenshot-02.jpg'>2</a> <a className='underline' href='/images/demo-screenshot-03.jpg'>3</a> <a className='underline' href='/images/demo-screenshot-04.jpg'>4</a> <a className='underline' href='/images/demo-screenshot-05.jpg'>5</a></code>; and should take only a few seconds to process.</span>
            </li>

            <li>
              Click to enable
              <span className='border-2 border-dotted border-neutral-600 m-2 px-2 py-1 rounded-lg'>
                <input id={Tutorial_AttributeFilters_CheckboxInput_id} className='mr-5' checked={AppControl_AttributeFilters_CheckboxInput_checked} onChange={event => set_AppControl_AttributeFilters_CheckboxInput_checked(event.target.checked)} type='checkbox' />
                <label htmlFor={Tutorial_AttributeFilters_CheckboxInput_id}>{AppControl_AttributeFilters_text}</label>
              </span>
              <span className='text-neutral-500'>-- This checkbox (and other controls) can also be found under <code>App Control</code> at the top-left corner.</span>
            </li>

            <li>
              Let&apos;s add an Attribute Filter.
              Under <em><strong>Attribute Filters</strong></em>,

              <ul className={ul_class}>
                <li>For &ldquo;<em>Type Pattern</em>&rdquo;, enter the word <code><strong>focus</strong></code></li>

                <li>For &ldquo;<em>Attribute Pattern</em>&rdquo;, enter the word <code><strong>cooldown</strong></code></li>

                <li>For &ldquo;<em>MinValue</em>&rdquo;, enter <code><strong>5</strong></code></li>

                <li>For &ldquo;<em>Score</em>&rdquo;, enter <code><strong>10</strong></code></li>
              </ul>
            </li>

            <li>
              Click the button <em><strong>Add Filter</strong></em>.

              <ul className={ul_class}>
                <li>Notice that <code className='text-yellow-300'>GHOUL HEIRLOOM</code> is now assigned a score of <code>10</code> and sorted first (leftmost) -- This is because:</li>

                <li><code className='text-yellow-300'>GHOUL HEIRLOOM</code> is an &ldquo;Ancestral Rare Focus&rdquo;, which matches &ldquo;<em>Type Pattern</em>&rdquo; <code><strong>focus</strong></code>.</li>

                <li><code className='text-yellow-300'>GHOUL HEIRLOOM</code>&apos;s &ldquo;<code><strong>7.0% Cooldown Reduction</strong></code>&rdquo; attribute matches &ldquo;<em>Attribute Pattern</em>&rdquo; <code><strong>cooldown</strong></code> and &ldquo;<code><strong>7.0</strong></code>&rdquo; is greater than or equal to &ldquo;<em>MinValue</em>&rdquo; <code><strong>5</strong></code>.</li>

                <li>On the other hand, <code className='text-orange-500'>AMULET OF DISOBEDIENCE</code> (with an attribute of &ldquo;<code><strong>9.2% Cooldown Reduction</strong></code>&rdquo;) still has a score of <code>0</code> because it is an Amulet.</li>
              </ul>
            </li>

            <li>
              Download additional demo screenshots: <code><a className='underline' href='/images/demo-screenshot-06.jpg'>6</a> <a className='underline' href='/images/demo-screenshot-07.jpg'>7</a> <a className='underline' href='/images/demo-screenshot-08.jpg'>8</a> <a className='underline' href='/images/demo-screenshot-09.jpg'>9</a> <a className='underline' href='/images/demo-screenshot-10.jpg'>10</a></code>;
              and load them from disk: <input className='file:bg-blue-700 file:border-0 file:font-bold file:hover:bg-blue-600 file:px-2 file:py-1 file:rounded-lg file:text-neutral-200 w-32 text-black' accept='image/*' multiple onChange={handle_AppControl_LoadScreenshots_FileInput_change} type='file' />
              <span className='text-neutral-500'>-- This file input (and other controls) can also be found under <code>App Control</code> at the top-left corner.</span>
            </li>

            <li>
              Let&apos;s add another Attribute Filter.
              Under <em><strong>Attribute Filters</strong></em>,

              <ul className={ul_class}>
                <li>For &ldquo;<em>Type Pattern</em>&rdquo;, enter the characters <code><strong>.*</strong></code> (a dot followed by an asterisk)</li>

                <li>For &ldquo;<em>Attribute Pattern</em>&rdquo;, enter the word <code><strong>mana cost</strong></code></li>

                <li>For &ldquo;<em>MinValue</em>&rdquo;, enter <code><strong>5</strong></code></li>

                <li>For &ldquo;<em>Score</em>&rdquo;, enter <code><strong>20</strong></code></li>
              </ul>
            </li>

            <li>
              Click the button <em><strong>Add Filter</strong></em>

              <ul className={ul_class}>
                <li>Notice that amulets <code className='text-orange-500'>AMULET OF DISOBEDIENCE</code>, <code className='text-yellow-300'>HERALD FLESH</code> and boots <code className='text-yellow-300'>PAIN HOOVES</code> are now each assigned a score of <code>20</code> because of their &ldquo;<code><strong>Mana Cost Reduction</strong></code>&rdquo; attributes.</li>

                <li>The RegExp pattern <code><strong>.*</strong></code> (a dot followed by an asterisk) matches any string, so this new filter is applied to all types of items.</li>
              </ul>
            </li>

            <li>
              Feel free to experiment with the
              <span className='border-2 border-dotted border-neutral-600 m-2 px-2 py-1 rounded-lg'>
                <input id={Tutorial_NameFilters_CheckboxInput_id} className='mr-5' checked={AppControl_NameFilters_CheckboxInput_checked} onChange={event => set_AppControl_NameFilters_CheckboxInput_checked(event.target.checked)} type='checkbox' />
                <label htmlFor={Tutorial_NameFilters_CheckboxInput_id}>{AppControl_NameFilters_text}</label>
              </span>
              and
              <span className='border-2 border-dotted border-neutral-600 m-2 px-2 py-1 rounded-lg'>
                <input id={Tutorial_TypeFilters_CheckboxInput_id} className='mr-5' checked={AppControl_TypeFilters_CheckboxInput_checked} onChange={event => set_AppControl_TypeFilters_CheckboxInput_checked(event.target.checked)} type='checkbox' />
                <label htmlFor={Tutorial_TypeFilters_CheckboxInput_id}>{AppControl_TypeFilters_text}</label>
              </span>
              <span className='text-neutral-500'>-- These checkboxes (and other controls) can also be found under <code>App Control</code> at the top-left corner.</span>
              .
            </li>
          </ol>
        </div >

        <div className={`${inner_group_div_class} space-y-4`}>
          <div>
            Thank you for trying out D4pi -- a free, safety-first, open-source, fan-made, &ldquo;Diablo4 Item Filter&rdquo;.
          </div>

          <div>
            Feedback is the best way to help D4pi out.  <code className='mx-2'><a className='underline' href='https://discord.gg/sxUMgj3VcA'>Discord</a> | <a className='underline' href='https://github.com/d4pi/web-app'>GitHub</a> | <a className='underline' href='https://www.reddit.com/r/D4pi/'>Reddit</a></code>  Thank you!
          </div>
        </div>
      </div >
    );

    function handle_Screenshots_LoadDemo_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      waitForAppInitialization_then_processDemoScreenshot(-1, 'Demo Screenshot 01', 693354, '/images/demo-screenshot-01.jpg');
      waitForAppInitialization_then_processDemoScreenshot(-1, 'Demo Screenshot 02', 640421, '/images/demo-screenshot-02.jpg');
      waitForAppInitialization_then_processDemoScreenshot(-1, 'Demo Screenshot 03', 621025, '/images/demo-screenshot-03.jpg');
      waitForAppInitialization_then_processDemoScreenshot(-1, 'Demo Screenshot 04', 612918, '/images/demo-screenshot-04.jpg');
      waitForAppInitialization_then_processDemoScreenshot(-1, 'Demo Screenshot 05', 643168, '/images/demo-screenshot-05.jpg');
    }
  }

  // ## TypeFilters
  function TypeFilters() {
    const TypeFilters_TypePattern_TextInput_id = 'TypeFilters_TypePattern_TextInput_id';
    const TypeFilters_Score_NumberInput_id = 'TypeFilters_Score_NumberInput_id';

    return (
      <div className={`${outer_group_div_class} ${showIfTrue(AppControl_TypeFilters_CheckboxInput_checked)}`}>
        <strong>{AppControl_TypeFilters_text}</strong>

        <div className={`${inner_group_div_class} flex flex-wrap`}>
          <div className='mr-2.5'>
            <label htmlFor={TypeFilters_TypePattern_TextInput_id}>Type Pattern</label>
            <br />
            <input id={TypeFilters_TypePattern_TextInput_id} className='px-2 text-black' defaultValue='.*' type='text' />
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
                <th className='px-10'>Type RegExp</th>
                <th className='px-10'>Score</th>
                <th className='px-10'>Enabled</th>
              </tr>
            </thead>
            <tbody>
              {typeFilters.map(filter => <tr key={filter.key}>
                <td className='border border-dotted border-neutral-600 px-3 py-2'><code>{filter.typeRegExp.toString()}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2 text-right'><code>{filter.score}</code></td>
                <td className='border border-dotted border-neutral-600 px-3 py-2 text-center'>
                  <input checked={filter.isEnabled} onChange={handle_TypeFilters_Enabled_checkbox_change} type='checkbox' value={filter.key} />
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );

    function handle_TypeFilters_AddFilter_button_click(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      const typePattern = getInputValue(TypeFilters_TypePattern_TextInput_id);
      if (typePattern !== '') {
        const newFilter = new TypeFilter(
          getNumberInputValue(TypeFilters_Score_NumberInput_id),
          typePattern
        );
        if (_typeFilters.every(filter => filter.key !== newFilter.key)) {
          _typeFilters.push(newFilter);
          set_typeFilters([..._typeFilters]);
          applyFilters_and_setScreenshots();
        }
      }
    }

    function handle_TypeFilters_Enabled_checkbox_change(event: React.ChangeEvent<HTMLInputElement>): void {
      const filter = _typeFilters.find(filter => filter.key === event.target.value)!;
      filter.isEnabled = event.target.checked;
      set_typeFilters([..._typeFilters]);
      applyFilters_and_setScreenshots();
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

  function applyFilters_and_setScreenshots(): void {
    _screenshots.forEach(screenshot => {
      screenshot.itemScore = 0;
      _nameFilters.forEach(filter => {
        if (filter.isEnabled && filter.typeRegExp.test(screenshot.itemType) && filter.nameRegExp.test(screenshot.itemName)) {
          screenshot.itemScore += filter.score;
        }
      });
      _typeFilters.forEach(filter => {
        if (filter.isEnabled && filter.typeRegExp.test(screenshot.itemType)) {
          screenshot.itemScore += filter.score;
        }
      });
      _attributeFilters.forEach(filter => {
        if (filter.isEnabled && filter.typeRegExp.test(screenshot.itemType)) {
          screenshot.itemAttributes.forEach(attribute => {
            if (filter.attributeRegExp.test(attribute.text) && filter.minValue <= attribute.value) {
              screenshot.itemScore += filter.score;
            }
          });
        }
      });
    });
    set_screenshots([..._screenshots]);
  }

  function getHtmlElement<T extends HTMLElement>(htmlElement_id: string) { return document.getElementById(htmlElement_id) as T; }

  function getInputValue(input_id: string): string { return getHtmlElement<HTMLInputElement>(input_id).value; }

  function getNumberInputValue(numberInput_id: string): number { return Number(getInputValue(numberInput_id)); }

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
          const newScreenshot = new Screenshot(
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
          if (_screenshots.some(screenshot => screenshot.key === newScreenshot.key)) {
            ++_discardedScreenshots_count;
            set_discardedScreenshots_count(_discardedScreenshots_count);
          } else {
            _screenshots.push(newScreenshot);
            set_screenshots([..._screenshots]);
            const screenshotFileReader = new FileReader();
            screenshotFileReader.onload = () => {
              const screenshotDataUrl = screenshotFileReader.result as string;
              waitForScreenshotsRendering_then_initializeScreenshotInputImage(newScreenshot, screenshotDataUrl);
            };
            screenshotFileReader.readAsDataURL(screenshotFile);
          }
        });
      }
    }
  }

  function isAppInitialized(): boolean { return _isCodeLoaded && _isOpencvRuntimeInitialized; }

  function showIfTrue(b: boolean): string { return b ? '' : 'hidden'; }

  function waitForAppInitialization_then_processDemoScreenshot(demoScreenshot_lastModified_timestamp: number, demoScreenshot_name: string, demoScreenshot_size: number, demoScreenshot_url: string): void {
    if (isAppInitialized()) {
      processDemoScreenshot();
    } else {
      setTimeout(() => waitForAppInitialization_then_processDemoScreenshot(demoScreenshot_lastModified_timestamp, demoScreenshot_name, demoScreenshot_size, demoScreenshot_url), defaultTimeout);
    }

    function processDemoScreenshot(): void {
      const newScreenshot = new Screenshot(
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
      if (_screenshots.some(screenshot => screenshot.key === newScreenshot.key)) {
        ++_discardedScreenshots_count;
        set_discardedScreenshots_count(_discardedScreenshots_count);
      } else {
        _screenshots.push(newScreenshot);
        set_screenshots([..._screenshots]);
        waitForScreenshotsRendering_then_initializeScreenshotInputImage(newScreenshot, demoScreenshot_url);
      }
    }
  }

  function waitForScreenshotsRendering_then_initializeScreenshotInputImage(screenshot: Screenshot, screenshotInputImageUrl: string): void {
    if (isScreenshotsRendered()) {
      initializeScreenshotInputImage();
    } else {
      setTimeout(() => waitForScreenshotsRendering_then_initializeScreenshotInputImage(screenshot, screenshotInputImageUrl), defaultTimeout);
    }

    function isScreenshotsRendered(): boolean {
      return (
        htmlElementExists(screenshot.inputImage_afterBrightnessThreshold_canvas_id)
        && htmlElementExists(screenshot.inputImage_afterItemImageDetection_canvas_id)
        && htmlElementExists(screenshot.inputImage_image_id)
        && htmlElementExists(screenshot.itemImage_canvas_id)
        && htmlElementExists(screenshot.textImage_canvas_id)
      );

      function htmlElementExists(htmlElement_id: string): boolean { return getHtmlElement(htmlElement_id) !== null; }
    }

    function initializeScreenshotInputImage(): void {
      getHtmlElement<HTMLImageElement>(screenshot.inputImage_image_id).src = screenshotInputImageUrl;
      getHtmlElement<HTMLImageElement>(screenshot.inputImage_image_id).decode().then(() => processScreenshotInputImage());

      function processScreenshotInputImage(): void {
        screenshot.start_Processing_Image();
        _fromInputImage_toTextImage(
          screenshot.inputImage_afterBrightnessThreshold_canvas_id,
          screenshot.inputImage_afterItemImageDetection_canvas_id,
          getHtmlElement<HTMLImageElement>(screenshot.inputImage_image_id),
          screenshot.itemImage_canvas_id,
          screenshot.itemImage_data_id,
          screenshot.textImage_canvas_id,
          screenshot.imageProcessor_InputImageBrightnessThreshold,
          screenshot.imageProcessor_ItemImageMaxWidth,
          screenshot.imageProcessor_ItemImageMinWidth,
          screenshot.imageProcessor_ItemPictureHeight,
          screenshot.imageProcessor_ItemPictureWidth,
          screenshot.imageProcessor_TextImageBorderTrimSize,
          screenshot.imageProcessor_TextImageCornerTrimSize
        );
        screenshot.end_Processing_Image();
        set_screenshots([..._screenshots]);

        screenshot.start_Processing_Text();
        _fromImage_toText(
          screenshot.text_data_id,
          getHtmlElement<HTMLCanvasElement>(screenshot.textImage_canvas_id)
        );
        waitForScreenshotTextDataInitialization_then_processScreenshotTextData();

        function waitForScreenshotTextDataInitialization_then_processScreenshotTextData(): void {
          if (isScreenshotTextDataInitialized()) {
            processScreenshotTextData();
          } else {
            setTimeout(() => waitForScreenshotTextDataInitialization_then_processScreenshotTextData(), defaultTimeout);
          }

          function isScreenshotTextDataInitialized(): boolean { return screenshot.text_data_exists; }

          function processScreenshotTextData(): void {
            screenshot.end_Processing_Text();
            screenshot.process_Text_Data();
            applyFilters_and_setScreenshots();
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

        {Tutorial()}

        {AttributeFilters()}

        {ImageProcessorControl()}

        {NameFilters()}

        {StatusReport()}

        {TypeFilters()}

        {ViewControl()}

        {DevInfo()}
      </div>

      <div className='flex flex-wrap'>
        {Screenshots()}
      </div>
    </main>
  </>;
}
