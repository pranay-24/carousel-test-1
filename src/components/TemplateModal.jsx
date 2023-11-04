import React, {useState, useContext} from 'react'
import {  Dialog } from '@headlessui/react'
import { SlideContext } from './carousel/CarouselState'

export default function TemplateModal({show, closeModal}) {

    const { selectedColor } = useContext(SlideContext);
  return (
    
    <div >
          <div className="flex justify-center">



<Dialog className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-50" open={show} onClose={closeModal}>
<Dialog.Panel className="bg-white shadow-lg rounded-md p-4">
<Dialog.Title className="bg-purple-300 p-2 mb-4 text-lg text-center">
<b>Choose Template</b>
</Dialog.Title>
<Dialog.Description className="text-center">
Please choose a template from below options.
</Dialog.Description>

<div>
<SelectorGrid />
</div>
{/* <p>{selectedColor.background}</p> */}
<p>Sample text </p>
<div className="mt-3" style={{background:selectedColor.background , color: selectedColor.fontColor1}}>
<span style={{color:selectedColor.fontColor2}}>Hello</span>
<span>World</span>
</div>

<div className="flex justify-end mt-4">
<button className="px-4 py-2 bg-purple-300 rounded-md text-white" onClick={closeModal}>Ok</button>
</div>
</Dialog.Panel>
</Dialog>
</div>
    </div>
  )
}

const SelectorBox = ({ background, fontColor1, fontColor2 }) => {
    const boxStyle = {
      backgroundColor: background,
      color: fontColor1,
    };
    const { selectBox } = useContext(SlideContext);
    return (
      <div
        className="box w-[50px] h-[50px] cursor-pointer active:border-purple-500 active-border focus:border focus:border-purple-500 "
        style={boxStyle}
        onClick={() => {selectBox(background, fontColor1, fontColor2 )
     //console.log(boxStyle)
    }}
      >
        <span style={{ color: fontColor2 }}>A</span>
        <span>b</span>
      </div>
    );
  };

  const SelectorGrid = ({ selectBox }) => {
    const boxesData = [
     
      { background: '#B36BF7', fontColor1: '#FFFFFF', fontColor2: '#000000' },
      { background: '#EB546F', fontColor1: '#FFFFFF', fontColor2: '#220257' },
      { background: '#56a3f5', fontColor1: '#ffffff', fontColor2: '#06247f' },
      { background: '#1a1d29', fontColor1: '#e6e6e6', fontColor2: '#c5c5ff' },
      { background: '#ffffff', fontColor1: '#231b54', fontColor2: '#ee834e' },
      { background: '#dde5e7', fontColor1: '#67727e', fontColor2: '#d4674c' },
      { background: '#f6f0f0', fontColor1: '#0567a8', fontColor2: '#60e3d5' },
      { background: '#F1EDDC', fontColor1: '#474747', fontColor2: '#F8AFA6' },
      { background: '#D6DBB2', fontColor1: '#3C3C3C', fontColor2: '#e88411' },
      { background: '#F9E2D2', fontColor1: '#2C2C2C', fontColor2: '#8491C3' },
      { background: '#280647', fontColor1: '#b3aee9', fontColor2: '#96f7d2' },
      { background: '#1e140f', fontColor1: '#e6d2b1', fontColor2: '#ff9a8d' },
      { background: '#173d4e', fontColor1: '#e1f1f1', fontColor2: '#ffb347' },
      { background: '#674da0', fontColor1: '#ffffff', fontColor2: '#fac318' },
      { background: '#f3e5f5', fontColor1: '#2b1a30', fontColor2: '#ff8a80' },
      { background: '#e1f5fe', fontColor1: '#23395b', fontColor2: '#ff8a65' },
      { background: '#2b2b2b', fontColor1: '#f7f7f7', fontColor2: '#f44336' },
      { background: '#eeeeee', fontColor1: '#212121', fontColor2: '#fbc02d' },
      { background: '#f1f8e9', fontColor1: '#37474f', fontColor2: '#ff9800' },

      // Add more boxes as needed
      
    ];
  
    return (
      <div className="grid grid-cols-4 gap-10">
        {boxesData.map((box, index) => (
          <SelectorBox
            key={index}
            background={box.background}
            fontColor1={box.fontColor1}
            fontColor2={box.fontColor2}
          />
        ))}
      </div>
    );
  };
