import { createContext, useState,useEffect } from "react";

export const slideContext = createContext();

export const CarouselState = (props)=>{
 
    const [selectedColor, setSelectedColor] = useState({
        background: '',
        fontColor1: '',
        fontColor2: '',
      });
      useEffect(() => {
        //console.log(selectedColor.background);
      }, [selectedColor.background]);
      const selectBox = (sentbackground, sentfontColor1, sentfontColor2) => {
        setSelectedColor({ background:sentbackground, fontColor1:sentfontColor1, fontColor2:sentfontColor2 });
      // console.log(selectedColor.background);
      };

    return (
        <slideContext.Provider value={{ selectBox, selectedColor }}>
          {props.children}
        </slideContext.Provider>
      )
}