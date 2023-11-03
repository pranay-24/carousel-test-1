import { createContext, useState } from "react";

export const slideContext = createContext();

export const CarouselState = (props)=>{

    const [selectedColor, setSelectedColor] = useState({
        background: '',
        fontColor1: '',
        fontColor2: '',
      });

      const selectBox = (background, fontColor1, fontColor2) => {
        setSelectedColor({ background, fontColor1, fontColor2 });
        //console.log(selectedColor);
      };

    return (
        <slideContext.Provider value={{ selectBox, selectedColor }}>
          {props.children}
        </slideContext.Provider>
      )
}