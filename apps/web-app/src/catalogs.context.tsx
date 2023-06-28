"use client";

import React, {createContext, useEffect, useState} from "react";
import {ICatalog} from "src/types/catalog";

export const CatalogsContext = createContext<{ catalogs: ICatalog[], secondCatalogs: ICatalog[] }>({
    catalogs: [],
    secondCatalogs: []
});

export const CatalogsContextProvider = ({children}: { children: React.ReactNode }) => {
    const [catalogs, setCatalogs] = useState<ICatalog[]>([]);
    const [secondCatalogs, setSecondCatalogs] = useState<ICatalog[]>([]);

    const getAlias = (data: string) => {
        return data.toLowerCase().replace("'", "").replace(" ", "-");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://twworkspace--vtexsgdemostore.myvtex.com/_v/catalogs/2");
                const responseData: ICatalog[] = await response.json();

                const catalogs = responseData.map(catalog => ({
                    ...catalog,
                    alias: getAlias(catalog.name)
                }))

                setCatalogs(catalogs);

                catalogs.forEach(catalog => {
                    if (catalog.hasChildren) {
                        const catalogResult = catalog.children.map(data => {
                            return {
                                ...data,
                                alias: getAlias(data.name)
                            }
                        })
                        setSecondCatalogs((prevState) => ([...prevState, ...catalogResult]))
                    }
                })
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchData();
    }, []);

    return (
        <CatalogsContext.Provider value={{catalogs, secondCatalogs}}>
            {children}
        </CatalogsContext.Provider>
    );
};


