"use client";

import React, {createContext, useEffect, useState} from "react";
import {ICatalog} from "src/types/catalog";

export const CatalogsContext = createContext<{ catalogs: ICatalog[] }>({catalogs: []});

export const CatalogsContextProvider = ({children}: { children: React.ReactNode }) => {
    const [response, setResponse] = useState<ICatalog[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://twworkspace--vtexsgdemostore.myvtex.com/_v/catalogs/2");
                const data = await response.json();
                setResponse(data);
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchData();
    }, []);

    return (
        <CatalogsContext.Provider value={{catalogs: response}}>
            {children}
        </CatalogsContext.Provider>
    );
};


