'use client';

import * as React from 'react';
import {useEffect, useState} from 'react';
import Map from 'ol/Map';
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {Overlay, View} from "ol";
import {fromLonLat} from "ol/proj";

export const StoreMap = ({latitude1,longitude1, onCurrentDisplay}) => {
    const [currentLocation, setCurrentLocation] = useState(null);


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

        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    // 更新当前位置状态
                    setCurrentLocation({ latitude, longitude });
                    onCurrentDisplay({ latitude, longitude })

                    // 在地图上添加标记并定位视图到当前位置
                    const marker = new Overlay({
                        position: fromLonLat([longitude, latitude]),
                        positioning: 'center-center',
                        element: document.getElementById('current-location-marker'),
                        stopEvent: false
                    });
                    map.addOverlay(marker);
                    map.getView().setCenter(fromLonLat([longitude, latitude]));
                    map.getView().setZoom(11);
                },
                (error) => {
                    console.error('获取位置失败：', error.message);
                }
            );

            const marker1 = new Overlay({
                position: fromLonLat([longitude1, latitude1]),
                positioning: 'center-center',
                element: document.getElementById('current-location-marker1'),
                stopEvent: false
            });

            map.addOverlay(marker1);
        }



        return () => {
            map.setTarget(null);
        };
    }, []);
    return  <div style={{ width: '100%', height: '680px' }}>
        <div id="map" style={{ width: '100%', height: '680px' }}></div>
        {currentLocation && (
            <>
                <div id="current-location-marker" >
                    <span role="img" aria-label="Current Location">📍</span>
                </div>
                <div id="current-location-marker1" >
                    <span role="img" aria-label="Current Location">📍</span>
                </div>
            </>
        )}
    </div>;
}
