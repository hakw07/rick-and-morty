import React from 'react';

// components
import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';
import ListCard from './ListCard';

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const List = ({ title, data, loader }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <PrevBtn/>,
        nextArrow: <NextBtn/>,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="list">
            <div className="header">
                <p className="title">{title}</p>
            </div>

            <Slider {...settings} className="sliderContent">
                {
                    !loader ?
                    (data && data.map((data) => {
                        return <ListCard data={data} key={data.id} title={title.toLowerCase()} />
                    })) : <p className="loading">Loading...</p>
                }
            </Slider>
        </div>
    );
}

export default List;