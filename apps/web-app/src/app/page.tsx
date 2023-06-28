'use client'
import Link from "next/link";
import {useContext} from "react";
import {CatalogsContext} from "src/catalogs.context";
import {ICatalog} from "src/types/catalog";

export default function IndexPage() {
    const {catalogs} = useContext(CatalogsContext);
    let secondCatalogs: ICatalog[] = [];
    catalogs.forEach(catalog => {
        if (catalog.hasChildren) {
            secondCatalogs.push(...catalog.children);
        }
    })

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            {secondCatalogs.map(catalog => (
                <div key={catalog.id} style={{flex: '1', alignSelf: 'flex-start', padding: '80px'}}>
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

        </div>
    );
}
