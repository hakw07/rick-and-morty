import React, { useState, createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const characters = useFetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
    const locations = useFetch(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
    const episodes = useFetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);

    return (
        <AppContext.Provider value={{characters, locations, episodes, currentPage, setCurrentPage}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;