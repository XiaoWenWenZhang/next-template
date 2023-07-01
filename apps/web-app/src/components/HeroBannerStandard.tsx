'use client'
import {Carousel} from '@mantine/carousel';
import {Paper} from '@mantine/core';
import "../styles/HeroBannerStandard.scss";

interface CardProps {
    id: number;
    imageUrl: string;
}

const PICTURE_LIST = [
    {
        id: 1,
        imageUrl:
            "https://www.electrolux.co.th/contentassets/9cb68b5883954795b9a293fe94c904aa/bannerweb_kv_taste_new_2560x500.jpg?preset=h500",
    },
    {
        id: 2,
        imageUrl:
            "https://www.electrolux.co.th/contentassets/184a9dbecc7d439d8c84a61fe34d9b69/bannerweb-kv-npd-sakura-751x731-2.jpg",
    },
    {
        id: 3,
        imageUrl:
            "https://www.electrolux.co.th/contentassets/edf76e941d8340b3ad37679c2089a33b/supercleanx2-750x730.1.jpg",
    },
    {
        id: 4,
        imageUrl:
            "https://www.electrolux.co.th/contentassets/3fc3eda64fee49f79db5be4ad6731c2b/laundryday-750x730.jpg",
    },
    {
        id: 5,
        imageUrl:
            "https://www.electrolux.co.th/globalassets/d2c-th/better-living/make--it-last-taste-care/website-make-it-last-care-750x730-min.jpg",
    },
    {
        id: 6,
        imageUrl:
            "https://www.electrolux.co.th/globalassets/d2c-th/better-living/make--it-last-taste-care/elx-mb-750x730.jpg",
    },
];

function Card({imageUrl}: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{backgroundImage: `url(${imageUrl})`, backgroundRepeat: "no-repeat"}}
            className="card">
            <div className="card-column">

            </div>
        </Paper>
    );
}

function HeroBannerStandard() {
    const slides = PICTURE_LIST.map((item) => (
        <Carousel.Slide key={item.id}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            breakpoints={[{maxWidth: 'sm', slideSize: '100%'}]}
            align="start"
            withIndicators
            loop={true}
            className="slick-list"
        >
            {slides}
        </Carousel>
    );
}

export default HeroBannerStandard;
