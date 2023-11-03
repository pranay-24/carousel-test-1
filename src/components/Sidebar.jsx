import React, {useState, useContext} from 'react'
import {  Dialog } from '@headlessui/react'
import { slideContext } from './carousel/CarouselState'

export default function Sidebar() {
   
    let [isOpen, setIsOpen] = useState(true)
    const { selectedColor } = useContext(slideContext);
  return (
    <div className="flex justify-center">



    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
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
  <div style={{background:selectedColor.background , color: selectedColor.fontColor1}}>
    <span style={{color:selectedColor.fontColor2}}>Hello</span>
    <span>World</span>
  </div>

  <div className="flex justify-end mt-4">
    <button className="px-4 py-2 bg-purple-300 rounded-md text-white" onClick={() => setIsOpen(false)}>Cancel</button>
  </div>
</Dialog.Panel>
    </Dialog>
    </div>
  )
}


const SelectorBox = ({ background, fontColor1, fontColor2 }) => {
    const boxStyle = {
      backgroundColor: background,
      color: fontColor1,
    };
    const { selectBox } = useContext(slideContext);
    return (
      <div
        className="box w-[50px] h-[50px] cursor-pointer active:border-purple-500 active-border focus:border focus:border-purple-500 "
        style={boxStyle}
        onClick={() => {selectBox({ background, fontColor1, fontColor2 })
    // console.log(boxStyle)
    }}
      >
        <span style={{ color: fontColor2 }}>A</span>
        <span>b</span>
      </div>
    );
  };

  const SelectorGrid = ({ selectBox }) => {
    const boxesData = [
      { background: 'blue', fontColor1: 'red', fontColor2: 'green' },
      { background: 'yellow', fontColor1: 'black', fontColor2: 'white' },
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