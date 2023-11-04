import React, { useState, useContext, useEffect } from "react";
//import CarouselSlide from "./CarouselSlide";
//import {setCurrentSlideIndex, selectSlideByIndex } from "./carousel/AidataSlice";
import { useSelector, useDispatch } from "react-redux";
import { SlideContext } from "./carousel/CarouselState";
import Sidebar from "./Sidebar";

const CarouselSlides = ({currentSlide}) => {
  const { selectedColor } = useContext(SlideContext);
 // const { currentSlide } = props.currentSlide;
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
  //   const [slides, setSlides] = useState([
  //     { title: "Title 1", description: "Description 1", imageUrl: "url1" },
  //     { title: "Title 2", description: "Description 2", imageUrl: "url2" },
  //     // Add more slides as needed
  //   ]);

  //const [currentSlide, setCurrentSlide] = useState(0);

  // const handleNextSlide = () => {
  //   dispatch(setCurrentSlideIndex(currentSlideIndex + 1));
  // };

  // const handlePreviousSlide = () => {
  //   dispatch(setCurrentSlideIndex(currentSlideIndex - 1));
  // };

  //   const handleTitleChange = (e) => {
  //     const updatedSlides = [...slides];
  //     updatedSlides[currentSlide].title = e.target.value;
  //     setSlides(updatedSlides);
  //   };

  //   const handleDescriptionChange = (e) => {
  //     const updatedSlides = [...slides];
  //     updatedSlides[currentSlide].description = e.target.value;
  //     setSlides(updatedSlides);
  //   };

  return (
    <div>
      <section id="carousel_slide">
        <div className="flex-col w-[1000px]">
          {slides.length > 0 && currentSlide >= 0 && currentSlide !== undefined && (
            <div style={{ backgroundColor: selectedColor.background }}>
              <div>
                <p className="font-sans text-lg">
                  {slides[currentSlide].title}
                </p>
              </div>
              <div></div>
              <div>
                <p
                  className="font-sans text-lg"
                  style={{ color: selectedColor.fontColor1 }}
                >
                  {slides[currentSlide].description}
                </p>
              </div>

              {slides[currentSlide].imageUrl && (
                <div className="flex w-[450px] h-auto overflow-hidden">
                  <img
                    className={"rounded-2xl w-full "}
                    src={slides[currentSlide].imageUrl}
                    alt=""
                  />
                </div>
              )}
              {console.log(slides[currentSlide].imageUrl)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CarouselSlides;
