import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image from '../../assets/image.jpg'
// import image from '../../assets/image.jpg'
import { useState } from "react";

import ProductItem from "./ProductItem";
import Prev from "./slider-arrow/PrevArrow";
import Next from "./slider-arrow/NextArrow";
const imagesItem = [ProductItem,ProductItem,ProductItem,ProductItem,ProductItem]

const ProductSlider = () => {
  let [images, setImages] = useState(imagesItem);
    let settings = {
      prevArrow:<Prev/>,
      nextArrow:<Next/>,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
       
      };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {images.map((item,index)=>(
            <div className="flex gap-2" key={index}>
                <ProductItem/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProductSlider