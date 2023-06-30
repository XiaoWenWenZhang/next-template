"use client";

import "../styles/header.scss";
import Link from "next/link";
import {Icon} from "@faststore/ui";
import ShoppingCart from "@faststore/ui/dist/atoms/Icon/stories/assets/ShoppingCart";
import {useContext, useEffect, useState} from "react";
import {CatalogsContext} from "src/catalogs.context";
import {emitter} from "src/utils/eventEmitter";
import Image from "next/image";
import Heart from "src/icons/Heart";
import Search from "src/icons/Search";
import User from "src/icons/User";

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

export const Head = () => {
    const {catalogs} = useContext(CatalogsContext);
    const [count, setCount] = useState(0);

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
                    <Icon
                        style={{
                            width: "25px",
                            height: "25px",
                            display: "flex",
                            alignItems: "center",
                            color: "#011e41",
                            marginLeft: "10px",
                        }}
                        component={<Heart/>}
                    />
                    <Icon
                        style={{
                            width: "25px",
                            height: "25px",
                            display: "flex",
                            alignItems: "center",
                            color: "#011e41",
                            marginLeft: "10px",
                        }}
                        component={<User/>}
                    />

                    <Link href={`/cart`} style={{position: "relative"}}>
                        <Icon
                            style={{
                                width: "45px",
                                height: "45px",
                                display: "flex",
                                alignItems: "center",
                                color: "#011e41",
                                marginLeft: "10px",
                            }}
                            component={<ShoppingCart/>}
                        />
                        <div className={"card-icon-count"}>{count}</div>
                    </Link>

                    <div className="submenu__common submenu__appliances">
                        {catalogs.map((catalog) => (
                            <div key={catalog.id} className="catalog-item">
                                {catalog.name}
                                {catalog.hasChildren
                                    ? catalog.children.map((secondCatalog) => (
                                        <Link key={secondCatalog.id} href={`/appliances/${catalog.name}`}>
                                            {secondCatalog.name}
                                        </Link>
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

                    <div className="search-bar">
                        <div className="input-area">
                            <input type="text" className="global-search-nav" placeholder="ค้นหา" maxLength="100"/>
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
                    </div>

                </div>
            </nav>
            <meta name="description" content="test"/>
        </header>
    );
};
