import { useState, useEffect, useRef } from 'react';

const useMultiFetch = (urls) => {
    const [loader, setLoader] = useState(true);
    const data = useRef([]);

    useEffect(() => {
        if (urls === undefined) {
            return;
        }
        
        const getAllData = async () => {
            const tempArr = [];

            const responses = await Promise.all(urls.map((url) => {
                return fetch(url);
            }));
    
            for (let i = 0; i < urls.length; i ++) {
                tempArr.push(await responses[i].json());
            }

            data.current = [...tempArr];

            if (tempArr.length) {
                setLoader(false);
            }
        }

        getAllData();

    }, [urls]);
    
    return [data.current, loader];
}

export default useMultiFetch;