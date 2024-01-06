import React, { useContext } from 'react';

// context
import { AppContext } from '../context/AppContextProvider';

// icons
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Pagination = ({ totalPages }) => {
    const { currentPage, setCurrentPage } = useContext(AppContext);

    const nextPage = () => {
        if (currentPage === totalPages) {
            return null;
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    }

    const prevPage = () => {
        if (currentPage === 1) {
            return null;
        } else {
            setCurrentPage((prev) => prev - 1);
        }
    }

    const multiNextPage = () => {
        if (currentPage + 3 >= totalPages) {
            setCurrentPage(totalPages - 1);
        } else {
            setCurrentPage(currentPage + 3);
        }
    }

    const multiPrevPage = () => {
        if (currentPage - 3 <= 1) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage - 2);
        }
    }

    return (
        <div className="paginationBox">
            <ul className="paginationBtns">
                <li className="paginationBtn"><button className="arrowBtn" onClick={prevPage}><MdKeyboardDoubleArrowLeft className="arrowIcon" /></button></li>
                {(currentPage > 2) && <li className="paginationBtn"><button onClick={() => setCurrentPage(1)}>1</button></li>}
                {(currentPage > 3) && <li className="paginationBtn"><button onClick={multiPrevPage}>...</button></li>}
                {(currentPage > 1) && <li className="paginationBtn"><button onClick={prevPage}>{currentPage - 1}</button></li>}
                <li className="paginationBtn"><button disabled className="activeBtn">{currentPage}</button></li>
                {(currentPage < totalPages) && <li className="paginationBtn"><button onClick={nextPage}>{currentPage + 1}</button></li>}
                {(currentPage + 2 < totalPages) && <li className="paginationBtn"><button onClick={multiNextPage}>...</button></li>}
                {(currentPage + 1 < totalPages) && <li className="paginationBtn"><button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button></li>}                
                <li className="paginationBtn"><button className="arrowBtn" onClick={nextPage}><MdKeyboardDoubleArrowRight className="arrowIcon" /></button></li>
            </ul>
        </div>
    );
}

export default Pagination;