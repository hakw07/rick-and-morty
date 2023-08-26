import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';

const PrevBtn = (props) => {
    const {className, onClick, currentSlide} = props;

    const activeBtn = {
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto'
    }
    
    return (
        <div className={className} style={currentSlide ? activeBtn : null} onClick={onClick}>
            <MdArrowBackIosNew className="arrowIcon arrowLeft" />
        </div>
    );
}

export default PrevBtn;