import { createContext, useState,useEffect } from "react";

export const SlideContext = createContext();

export const CarouselState = ({children})=>{
 
    const [selectedColor, setSelectedColor] = useState({
        background: '',
        fontColor1: '',
        fontColor2: '',
      });
      // useEffect(() => {
      //   //console.log(selectedColor.background);
      // }, [selectedColor.background]);
      
      const selectBox = (background, fontColor1, fontColor2) => {
        setSelectedColor({ background, fontColor1, fontColor2 });
      // console.log(selectedColor.background);
      };

    return (
        <SlideContext.Provider value={{ selectBox, selectedColor }}>
          {children}
        </SlideContext.Provider>
      )
}