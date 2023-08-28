import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// custom hooks
import useFetch from '../hooks/useFetch';
import useMultiFetch from '../hooks/useMultiFetch';

// images
import logo from '../assets/images/Logo.svg';
import statusIcon from '../assets/images/cast-details/Icons/status.svg';
import speciesIcon from '../assets/images/cast-details/Icons/species.svg';
import genderIcon from '../assets/images/cast-details/Icons/gender.svg';
import originIcon from '../assets/images/cast-details/Icons/origin.svg';
import locationIcon from '../assets/images/cast-details/Icons/location.svg';
import episodesIcon from '../assets/images/cast-details/Icons/episodes.svg';
import redirectIcon from '../assets/images/cast-details/Icons/link.svg';

const CastDetails = () => {
    const { id } = useParams();

    const character = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
    const characterData = character[0];
    const characterLoader = character[1];

    let name, image, status, species, gender, origin, location, episode;

    if (characterData) {
        name = character[0].name;
        image = character[0].image;
        status = character[0].status;
        species = character[0].species; 
        gender = character[0].gender;
        origin = character[0].origin;
        location = character[0].location;
        episode = character[0].episode;
    }

    const episodes = useMultiFetch(episode);
    const episodesData = episodes[0];
    const episodesLoader = episodes[1];

    const navigate = useNavigate();

    return (
        <div className="castDetails">
            <div onClick={() => navigate('/')} className="logo castLogo">
                <img src={logo} alt="logo" />
            </div>

            {!characterLoader ? characterData && <div className="castDetailsContent">
                <div className="backgroundText">
                    <h1>{name}</h1>
                </div>
                <div className="castDetailsLeft">
                    <h1 className="castName">{name}</h1>
                    <div className="profileImageBox">
                        <svg className="profileImageLayout" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="400" rx="8" fill="white" fillOpacity="0.05"/>
                            <rect x="0.5" y="0.5" width="399" height="399" rx="7.5" stroke="url(#paint0_linear_1_3089)" strokeOpacity="0.7"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_3089" x1="435.143" y1="413.806" x2="188.494" y2="-46.6065" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#84F729"/>
                            <stop offset="1" stopColor="#15BFFD"/>
                            </linearGradient>
                            </defs>
                        </svg>

                        <div className="profileImage">
                            {gender === 'Female' ?
                                <img src='https://rickandmortyapi.com/api/character/avatar/19.jpeg' alt={name} />
                                : <img src={image} alt={name} />
                            }
                        </div>
                    </div>
                </div>

                <div className="seperator">
                    <svg width="1" height="320" viewBox="0 0 1 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1" height="320" fill="url(#paint0_linear_1_3087)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1_3087" x1="-0.0941176" y1="-63.4483" x2="1.16631" y2="-63.4477" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9DFE00"/>
                        <stop offset="1" stopColor="#14D9E6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="castDetailsRight">
                    <div className="rightTopCards">
                        <div className="detailsCard rightTopCard">
                            <svg className="rightTopCardLayout" viewBox="0 0 240 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="240" height="174" rx="8" fill="white" fillOpacity="0.05"/>
                                <rect x="0.5" y="0.5" width="239" height="173" rx="7.5" stroke="url(#paint0_linear_1_3082)" strokeOpacity="0.7"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_3082" x1="261.086" y1="180.005" x2="174.097" y2="-43.9661" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#84F729"/>
                                <stop offset="1" stopColor="#15BFFD"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <div className="cardInfo">
                                <div className="cardIcon">
                                    <img src={statusIcon} alt="icon" />
                                </div>
                                <p className="cardAttr">Status</p>
                                <h1 className="cardValue">{status}</h1>
                            </div>
                        </div>

                        <div className="detailsCard rightTopCard">
                            <svg className="rightTopCardLayout" viewBox="0 0 240 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="240" height="174" rx="8" fill="white" fillOpacity="0.05"/>
                                <rect x="0.5" y="0.5" width="239" height="173" rx="7.5" stroke="url(#paint0_linear_1_3082)" strokeOpacity="0.7"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_3082" x1="261.086" y1="180.005" x2="174.097" y2="-43.9661" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#84F729"/>
                                <stop offset="1" stopColor="#15BFFD"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <div className="cardInfo">
                                <div className="cardIcon">
                                    <img src={speciesIcon} alt="icon" />
                                </div>
                                <p className="cardAttr">Species</p>
                                <p className="cardValue">{species}</p>
                            </div>
                        </div>

                        <div className="detailsCard rightTopCard">
                            <svg className="rightTopCardLayout" viewBox="0 0 240 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="240" height="174" rx="8" fill="white" fillOpacity="0.05"/>
                                <rect x="0.5" y="0.5" width="239" height="173" rx="7.5" stroke="url(#paint0_linear_1_3082)" strokeOpacity="0.7"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_3082" x1="261.086" y1="180.005" x2="174.097" y2="-43.9661" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#84F729"/>
                                <stop offset="1" stopColor="#15BFFD"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <div className="cardInfo">
                                <div className="cardIcon">
                                    <img src={genderIcon} alt="icon" />
                                </div>
                                <p className="cardAttr">Gender</p>
                                <p className="cardValue">{gender}</p>
                            </div>
                        </div>
                    </div>

                    <div className="detailsCard">
                        <svg className="detailsCardLayout" viewBox="0 0 800 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="800" height="174" rx="8" fill="white" fillOpacity="0.05"/>
                            <rect x="0.5" y="0.5" width="799" height="173" rx="7.5" stroke="url(#paint0_linear_1_3064)" strokeOpacity="0.7"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_3064" x1="870.287" y1="180.005" x2="840.656" y2="-74.2994" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#84F729"/>
                            <stop offset="1" stopColor="#15BFFD"/>
                            </linearGradient>
                            </defs>
                        </svg>

                        <div className="cardInfo">
                            <div className="cardIcon">
                                <img src={originIcon} alt="icon" />
                            </div>
                            <p className="cardAttr">Origin</p>
                            <p className="cardValue">{origin.name}</p>
                            <a href="/" className="cardIconLink">
                                <img src={redirectIcon} alt="link-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="detailsCard">
                        <svg className="detailsCardLayout" viewBox="0 0 800 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="800" height="174" rx="8" fill="white" fillOpacity="0.05"/>
                            <rect x="0.5" y="0.5" width="799" height="173" rx="7.5" stroke="url(#paint0_linear_1_3064)" strokeOpacity="0.7"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_3064" x1="870.287" y1="180.005" x2="840.656" y2="-74.2994" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#84F729"/>
                            <stop offset="1" stopColor="#15BFFD"/>
                            </linearGradient>
                            </defs>
                        </svg>

                        <div className="cardInfo">
                            <div className="cardIcon">
                                <img src={locationIcon} alt="icon" />
                            </div>
                            <p className="cardAttr">Last Known Location</p>
                            <p className="cardValue">{location.name}</p>
                            <a href="/" className="cardIconLink">
                                <img src={redirectIcon} alt="link-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="detailsCard rightBottomCard">
                        <svg className="rightBottomCardLayout" viewBox="0 0 800 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="800" height="417" rx="8" fill="white" fillOpacity="0.05"/>
                            <rect x="0.5" y="0.5" width="799" height="416" rx="7.5" stroke="url(#paint0_linear_1_3043)" strokeOpacity="0.7"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_3043" x1="870.287" y1="431.392" x2="710.269" y2="-141.653" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#84F729"/>
                            <stop offset="1" stopColor="#15BFFD"/>
                            </linearGradient>
                            </defs>
                        </svg>

                        <div className="cardInfo rightBottomCardInfo">
                            <div className="cardIcon">
                                <img src={episodesIcon} alt="icon" />
                            </div>
                            <p className="cardAttr">Episodes(S)</p>
                            <ul>
                                {!episodesLoader ? episodesData && episodesData.map((data) => {
                                    return <li key={data.id} className="cardValue">{data.name}</li>
                                }) : <p style={{color: '#fff', fontSize: '20px', fontWeight: 'normal', padding: '32px 0 0 32px'}}>Loading...</p>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div> : <p style={{color: '#fff', fontSize: '20px', fontWeight: 'normal', padding: '62px 0 0 32px'}}>Please wait...</p>}
        </div>
    );
}

export default CastDetails;