import { AddToCart } from "src/components/AddToCart";
import { getCatalogsFromResponse } from "src/utils/responseMapper";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const secondCatalogs = await fetch("https://twworkspace--vtexsgdemostore.myvtex.com/_v/catalogs/2")
    .then((res) => res.json())
    .then((response) => {
      const { secondCatalogs } = getCatalogsFromResponse(response);
      return secondCatalogs;
    })
    .catch((error) => {
      console.log("error: ", error);
      return error;
    });

  if (secondCatalogs instanceof Error) {
    throw new Error(secondCatalogs.message);
  }

  const targetSecondCatalog = secondCatalogs.find((c) => c.alias === params.slug);

  const productList = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/skus/${targetSecondCatalog.id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching product list:", error);
    });

  if (productList instanceof Error) {
    throw new Error(productList.message);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      {productList.map((product) => (
        <div key={product.productId} style={{ flex: "1", alignSelf: "flex-start" }}>
          <Image src={product.skus[0].image} alt={product.name} width="100" height="100" />
          <div>{product.name}</div>
          <AddToCart item={product} />
        </div>
      ))}
    </div>
  );
}
