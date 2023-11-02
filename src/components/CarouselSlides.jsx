import React, { useState } from "react";
import CarouselSlide from "./CarouselSlide";
import {setCurrentSlideIndex } from "./carousel/AidataSlice";
import {useSelector, useDispatch} from 'react-redux';   

const CarouselPage = () => {
    const slides = useSelector((state) => state.yourSlide.slides);
    const currentSlideIndex = useSelector((state) => state.yourSlide.currentIndex);
    const dispatch = useDispatch();

  const [slides, setSlides] = useState([
    { title: "Title 1", description: "Description 1", imageUrl: "url1" },
    { title: "Title 2", description: "Description 2", imageUrl: "url2" },
    // Add more slides as needed
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    dispatch(setCurrentSlideIndex(currentSlideIndex + 1));
  };


  const handlePreviousSlide = () => {
    dispatch(setCurrentSlideIndex(currentSlideIndex - 1));
  };

  const handleTitleChange = (e) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlide].title = e.target.value;
    setSlides(updatedSlides);
  };

  const handleDescriptionChange = (e) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlide].description = e.target.value;
    setSlides(updatedSlides);
  };

  return (
    <div>
      <section id="carousel_slide">
        <div className="flex-col w-[1000px]">
          {slides.length > 0 && currentSlideIndex >= 0 && (
            <div>
              <p className="font-sans text-lg">{slides[currentSlideIndex].title}</p>
              <p className="font-sans text-lg">{slides[currentSlideIndex].description}</p>
              {slides[currentSlideIndex].imageUrl && (
                <div className={classNames("flex w-300 h-auto overflow-hidden", imagePlacementClass)}>
                  <img className={"rounded-2xl"} src={slides[currentSlideIndex].imageUrl} alt="" />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <div>
        <button onClick={handlePreviousSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default CarouselPage;