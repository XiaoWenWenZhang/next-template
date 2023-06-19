import {ICatalog} from "src/types/catalog";
import Link from "next/link";

export default async function IndexPage() {
    const catalogsResponse = await fetch("https://twworkspace--vtexsgdemostore.myvtex.com/_v/catalogs/3");
    const catalogs: ICatalog[] = await catalogsResponse.json();

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {catalogs.map(catalog => (
                <div key={catalog.id} style={{flex: '1', alignSelf: 'flex-start'}}>
                    <Link
                        href={`/appliances/${catalog.name}`}
                    >
                        <img src="https://raw.githubusercontent.com/mswjs/msw/HEAD/media/msw-logo.svg"
                             alt="Microwave oven navigation" width="100" height="100" io-loaded="true"/>
                    </Link>
                    <div>
                        {catalog.name}
                    </div>
                </div>
            ))}

            <div>
                <Link
                    href={`/cart`}
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfY8u3sBhup4W2PV5O82hsqHk_gqfmGO6ZNg&usqp=CAU"
                         alt="Microwave oven navigation" width="45" height="45" io-loaded="true"/>
                </Link>
            </div>
        </div>
    );
}
