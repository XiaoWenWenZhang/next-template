"use client";

import "../styles/header.scss";
import Link from "next/link";
import {Icon} from "@faststore/ui";
import ShoppingCart from "@faststore/ui/dist/atoms/Icon/stories/assets/ShoppingCart";
import {useCallback, useContext, useEffect, useState} from "react";
import {CatalogsContext} from "src/catalogs.context";
import {emitter} from "src/utils/eventEmitter";
import Image from "next/image";
import Heart from "src/icons/Heart";
import Search from "src/icons/Search";
import User from "src/icons/User";
import {debounce} from "src/utils/debounce";

const MENU_LIST_TITLE = ["Appliances", "Services", "Support", "Promotions", "Blog", "Better living"];
const BETTER_LIVING_LIST = [
    {
        name: "Care",
        imageUrl:
            "https://www.electrolux.co.th/globalassets/homepage/main-menu/th-care-thumbnail.jpg?mode=crop&preset=large",
    },
    {
        name: "Taste",
        imageUrl:
            "https://www.electrolux.co.th/globalassets/homepage/main-menu/th-make-it-last-thumbnail.jpg?mode=crop&preset=large",
    },
];
const FIRST_LEVEL_CATALOGS = [
    {
        name: "Kitchen",
        iconUrl: "https://www.electrolux.co.th/globalassets/homepage/main-menu/kitchen.svg?mode=crop"
    },
    {
        name: "Laundry",
        iconUrl: "https://www.electrolux.co.th/globalassets/homepage/main-menu/laundry.svg?mode=crop"
    },
    {
        name: "Floor",
        iconUrl: "https://www.electrolux.co.th/globalassets/homepage/main-menu/floor.svg?mode=crop"
    },
    {
        name: "Air",
        iconUrl: "https://www.electrolux.co.th/globalassets/homepage/main-menu/air.svg?mode=crop"
    },
    {
        name: "Bathroom",
        iconUrl: "https://www.electrolux.co.th/globalassets/homepage/main-menu/bathroom.svg?mode=crop"
    },
    {
        name: "Accessories and spare parts",
        iconUrl: "https://www.electrolux.co.th/globalassets/icons/accessories-2.svg?mode=crop"
    },
];

interface Sku {
    productId: string;
    itemId: string;
    nameComplete: string;
    imageUrl: string;
}

interface SearchProduct {
    items: Sku[],
    name: string;
    thumbUrl: string;
}

