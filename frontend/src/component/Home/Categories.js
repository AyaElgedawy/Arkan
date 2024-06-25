
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Css/Categories.css'
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../Store/Actions/CategoryAction';
import axios from 'axios';

function Categories(){
  const dispatch = useDispatch();
  const category = useSelector((state) => state.combineCategory.category);
  
    
    useEffect(() => {
     
      dispatch(getCategory());
  }, [dispatch]);

 
  const fetchCategories = () => {
    // Implement your own logic to fetch best seller products
    // For this example, we'll use a hardcoded array
    const category = [
      {
        id: 1,
        name: 'Category 1',
        image: './images/a3.jpg',
      },
      {
        id: 2,
        name: 'Category 2',
        image: './images/a.jpg',
      },
      {
        id: 3,
        name: 'Category 3',
        image: './images/a3.jpg',
      },
      {
        id: 4,
        name: 'Category 4',
        image: './images/a3.jpg',
      },
      {
        id: 5,
        name: 'Category 5',
        image: './images/a3.jpg',
      },
      {
        id: 6,
        name: 'Category 5',
        image: './images/a3.jpg',
      },
      {
        id: 7,
        name: 'Category 5',
        image: './images/a3.jpg',
      },
    ];
    // setCategories(category);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  
    
    return(
        <>
            <div className="wrapper" style={{
                backgroundImage: 'url("./images/bg.png")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '800px',
                width: '100%',}}>
            <div className="container">
            <div className="row box-tesimonial2 ApRow  has-bg bg-fullwidth-container" >

            <div className="col-sm-12 col-xs-12 col-sp-12 col-md-12 col-lg-12 col-xl-12  ApColumn ">

            <div className="block block_carousel exclusive appagebuilder ApBlockCarousel">
            <div className="block_content">

            <div className="owl-row">
            <div className="timeline-wrapper clearfix prepare" data-item="3" data-xl="3" data-lg="3" data-md="3" data-sm="2" data-m="2">
            <div className="timeline-parent">
            <div className="timeline-item">
            <div className="animated-background">
            <div className="background-masker content-top"></div>
            <div className="background-masker content-second-line"></div>
            <div className="background-masker content-third-line"></div>
            <div className="background-masker content-fourth-line"></div>
            </div>
            </div>
            </div>
            <div className="timeline-parent">
            <div className="timeline-item">
            <div className="animated-background">
            <div className="background-masker content-top"></div>
            <div className="background-masker content-second-line"></div>
            <div className="background-masker content-third-line"></div>
            <div className="background-masker content-fourth-line"></div>
            </div>
            </div>
            </div>
            <div className="timeline-parent">
            <div className="timeline-item">
            <div className="animated-background">
            <div className="background-masker content-top"></div>
            <div className="background-masker content-second-line"></div>
            <div className="background-masker content-third-line"></div>
            <div className="background-masker content-fourth-line"></div>
            </div>
            </div>
            </div>
            </div>
            <div id="carousel-3212062330" className="owl-carousel owl-theme owl-loading" style={{position: "relative",transition: "all 0.75s ease"}}>
            <div className="item">
            <div className="block-carousel-container">
            <div className="left-block">
            <div className="block-carousel-image-container image">
            <div className="ap-more-info" data-id="4"></div>
            <a title="MEN'S Suits" href="#">
            <img className="img-fluid" src="logo512.png" alt="MEN&#039;S Suits" />
            <div className="title">MEN'S Suits</div>
            <div className="descript">Shop All</div>
            </a>
            </div>
            </div>
            </div>
            </div>
           
            <Carousel
      responsive={responsive}
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showDots={false}
      infinite={true}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
    >
      {category.map((cat,index) => (
        <div key={index} className='carousel-item' style={{margin: '10px'}} >
        <div className="block-carousel-container">
        <div className="left-block">
        <div className="block-carousel-image-container image">
        <div className="ap-more-info" data-id="4"></div>
        <a title="MEN'S Suits" href="#">
        <img className="img-fluid" src={cat.image} />
        <div className="title">{cat.name}</div>
        <div className="descript">Shop All</div>
        </a>
        </div>
        </div>
        </div>
        </div>
        
      ))}
    </Carousel>
    
            </div>
            </div>
             </div>
            </div>
            </div> 
            </div>
            </div>
            </div>
        </>
    )
}
export default Categories