'use client'

import "../styles/header.scss"
import Link from "next/link";
import {Icon} from '@faststore/ui'
import ShoppingCart from "@faststore/ui/dist/atoms/Icon/stories/assets/ShoppingCart";
import {ICart} from "src/types/cart";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {CatalogsContext} from "src/catalogs.context";
import {emitter} from "src/utils/eventEmitter";

export const Head = () => {
    const {catalogs} = useContext(CatalogsContext);

    const [count, setCount] = useState(0);
    const fetchCount = async () => {

        const cartResponse = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartPage/cd931e6fe5224a93b2864b7e7361ca1d`,
            {cache: "no-cache"});
        const product: ICart = await cartResponse.json();
        setCount(product.items.length);
    }

    useEffect(() => {
        // fetchCount()
        emitter.on('addToCart', fetchCount)
        return () => {
            emitter.off('addToCart', fetchCount)
        }
    },[count])

    return (
        <header style={{
            position: 'relative',
            height: '65px',
            width: '100%',
            zIndex: 40,
            top: 0,
            transition: '0.6s',
        }}>
            <title>{`test`}</title>
            <nav className="navigation-wrapper"
                 style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #dadada'}}>
                <div className="navigation"
                     style={{
                         display: 'flex',
                         justifyContent: 'flex-end',
                         alignItems: 'center',
                         padding: '0 40px',
                         backgroundColor: '#011e41',
                         height: '40px',
                         color: '#fff'
                     }}>
                    <div>
                        <em style={{
                            display: 'inline-block',
                            width: '15px',
                            height: '20px',
                            marginRight: '10px',
                            verticalAlign: 'bottom',
                            background: "url('https://www.electrolux.co.th/globalassets/icons/register-warranty-icon.svg') no-repeat center"
                        }}></em>
                        Product Registration
                    </div>
                    <div style={{marginLeft: '30px'}}>
                        <em style={{
                            display: 'inline-block',
                            width: '15px',
                            height: '20px',
                            marginRight: '10px',
                            verticalAlign: 'bottom',
                            background: "url('https://www.electrolux.co.th/globalassets/icons/where-to-buy-icon.svg') no-repeat center"
                        }}></em>
                        Where To Buy
                    </div>

                    <Link
                        href={`/cart`} style={{position: "relative"}}>
                        <Icon
                            style={{width: '45px', height: '45px',
                                display: 'flex', alignItems: 'center', color: 'white', marginLeft: '10px'}}
                            component={<ShoppingCart />}
                        />
                        <div className={"card-icon-count"}>{count}</div>
                    </Link>

                </div>
                <div className='main-navigation'>
                    <div className='main-navigation-item'
                         style={{
                             display: 'flex',
                             alignItems: 'center',
                             height: '85px',
                             padding: '8px 40px',
                             backgroundColor: '#fff'
                         }}>
                        <div className="navigation-logo">
                            <img src="https://www.electrolux.co.th/globalassets/settings/electrolux-logo.svg"
                                 alt="Electrolux Thailand" width="144" height="35"/>
                        </div>
                        <div style={{margin: '0 20px'}}>
                            Appliances
                        </div>
                        <div className='submenu-navigation'>
                            {catalogs.map(catalog => (
                                <div key={catalog.id} className='catalog-item'>
                                    <Icon name="ShoppingCart"/>
                                    {catalog.name}
                                    {catalog.hasChildren ? catalog.children.map(secondCatalog =>
                                        <Link
                                            href={`/appliances/${catalog.name}`}
                                        >
                                            {secondCatalog.name}
                                        </Link>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <meta name="description" content="test"/>
        </header>
    );
}


