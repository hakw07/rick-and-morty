import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// context
import { AppContext } from '../context/AppContextProvider';

// components
import Character from '../components/Character';
import Pagination from '../components/Pagination';

import logo from '../assets/images/Logo.svg';

const TheCast = () => {
    const { characters, setCurrentPage } = useContext(AppContext);
    const [searchData, setSearchData] = useState(null);
    const [searchTxt, setSearchTxt] = useState('');
    const [searchTimer, setSearchTimer] = useState();
    const [loader, setLoader] = useState(false);
    const [loaderMessage, setLoaderMessage] = useState('');

    const navigate = useNavigate();

    const charactersData = characters[0];
    const loadingStatus = characters[1];

    useEffect(() => {
        setCurrentPage(1);
    }, [setCurrentPage]);

    useEffect(() => {
        // filter search items
        const filteredItems = charactersData && charactersData.filter((item) => {
            let mainTxt = ''.concat(item.id, item.name, item.gender, item.species, item.status, item.origin.name, item.type).replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
            let srchTxt = searchTxt.replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
            if (mainTxt.includes(srchTxt)) return item;
            return null;
        });

        setSearchData(filteredItems);

    }, [charactersData, searchTxt]);

    const handleRedirectLink = (e) => {
        if (e.target.value === 'character') {
            navigate('/cast');
        } else if (e.target.value === 'location') {
            navigate('/locations');
        } else if (e.target.value === 'episode') {
            navigate('/episodes');
        }
    }

    const handleSearchTxt = (e) => {
        setLoader(true);
        setLoaderMessage('Searching...');
        clearTimeout(searchTimer);
        setSearchTimer(
            setTimeout(() => {
                setSearchTxt(e.target.value);
                setLoader(false);
            }, 800)
        );
    }

    return (
        <div className="itemsBox">
            <div onClick={() => navigate('/')} className="logo itemsLogo">
                <img src={logo} alt="logo" />
            </div>

            <div className="itemsContent">
                <div className="itemsTitle">
                    <h1>The Cast</h1>
                    <div className="filterBox">
                        <select defaultValue={"character"} onChange={handleRedirectLink} name="itemsPerPage" id="itemsPerPage">
                            <option value="character">Characters</option>
                            <option value="location">Locations</option>
                            <option value="episode">Episodes</option>
                        </select>

                        <input type="text" onChange={handleSearchTxt} placeholder="Search here..." />
                    </div>
                </div>

                {!loadingStatus ? <div className="itemsWrap characters" style={(searchTxt && (searchData && searchData.length < 4)) ? {justifyContent: 'start'} : null}>
                    {searchData && (!loader ? 
                        searchData.length === 0 ? <p className="loading">No Items Found!</p> : 
                        searchData.map((data) => {
                            return <Link to={`/cast/${data.id}`} key={data.id} className="link">
                                    <Character data={data} />
                                </Link>
                            }
                        ) : <p className="loading">{loaderMessage}</p>
                    )}
                </div> : <p className="loading" style={{marginTop: '30px'}}>Loading...</p>}
            </div>
            <Pagination totalPages={42} />
        </div>
    );
}

export default TheCast;