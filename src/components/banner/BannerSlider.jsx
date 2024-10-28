import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image from '../../assets/image.jpg'
import image from '../../assets/image.jpg'
import { useState } from "react";
import PrevArrow from "../slider-arrow/PrevArrow";
import NextArrow from "../slider-arrow/NextArrow";
const banerImage = [image,image,image,image,image]

const BannerSlider = () => {
  let [banner, setBanner] = useState(banerImage);
  let [dotActive, setDotActive] = useState(0);
    let settings = {
      prevArrow:<PrevArrow/>,
      nextArrow:<NextArrow/>,
        dots: false,
        beforeChange: (prev, next) => {
          setDotActive(next);
        },
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              dots:false
            }
          }
        ],
        appendDots: dots => (
          <div
            style={{
              position: 'absolute',
              bottom: '7%',
              left: '50%',
              fontSize:'0px',
              transform: 'translateX(-50%)',
              color:'green'
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
          style={
              i === dotActive 
              ? {
                width: "0px",
                padding:"7px",
                borderRadius:'50%',
                background:'red',
                boxShadow:'5px 0px 5px #222'
            } 
            : {
              width: "0px",
              padding:"7px",
              borderRadius:'50%',
              background:'#fff',
              boxShadow:'5px 0px 5px #222'
            }}
          >
          </div>
        ),
       
      };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {banner.map((item,index)=>(
            <div className="h-full" key={index}>
            <img className="h-80 w-full object-cover" src={item} alt='banner-img'/>
            {/* <div className="w-full h-40 bg-red-900"></div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BannerSlider