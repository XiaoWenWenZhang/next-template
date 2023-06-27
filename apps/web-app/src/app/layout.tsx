import {CatalogsContextProvider} from "src/catalogs.context";
import {Head} from "src/components/Head";
import {ICart} from "src/types/cart";

export default async function Root({children}: { children: React.ReactNode }) {
    // const cartResponse = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartPage/cd931e6fe5224a93b2864b7e7361ca1d`);
    // const product: ICart = await cartResponse.json();
    // const cartProductSkus = product.items;

    return (
        <html>
        <body>
        <CatalogsContextProvider>
            <Head />
            <div style={{
                paddingTop: '100px'
            }}>
                {children}
            </div>
        </CatalogsContextProvider>
        </body>
        </html>
    );
}
