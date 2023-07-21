'use client';

import * as React from 'react';
import {useEffect} from "react";
import Map from 'ol/Map';
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {View} from "ol";


export default function StoreMap() {

    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 4
            })
        });

        return () => {
            map.setTarget(null);
        };
    }, []);
    return  <div id="map" style={{ width: '100%', height: '600px' }}></div>;
}