export const Head = () => {
    const {catalogs} = useContext(CatalogsContext);
    const [count, setCount] = useState(0);
    const [hideSearchBar, setHideSearchBar] = useState(true);
    const [productList, setProductList] = useState<SearchProduct[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleHideSearchBar = () => {
        setHideSearchBar(true);
        setInputValue("");
    };

    const handleClickSearchBar = () => {
        setHideSearchBar(false);
    };


    const fetchCount = () => {
        return fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartPage/cd931e6fe5224a93b2864b7e7361ca1d`, {
            cache: "no-cache",
        })
            .then((res) => res.json())
            .then((product) => {
                const productCount = product.items.map((item) => item.quantity).reduce((total, item) => total + item);
                setCount(productCount);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fetchProductList = (inputValue) => {
        if (!inputValue) {
            return
        }
        fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/products/complete?productNameContains=${inputValue}`).then(res => {
            return res.json();
        }).then(data => {
            setProductList(data.filter(item => item.items.length > 0));
        })
    }

    const debounceSearch = useCallback(debounce(fetchProductList, true), [])


    const catalogsResult = catalogs.map(catalog => {
        const catalogIndex = FIRST_LEVEL_CATALOGS.findIndex(item => item.name === catalog.name);

        if (catalogIndex >= 0) {
            return {
                ...catalog,
                ...FIRST_LEVEL_CATALOGS[catalogIndex]
            }
        }
    }).filter(item => item);

    useEffect(() => {
        fetchCount();
    }, []);

    useEffect(() => {
        emitter.on("addToCart", fetchCount);
        return () => {
            emitter.off("addToCart", fetchCount);
        };
    }, [count]);

    return (
        <header
            style={{
                position: "relative",
                height: "65px",
                width: "100%",
                zIndex: 40,
                top: 0,
                transition: "0.6s",
            }}
        >
            <title>{`test`}</title>
            <nav
                className="navigation-wrapper"
                style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, borderBottom: "1px solid #dadada"}}
            >
                <div
                    className="navigation"
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        padding: "0 40px",
                        backgroundColor: "#011e41",
                        height: "40px",
                        color: "#fff",
                    }}
                >
                    <div>
                        <em
                            style={{
                                display: "inline-block",
                                width: "15px",
                                height: "20px",
                                marginRight: "10px",
                                verticalAlign: "bottom",
                                background:
                                    "url('https://www.electrolux.co.th/globalassets/icons/register-warranty-icon.svg') no-repeat center",
                            }}
                        ></em>
                        Product Registration
                    </div>
                    <div style={{marginLeft: "30px"}}>
                        <em
                            style={{
                                display: "inline-block",
                                width: "15px",
                                height: "20px",
                                marginRight: "10px",
                                verticalAlign: "bottom",
                                background:
                                    "url('https://www.electrolux.co.th/globalassets/icons/where-to-buy-icon.svg') no-repeat center",
                            }}
                        ></em>
                        Where To Buy
                    </div>
                </div>
                <div className="main-navigation">
                    <div className="navigation-logo">
                        <Image
                            src="https://www.electrolux.co.th/globalassets/settings/electrolux-logo.svg"
                            alt="Electrolux Thailand"
                            width="144"
                            height="35"
                        />
                    </div>
                    {MENU_LIST_TITLE.map((menuItem, index) => (
                        <div
                            key={index}
                            className={`main-navigation__main-item main-navigation-item__hover__${menuItem
                                .toLowerCase()
                                .replace(" ", "-")}`}
                        >
                            {menuItem}
                        </div>
                    ))}
                    <Icon className="navigation-icon" component={<Search/>} onClick={handleClickSearchBar}/>
                    <Icon className="navigation-icon" component={<Heart/>}/>
                    <Icon className="navigation-icon" component={<User/>}/>

                    <Link href={`/cart`} style={{position: "relative"}}>
                        <Icon
                            className="navigation-icon"
                            component={<ShoppingCart/>}
                        />
                        <div className={"card-icon-count"}>{count}</div>
                    </Link>

                    <div className="submenu__common submenu__appliances">
                        {catalogsResult.map((catalog) => (
                            <div key={catalog.id} className="submenu-navigation__group">
                                <div className="submenu-navigation__group-title">
                                    <img
                                        className="preview"
                                        src={catalog.iconUrl}
                                        alt={catalog.name}
                                        width="32"
                                        height="32"
                                    />
                                    <span> {catalog.name}</span>
                                </div>
                                {catalog.hasChildren
                                    ? catalog.children.map((secondCatalog) => (
                                        <div key={secondCatalog.id} className="submenu-navigation__group-item">
                                            <Link href={`/appliances/${secondCatalog.name}`} className="link">
                                                {secondCatalog.name}
                                            </Link>
                                        </div>
                                    ))
                                    : null}
                            </div>
                        ))}
                    </div>
                    <div className="submenu__common submenu__better-living">
                        {BETTER_LIVING_LIST.map((batterLivingItem) => (
                            <div key={batterLivingItem.name} className="batter-living-item">
                                <Image
                                    className="batter-living-item-image"
                                    width="144"
                                    height="35"
                                    src={batterLivingItem.imageUrl}
                                    alt={batterLivingItem.name}
                                />
                                <div className="batter-living-item-title">{batterLivingItem.name}</div>
                            </div>
                        ))}
                    </div>

                    <div className={`${hideSearchBar ? 'hidden-search-bar' : 'display-search-bar'} search-bar`}>
                        <div className="input-area">
                            <input type="text" value={inputValue} className="global-search-nav" placeholder="search..."
                                   maxLength="100"
                                   onBlur={handleHideSearchBar} onChange={(e) => {
                                setInputValue(e.target.value)

                                debounceSearch(e.target.value);
                            }}/>
                            <div className="view-all-search-icon click-disable">
                                <Icon
                                    style={{
                                        width: "25px",
                                        height: "25px",
                                        display: "flex",
                                        alignItems: "center",
                                        color: "#011e41",
                                        marginLeft: "10px",
                                    }}
                                    component={<Search/>}
                                />
                            </div>
                        </div>
                        {productList.length > 0 && <div className="search-tip-bar">
                            <div className="product-block">
                                {`PRODUCTS`}
                            </div>
                            {
                                productList.map((item, index) => (
                                    <Link key={index} href={`/appliances/detail/${item.items[0].productId}`}
                                          className="product-block" onClick={handleHideSearchBar}>
                                        <Image
                                            src={item.thumbUrl}
                                            alt={item.name}
                                            width="25"
                                            height="25"
                                        />
                                        <div>
                                            {item.name}
                                        </div>
                                    </Link>))
                            }
                        </div>}
                    </div>

                </div>
            </nav>
            <meta name="description" content="test"/>
        </header>
    );
};
