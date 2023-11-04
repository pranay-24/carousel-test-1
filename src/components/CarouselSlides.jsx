import React, { useState, useContext, useEffect } from "react";
//import CarouselSlide from "./CarouselSlide";
//import {setCurrentSlideIndex, selectSlideByIndex } from "./carousel/AidataSlice";
import { useSelector, useDispatch } from "react-redux";
import { SlideContext } from "./carousel/CarouselState";
import Sidebar from "./Sidebar";

const CarouselSlides = ({currentSlide, showImage, showText}) => {
  const { selectedColor } = useContext(SlideContext);
 // const { currentSlide } = props.currentSlide;
 //console.log(showImage, showText);
  useEffect(() => {
    // Perform actions upon selectedColor change
    // This will run every time selectedColor changes
    console.log("Selected color changed:", selectedColor);
  }, [selectedColor]);

  const slides = useSelector((state) => state.Aidata.slides);
  // const currentSlideIndex = useSelector((state) => state.Aidata.currentIndex);
  const dispatch = useDispatch();

  const classNames = (...classes) => {
    classes.filter(Boolean).join("");
  };
  
  return (
    <div>
      <section id="carousel_slide">
        <div className="flex-col w-[1000px]">
          {slides.length > 0 && currentSlide >= 0 && currentSlide !== undefined && (
            <div style={{ backgroundColor: selectedColor.background , }}>
             {showText && ( <div>
              <div>
                <p className="font-sans text-lg"
                style={{color:selectedColor.fontColor2}}
                >
                  {slides[currentSlide].title}
                </p>
              </div>
             
              <div>
                <p
                  className="font-sans text-lg"
                  style={{ color: selectedColor.fontColor1 }}
                >
                  {slides[currentSlide].description}
                </p>
              </div>
              </div> )}
              

              {showImage && slides[currentSlide].imageUrl && (
                <div className="flex w-[450px] h-auto overflow-hidden">
                  <img
                    className={"rounded-2xl w-full "}
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
