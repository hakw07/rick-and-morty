import React from 'react';

const ListCard = ({ data, title }) => {
    return (
        <div className="itemBox">
            <svg className="cardItemLayout" viewBox="0 0 360 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M360 10C360 4.47715 355.523 0 350 0H10C4.47715 0 0 4.47715 0 10V86C0 91.5229 4.47714 96 9.99998 96H310.149C312.368 96 314.523 95.2622 316.277 93.9027L356.128 63.0026C358.57 61.1085 360 58.1911 360 55.0999V10Z" fill="white" fillOpacity="0.05"/>
                <path d="M350 0.5C355.247 0.5 359.5 4.75329 359.5 10V55.0999C359.5 58.0365 358.142 60.808 355.821 62.6075L315.97 93.5075C314.305 94.7991 312.257 95.5 310.149 95.5H9.99998C4.75328 95.5 0.5 91.2467 0.5 86V10C0.5 4.7533 4.7533 0.5 10 0.5H350Z" stroke="url(#paint0_linear_23_152)" strokeOpacity="0.7"/>
                <defs>
                <linearGradient id="paint0_linear_23_152" x1="391.629" y1="99.3134" x2="371.719" y2="-40.0534" gradientUnits="userSpaceOnUse">
                <stop stopColor="#84F729"/>
                <stop offset="1" stopColor="#15BFFD"/>
                </linearGradient>
                </defs>
            </svg>

            <div className="itemBoxContent">
                <div className="itemBoxText">
                    <p className="itemHeading">{(title === 'episodes') ? data.episode : `#${data.id}`}</p>
                    <p className="itemDesc">{data.name}</p>
                </div>
            </div>
        </div>
    );
}

export default ListCard;