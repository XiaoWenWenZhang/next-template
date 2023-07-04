'use client'
import {Carousel} from '@mantine/carousel';
import Link from "next/link";
import "../styles/BrowseProducts.scss"

interface ISecondCatalogs {
    id: number;
    imageUrl: string;
    title: string;
}

const SECOND_CATALOGS: ISecondCatalogs[] = [
    {
        title: "Washing machiners & washer dryers",
        id: 28,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/frontload-washers-washerdryers.svg?mode=crop",
    },
    {
        title: "Vacuum cleaners",
        id: 27,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/cordless-vacuum-cleaners.svg?mode=crop",
    },
    {
        title: "Dryers",
        id: 29,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/dryer.svg?mode=crop",
    },
    {
        title: "Air purifiers",
        id: 24,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/air-purifiers.svg?mode=crop",
    },
    {
        title: "Air care",
        id: 20,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons/e-ic-air-sep22.svg?mode=crop",
    },
    {
        title: "Floor care",
        id: 21,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons/e-ic-floor-sep22.svg?mode=crop",
    },
    {

        title: "Kitchen care",
        id: 22,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/mixer-icon.svg?mode=crop",
    },
    {
        title: "Laundry care",
        id: 23,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons/laundry-cna-icon-sep22.svg?mode=crop",
    },
    {
        title: "ovens",
        id: 15,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/bi-cavity-cookings.svg?mode=crop",
    },
    {
        title: "Stoves & hobs",
        id: 16,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/hobs-electric-icon.svg?mode=crop",
    },
    {
        title: "Free-standing cookers",
        id: 17,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/cooker-with-gas-hob.svg?mode=crop",
    },
    {
        title: "Kitchen hood",
        id: 18,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/extractor-hoods.svg?mode=crop",
    },
    {
        title: "Dish washers",
        id: 19,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/dishwasher.svg?mode=crop",
    },
    {
        title: "Irons",
        id: 30,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/irons-icon.svg?mode=crop",
    },
    {
        title: "Garment steamers",
        id: 31,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/garment-streamer-icon.svg?mode=crop"
    },
    {
        title: "Air conditioners",
        id: 25,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/air-conditioners.svg?mode=crop"
    },
    {
        title: "Instant water heaters",
        id: 26,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/water-heater-instant.svg?mode=crop"
    },
    {
        title: "Washing machiners & washer dryers",
        id: 28,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/frontload-washers-washerdryers.svg?mode=crop",
    },
    {
        title: "Vacuum cleaners",
        id: 27,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/cordless-vacuum-cleaners.svg?mode=crop",
    },
    {
        title: "Dryers",
        id: 29,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/dryer.svg?mode=crop",
    },
    {
        title: "Air purifiers",
        id: 24,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/air-purifiers.svg?mode=crop",
    },
    {
        title: "Air care",
        id: 20,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons/e-ic-air-sep22.svg?mode=crop",
    },
    {
        title: "Floor care",
        id: 21,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons/e-ic-floor-sep22.svg?mode=crop",
    },
    {

        title: "Kitchen care",
        id: 22,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/mixer-icon.svg?mode=crop",
    },
    {
        title: "Laundry care",
        id: 23,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons/laundry-cna-icon-sep22.svg?mode=crop",
    },
    {
        title: "ovens",
        id: 15,
        imageUrl: "https://www.electrolux.co.th/globalassets/icons-new-svg/bi-cavity-cookings.svg?mode=crop",
    },
];

function Card({secondCatalogs}: ISecondCatalogs[]) {
    return (
        <div className="card">
            {
                secondCatalogs.map((item, index) =>
                    <Link key={index} href={`/appliances/${item.title}`} className="link-block">
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            width="100"
                            height="100"
                        />
                        <div className="img-text-block">{item.title}</div>
                    </Link>
                )
            }
        </div>
    );
}

function BrowseProducts() {
    const groupedSecondCatalogs = [];
    SECOND_CATALOGS.forEach((item, index) => {
        if (index % 2 === 0) {
            groupedSecondCatalogs.push(SECOND_CATALOGS.slice(index, index + 2));
        }
    });

    const slides = groupedSecondCatalogs.map((item, index) => (
        <Carousel.Slide key={index}>
            <Card secondCatalogs={item}/>
        </Carousel.Slide>
    ));

    return (
        <Carousel
            breakpoints={[{maxWidth: 'sm', slideSize: '100%'}]}
            align="start"
            withIndicators
            className="product-list"
            slideSize="10%"
        >
            {slides}
        </Carousel>
    );
}

export default BrowseProducts;
