import React, { useState, useContext, useEffect } from "react";
//import CarouselSlide from "./CarouselSlide";
//import {setCurrentSlideIndex, selectSlideByIndex } from "./carousel/AidataSlice";
import { useSelector, useDispatch } from "react-redux";
import { SlideContext } from "./carousel/CarouselState";
import Sidebar from "./Sidebar";

const CarouselSlides = ({ currentSlide, showImage, showText }) => {
  const { selectedColor } = useContext(SlideContext);
  // const { currentSlide } = props.currentSlide;
  //console.log(showImage, showText);
  // useEffect(() => {
  //   // Perform actions upon selectedColor change
  //   // This will run every time selectedColor changes
  //   //console.log("Selected color changed:", selectedColor);
  // }, [selectedColor]);

  const slides = useSelector((state) => state.Aidata.slides);
  // const currentSlideIndex = useSelector((state) => state.Aidata.currentIndex);
  const dispatch = useDispatch();

  const classNames = (...classes) => {
    classes.filter(Boolean).join("");
  };
  const [modifiedTitle, setModifiedTitle] = useState("");

  useEffect(() => {
    const thirdWord = (textElement) => {
      var words = textElement.split(" ");
    //  console.log(words)
      // Ensure there are at least three words
      if (words.length >= 3) {
        // Wrap the third word in a span with the 'highlight' class
        //console.log(selectedColor.fontColor1)
        words[2] =
        "<span style='color: " + selectedColor.fontColor2 + "'>" +
        words[2] +
        "</span>";
       // console.log(words[2]);
        textElement =   words.join(" ");
       // console.log(textElement);
      }
      return textElement;

    };

    setModifiedTitle(thirdWord(slides[currentSlide].title));

console.log(thirdWord(slides[currentSlide].title))
  }, [slides, currentSlide]);

  //const newTitle = thirdWord()
  return (
    <div>
      <section id="carousel_slide">
        <div className="flex-col w-[1000px]">
          {slides.length > 0 &&
            currentSlide >= 0 &&
            currentSlide !== undefined && (
              <div
                className="flex-col justify-center w-[500px] items-center p-3"
                style={{ backgroundColor: selectedColor.background }}
              >
               
                {showText && (
                  <div style={{ minHeight: "400px"  }}
                  
                  >
                    {slides[currentSlide].title && (
                      <div
                      className= "tracking-widest font-sans text-xl w-[500px] text-center"
                      style={{ color: selectedColor.fontColor1 }}
                      dangerouslySetInnerHTML={{ __html: modifiedTitle }}
                      />
                        
                      
                    )}

                    {slides[currentSlide].description && (
                      <div>
                        <p
                          className="tracking-wide font-sans text-lg w-[500px] text-center"
                          style={{ color: selectedColor.fontColor1 }}
                        >
                          {slides[currentSlide].description}
                        </p>
                      </div>
                    )}

                  </div>
                )}

                {showImage && slides[currentSlide].imageUrl && (
                  <div className="flex w-[450px] h-300px p-10 overflow-hidden rounded-lg ">
                    <img
                      className={"rounded-2xl w-full h-full object-cover"}
                      src={slides[currentSlide].imageUrl}
                      alt=""
                    />
                  </div>
                )}
              </div>
            )}
        </div>
      </section>
    </div>
  );
};

export default CarouselSlides;
