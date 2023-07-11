import {AddToCart} from "src/components/AddToCart";
import {getCatalogsFromResponse} from "src/utils/responseMapper";
import Image from "next/image";
import Link from "next/link";

export default async function Page({params}: { params: { slug: string } }) {
    const secondCatalogs = await fetch("https://twworkspace--vtexsgdemostore.myvtex.com/_v/catalogs/2")
        .then((res) => res.json())
        .then((response) => {
            const {secondCatalogs} = getCatalogsFromResponse(response);
            return secondCatalogs;
        })
        .catch((error) => {
            console.log("error: ", error);
            return error;
        });

    if (secondCatalogs instanceof Error) {
        throw new Error(secondCatalogs.message);
    }

    const targetSecondCatalog = secondCatalogs.find((c) => c.name === params.slug);
    const productList = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/skus/${targetSecondCatalog.id}`)
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error fetching product list:", error);
        });

    if (productList instanceof Error) {
        throw new Error(productList.message);
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            {productList.map((product) => (
                <div key={product.productId} style={{flex: "1", alignSelf: "flex-start", margin: '0 50px'}}>
                    <Link style={{display: 'flex', flexDirection: 'column', justifyContent: 'start'}}
                          href={`/appliances/detail/${product.productId}`}>
                        <Image src={product.skus[0].image} alt={product.name} width="200" height="100"/>
                        <div style={{width: '200px', textAlign: 'center'}}>{product.name}</div>
                    </Link>
                    <div style={{width: '200px'}}>
                        <AddToCart item={product}/>
                    </div>
                </div>
            ))}
        </div>
    );
}
