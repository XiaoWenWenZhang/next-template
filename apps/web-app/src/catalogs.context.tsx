"use client";

import React, {createContext, useEffect, useState} from "react";
import {ICatalog} from "src/types/catalog";

export const CatalogsContext = createContext<{ catalogs: ICatalog[] }>({catalogs: []});

export const CatalogsContextProvider =  ({children}: { children: React.ReactNode }) => {
    // Todo: Remove the fixed response
    const [response, setResponse] = useState<ICatalog[]>([
        {
            "id": 1,
            "name": "Promotions",
            "hasChildren": false,
            "url": "https://portal.vtexcommercestable.com.br/promotions",
            "children": [],
            "Title": "Category_Page_Title",
            "MetaTagDescription": "Brief description of the category. It is advisable not to exceed 150 characters so that the search engines can show it correctly in the search results;"
        },
        {
            "id": 2,
            "name": "Microwaves",
            "hasChildren": false,
            "url": "https://portal.vtexcommercestable.com.br/microwaves",
            "children": [],
            "Title": "Microwaves",
            "MetaTagDescription": ""
        },
        {
            "id": 3,
            "name": "Home Appliances",
            "hasChildren": false,
            "url": "https://portal.vtexcommercestable.com.br/home-appliances",
            "children": [],
            "Title": "Home Appliances",
            "MetaTagDescription": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now."
        },
        {
            "id": 4,
            "name": "Men's",
            "hasChildren": true,
            "url": "https://portal.vtexcommercestable.com.br/men-s",
            "children": [
                {
                    "id": 7,
                    "name": "Men's shoes",
                    "hasChildren": true,
                    "url": "https://portal.vtexcommercestable.com.br/men-s/men-s-shoes",
                    "children": [
                        {
                            "id": 8,
                            "name": "Boots",
                            "hasChildren": false,
                            "url": "https://portal.vtexcommercestable.com.br/men-s/men-s-shoes/boots",
                            "children": [],
                            "Title": "boots",
                            "MetaTagDescription": "boots description"
                        }
                    ],
                    "Title": "Men's shoes",
                    "MetaTagDescription": "This is a category for Men's shoes"
                }
            ],
            "Title": "Men's",
            "MetaTagDescription": "This is a category for Men's."
        },
        {
            "id": 5,
            "name": "Electronic Appliances",
            "hasChildren": true,
            "url": "https://portal.vtexcommercestable.com.br/electronic-appliances",
            "children": [
                {
                    "id": 6,
                    "name": "Refrigerator",
                    "hasChildren": false,
                    "url": "https://portal.vtexcommercestable.com.br/electronic-appliances/refrigerator",
                    "children": [],
                    "Title": "",
                    "MetaTagDescription": ""
                }
            ],
            "Title": "Electronic Appliances",
            "MetaTagDescription": ""
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://twworkspace--vtexsgdemostore.myvtex.com/_v/catalogs/2");
                const data = await response.json();
                setResponse(data);
                console.log("222222", data);
            } catch (error) {
                console.log("出错啦: ", error);
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


