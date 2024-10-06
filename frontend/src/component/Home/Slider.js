// function Slider(){
//     return(
//         <div className="row box-slider ApRow  has-bg bg-boxed" data-bg=" no-repeat" style={{background: "no-repeat"}}>

//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-sp-12  ApColumn ">

//                 <div id="slideshow-form_13376883667820698" className="ApSlideShow">
//                     <div className="bannercontainer banner-fullwidth" style={{padding: "0px",margin: "0px"}}>
//                         <div className="iview iview-group-667223882941f-20">

//                             <div className="slide_config " data-leo_image="/bos_soucer_demo/themes/bos_soucer/assets/img/modules/leoslideshow/h2-slide-1.jpg" data-leo_pausetime="5000" data-leo_thumbnail="/bos_soucer_demo/themes/bos_soucer/assets/img/modules/leoslideshow/h2-slide-1.jpg" data-leo_background="image">
//                                 <div className="tp-caption  discover" data-x="375" data-y="153" data-transition="fade">

//                                 discover



//                                 </div>
//                                 <div className="tp-caption  fz-180" data-x="375" data-y="199" data-transition="fade">

//                                 Suit.



//                                 </div>
//                                 <div className="tp-caption  italic" data-x="375" data-y="457" data-transition="fade" style={{font_size:"18px",color:"#ffffff"}}>

//                                 Designed by nani .



//                                 </div>
//                             </div>

//                             <div className="slide_config " data-leo_image="/bos_soucer_demo/themes/bos_soucer/assets/img/modules/leoslideshow/h2-slide-2.jpg" data-leo_pausetime="5000" data-leo_thumbnail="/bos_soucer_demo/themes/bos_soucer/assets/img/modules/leoslideshow/h2-slide-2.jpg" data-leo_background="image">
//                                 <div className="tp-caption  discover" data-x="375" data-y="153" data-transition="fade">
//                                      discover
//                                 </div>
//                                 <div className="tp-caption  fz-180" data-x="375" data-y="199" data-transition="fade">
//                                      Suit.
//                                 </div>
//                                 <div className="tp-caption  italic" data-x="375" data-y="457" data-transition="fade" style={{font_size:"18px",color:"#ffffff"}}>
//                                     Designed by nani marquina.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//             </div> 
//         </div>
//     )
// }
// export default Slider

// src/Carousel.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const Slides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.current * -100}%);
`;

const Slide = styled.div`
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  position: relative;
`;

const Arrow = styled.div`
  font-size: 24px; 
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;

  &:hover {
    opacity: 1;
  }
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;
const DotsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: -50px
 
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#cba146' : 'black')};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    // background-color: #717171;
    background-color: #cba146;
  }`;

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const totalSlides = images.length;
    const [hover,setHover]  =useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
 const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <CarouselContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Slides current={current}>
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
          </Slide>
        ))}
      </Slides>
      <LeftArrow onClick={prevSlide}>&lt;</LeftArrow>
      <RightArrow onClick={nextSlide}>&gt;</RightArrow>
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === current}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Slider;