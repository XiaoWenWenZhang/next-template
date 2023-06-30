import { ICatalog } from "src/types/catalog";

const getAlias = (data: string) => {
  return data.toLowerCase().replace("'", "").replace(" ", "-");
};

export const getCatalogsFromResponse = (response: ICatalog[]): { catalogs: ICatalog[]; secondCatalogs: ICatalog[] } => {
  const catalogs = response.map((catalog) => ({
    ...catalog,
    alias: getAlias(catalog.name),
  }));

  const secondCatalogs = catalogs
    .map((catalog) => {
      if (catalog.hasChildren) {
        return catalog.children.map((child) => ({
          ...child,
          alias: getAlias(child.name),
        }));
      }
      return null;
    })
    .filter(Boolean)
    .flat();

  return { catalogs, secondCatalogs };
};
