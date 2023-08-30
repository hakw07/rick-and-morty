import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

// components
import Character from './Character';
import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MeetTheCast = () => {
    const { characters } = useContext(AppContext);
    const navigate = useNavigate();

    const charactersData = characters[0];
    const loadingStatus = characters[1];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <PrevBtn type="cast"/>,
        nextArrow: <NextBtn type="cast"/>,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
        ]
    };

    const handleBtnClick = () => {
        navigate('/cast');
    }

    return (
        <div className="meetTheCast list">
            <div className="header">
                <p className="title">Meet the cast</p>
                <button onClick={handleBtnClick}>View All</button>
            </div>

            <Slider {...settings} className="sliderContent">
                {
                    !loadingStatus ?
                    (charactersData && charactersData.map((data) => {
                        return <Character key={data.id} data={data} />
                    })) : <p className="loading">Loading...</p>
                }
            </Slider>
        </div>
    );
}

export default MeetTheCast;