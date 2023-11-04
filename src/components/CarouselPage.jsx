import React, { useState, useEffect } from "react";

import { StarIcon } from "@heroicons/react/20/solid";
import html2canvas from "html2canvas";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import CarouselSlides from "./CarouselSlides";
import {
  fetchTitleAsync,
  fetchDescriptionAsync,
  fetchMockData,
  selectTitle,
  selectDescription,
  updateSlides,
  setCurrentSlideIndex,
  updateTitle,
  updateDescription,
} from "./carousel/AidataSlice";
import TemplateModal from "./TemplateModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CarouselPage = () => {
  const colors = [
    { name: "white", class: "bg-white" },
    { name: "grey", class: "bg-gray-200" },
    { name: "black", class: "bg-black" },
  ];

  const [inputData, setInputData] = useState({
    titleInput: "",
    descriptionInput: "",
  });

  const dispatch = useDispatch();
  const currentSlideIndex = useSelector((state) => state.Aidata.currentIndex);
  const titleData = useSelector((state) =>
    selectTitle(state, currentSlideIndex)
  );
  const descriptionData = useSelector((state) =>
    selectDescription(state, currentSlideIndex)
  );
  const slides = useSelector((state) => state.Aidata.slides);

  const [titleText, setTitleText] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePlacementClass, setImagePlacementClass] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(true);
  const [isTitleChecked, setIsTitleChecked] = useState(true);
  const [isDescriptionChecked, setIsDescriptionChecked] = useState(true);
  const [activeOption, setActiveOption] = useState("");
  const [templateModalShow, setTemplateModalShow] = useState(false);

  const takeScreenshot = async (element) => {
    try {
      const canvas = await html2canvas(element);
      // Convert the canvas to an image data URL
      const dataUrl = canvas.toDataURL("image/png");

      // Create a link to download the image
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "screenshot.png";
      a.click();
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  };

  const handleImageDownload = () => {
    const elementToCapture = document.getElementById("carousel_slide");
    takeScreenshot(elementToCapture);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleTitleChange = (e) => {
    // const updatedSlides = [...slides];
    // updatedSlides[currentSlideIndex].title = e.target.value;
    // updateSlides(updatedSlides);

    dispatch(
      updateTitle({ index: currentSlideIndex, newTitle: e.target.value })
    );
  };

  const handleDescriptionChange = (e) => {
    // const updatedSlides = [...slides];
    // updatedSlides[currentSlideIndex].description = e.target.value;
    // updateSlides(updatedSlides);

    dispatch(
      updateDescription({
        index: currentSlideIndex,
        newDescription: e.target.value,
      })
    );
  };

  // const handleSubmit = () => {
  //   const specificInput = {
  //     inputs: inputData.titleInput,
  //   };
  //   console.log(specificInput);
  //   dispatch(fetchTitleAsync(specificInput));
  //   // console.log(textData);
  // };

  // const handleSubmit = () => {
  //   // const specificInput = {
  //   //   inputs: inputData.titleInput,
  //   // };
  //   //console.log(specificInput);
  //   //dispatch(fetchTitleAsync(specificInput));
  //   dispatch(fetchTitleAsync(inputData.titleInput));

  //   // console.log(textData);
  // };

  const handleNextSlide = () => {
    if(currentSlideIndex < (slides.length -1)){

    dispatch(setCurrentSlideIndex(currentSlideIndex + 1));
    }
  };

  const handlePreviousSlide = () => {
    if(currentSlideIndex > 0){
      dispatch(setCurrentSlideIndex(currentSlideIndex - 1));
    }
   
  };

  const handleSubmit = () => {
    dispatch(fetchMockData());
    console.log(titleData);
    console.log(descriptionData);
  };

  const handleDescriptionSubmit = () => {
    // const specificInput = {
    //   inputs: inputData.descriptionInput,
    // };
    // console.log(specificInput);
    //dispatch(fetchDescriptionAsync(specificInput));
    dispatch(fetchMockData());
    //console.log(textData);
  };

  const handleTitleCheckboxChange = () => {
    setIsTitleChecked((prev) => !prev); // Update the state when the checkbox is changed
    // console.log("title toggled")
  };

  const handleDescriptionCheckboxChange = () => {
    setIsDescriptionChecked((prev) => !prev); // Update the state when the checkbox is changed
  };

  const handleImageTextClick = (option) => {
    setActiveOption(option);
    // ... perform the specific action based on the selected option
    if (option === "justText") {
      setShowImage(false);
      setShowText(true);
      //console.log("just text clicked")
    } else if (option === "textWithImage") {
      setShowImage(true);
      setShowText(true);
    } else if (option === "justImage") {
      setShowImage(true);
      setShowText(false);
    }
  };

  const openTemplateModal = () => {
    setTemplateModalShow(true);
  };

  const closeTemplateModal = () => {
    setTemplateModalShow(false);
  };

  return (
    <>
      <button
        className="mt-10 mb-10  w-50 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => {
          handleImageDownload();
        }}
      >
        Download Slide as Image
      </button>
      <div>
        <button className="btn btn-primary" onClick={openTemplateModal}>
          Set Template
        </button>
      </div>

      <TemplateModal show={templateModalShow} closeModal={closeTemplateModal} />

      <div className="flex justify-center gap-20 items-center text-center mt-4  ">
        <button
          className="btn bg-purple-300 hover:bg-purple-400"
          onClick={handlePreviousSlide}
        >
          Previous
        </button>
        <button
          className="btn  bg-purple-300  hover:bg-purple-400"
          onClick={handleNextSlide}
        >
          Next
        </button>
      </div>

      <CarouselSlides currentSlide={currentSlideIndex} />
      <section id="carousel_slide ">
        <div className="flex-col w-[1000px]">
          {/* {
            // isTitleChecked && showText && titleText &&
            isTitleChecked && showText && (
              <div>
                {titleData && <p className="font-sans text-lg">{titleData}</p>}
              </div>
            )
          } */}

          {/* {isDescriptionChecked && showText && (
            <div>
              {descriptionData && (
                <p className="font-sans text-lg">{descriptionData}</p>
              )}
            </div>
          )} */}

          <div>
            {/* {descriptionData && (
                <p className="font-sans text-lg">{descriptionData}</p>
              )} */}
          </div>
          {/* 
          {showImage && selectedImage && (
            <div
              className={classNames(
                "flex w-300 h-auto overflow-hidden ",
                imagePlacementClass
              )}
            >
              <img className={"rounded-2xl"} src={selectedImage} alt="" />
            </div>
          )} */}
        </div>
      </section>

      <section>
        <div className="w-[1000px] flex flex-shrink-0 justify-center items-center space-x-2">
          <span
            className={classNames(
              "border border-black px-5 py-1 hover:cursor-pointer",
              activeOption === "justText" ? "active:bg-gray-400" : ""
            )}
            onClick={() => handleImageTextClick("justText")}
          >
            Just Text
          </span>
          <span
            className={` border border-black px-5 py-1 active:bg-gray-400 hover:cursor-pointer ${
              activeOption === "justText" ? "active:bg-gray-400" : ""
            }`}
            onClick={() => handleImageTextClick("textWithImage")}
          >
            Text with Image
          </span>
          <span
            className={`border border-black px-5 py-1 hover:cursor-pointer ${
              activeOption === "justImage" ? "active:bg-gray-400" : ""
            }`}
            onClick={() => handleImageTextClick("justImage")}
          >
            Just Image
          </span>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className=" w-[1000px] flex items-center justify-center   rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ">
                <span>Text Options</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-[1000px] px-4 pt-4 pb-2 text-sm text-gray-500">
                <div>
                  <div className="form-check form-switch">
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Enable Title
                    </label>
                    <input
                      className="form-check-input "
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      checked={isTitleChecked}
                      onChange={handleTitleCheckboxChange}
                    />
                  </div>
                  <label htmlFor="titleInput">Enter Keywords for Title</label>
                  <input
                    className="border-grey-400 border p-2 focus:ring-1 focus:ring-blue-400"
                    type="text"
                    name="titleInput"
                    value={inputData.titleInput}
                    onChange={handleChange}
                  />
                  <button
                    className="btn border bg-purple-200 hover:cursor-pointer"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Generate Title
                  </button>
                </div>
                <div>
                  <label htmlFor="titleData">Title</label>
                  <input
                    className=" border border-grey-400  p-2 focus:ring-1 focus:ring-blue-400"
                    type="text "
                    name="titleData"
                    value={titleData}
                    onChange={handleTitleChange}
                  />
                </div>

                <div>
                  <div className="form-check form-switch">
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Enable Description
                    </label>
                    <input
                      className="form-check-input "
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      checked={isDescriptionChecked}
                      onChange={handleDescriptionCheckboxChange}
                    />
                  </div>

                  <label htmlFor="descriptionInput">
                    Enter keywords for Description
                  </label>
                  <input
                    className=" border border-grey-400  p-2 focus:ring-1 focus:ring-blue-400"
                    type="text "
                    name="descriptionInput"
                    value={inputData.descriptionInput}
                    onChange={handleChange}
                  />

                  <button
                    type="submit"
                    className="btn border bg-purple-200 hover:cursor-pointer"
                    onClick={handleDescriptionSubmit}
                  >
                    Generate Description
                  </button>
                </div>
                <div>
                  <label htmlFor="descriptionData">Description</label>
                  <input
                    className=" border border-grey-400 w-full p-2 focus:ring-1 focus:ring-blue-400"
                    type="text "
                    name="descriptionData"
                    value={descriptionData}
                    onChange={handleDescriptionChange}
                  />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-[1000px] flex items-center justify-center   rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ">
                <span>Image Options</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-[1000px] px-4 pt-4 pb-2 text-sm text-gray-500">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <div className="flex flex-shrink-0 justify-center items-center space-x-2">
                  <span
                    className=" border border-black px-5 py-1 active:bg-gray-400 hover:cursor-pointer"
                    onClick={() => {
                      setImagePlacementClass("justify-start");
                      console.log("left clicked");
                    }}
                  >
                    Left
                  </span>
                  <span
                    className=" border border-black px-5 py-1 active:bg-gray-400 hover:cursor-pointer"
                    onClick={() => setImagePlacementClass("justify-center")}
                  >
                    Center
                  </span>
                  <span
                    className=" border border-black px-5 py-1 active:bg-gray-400 hover:cursor-pointer"
                    onClick={() => setImagePlacementClass("justify-end")}
                  >
                    Right
                  </span>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </section>
    </>
  );
};

export default CarouselPage;
