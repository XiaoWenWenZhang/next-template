"use client";

import React, { createContext, useEffect, useState } from "react";
import { ICatalog } from "src/types/catalog";
import { getCatalogsFromResponse } from "src/utils/responseMapper";

export const CatalogsContext = createContext<{ catalogs: ICatalog[]; secondCatalogs: ICatalog[] }>({
  catalogs: [],
  secondCatalogs: [],
});

export const CatalogsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [catalogs, setCatalogs] = useState<ICatalog[]>([]);
  const [secondCatalogs, setSecondCatalogs] = useState<ICatalog[]>([]);

  useEffect(() => {
    fetch("https://twworkspace--vtexsgdemostore.myvtex.com/_v/catalogs/2")
      .then((res) => res.json())
      .then((response) => {
        const { catalogs, secondCatalogs } = getCatalogsFromResponse(response);

        setCatalogs(catalogs);
        setSecondCatalogs(secondCatalogs);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return <CatalogsContext.Provider value={{ catalogs, secondCatalogs }}>{children}</CatalogsContext.Provider>;
};
