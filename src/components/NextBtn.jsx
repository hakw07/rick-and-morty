import React, { useEffect, useRef } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const NextBtn = (props) => {
    const {className, onClick, currentSlide, slideCount} = props;
    const slidesPerScreen = useRef(4);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (props.type === 'cast') {
            if (screenWidth > 1580) {
                slidesPerScreen.current = 5;
            } else if (screenWidth > 1280 && screenWidth <= 1580) {
                slidesPerScreen.current = 4;
            } else if (screenWidth > 1024 && screenWidth <= 1280) {
                slidesPerScreen.current = 3;
            } else if (screenWidth <= 1024) {
                slidesPerScreen.current = 2;
            }
        } else {
            if (screenWidth > 1580) {
                slidesPerScreen.current = 4;
            } else if (screenWidth > 1280 && screenWidth <= 1580) {
                slidesPerScreen.current = 3;
            } else if (screenWidth <= 1280) {
                slidesPerScreen.current = 2;
            }
        }
    }, [props]);

    const activeBtn = {
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto'
    }

    return (
        <div className={className} style={slideCount - (currentSlide + slidesPerScreen.current) ? activeBtn : null} onClick={onClick}>
            <MdArrowForwardIos className="arrowIcon" />
        </div>
    );
}

export default NextBtn;