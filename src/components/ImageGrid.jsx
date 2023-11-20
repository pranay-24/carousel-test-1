import React from 'react'
import { useSelector } from 'react-redux';

export default function ImageGrid() {
 const images = useSelector((state) => state.ImageData.images);
  const status = useSelector((state) => state.ImageData.status);
  //const images =['http://abc1','http://abc2','http://abc3','http://abc4','http://abc4','http://abc5']
//console.log(images)
  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex gap-2 overflow-x-scroll">
    {images.map((image, index) => {
     // console.log( "Image url is ", image)
      return  <ImageBox key={index} imageUrl={image} />
    }
      
     
    
    )
    }
  </div>

  )
}

export const ImageBox = ({imageUrl})=>{
  return (
    <div className="flex w-[200px] h-auto p-1 overflow-hidden rounded-lg ">
      {/* <p>{imageUrl}</p> */}
    <img
      className={"rounded-xl w-full "}
      src={imageUrl}
      alt=""
    />
  </div>
  )

}