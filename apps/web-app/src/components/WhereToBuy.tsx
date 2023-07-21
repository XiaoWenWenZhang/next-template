'use client';

import * as React from 'react';
import "../styles/BasicCard.scss";
import {Box, Tab, Tabs} from "@mui/material";
import StoreMap from "src/components/StoreMap";
import {Icon} from "@faststore/ui";
import Search from "src/icons/Search";

export enum WHERE_TO_BUY_TAB {
    OFFLINE_STORES= 'offlineStores',
    MAINTENANCE_SERVICE_CENTERS='maintenanceServiceCenters'
}

const serviceCenterConfig = [
    {
    title: 'Petchaburi Road',
    content: 'Electrolux Building, Ground Floor, 1910 New Petchaburi Rd, Bang Kapi, Huai Khwang, Bangkok 10310'
    },
    {
    title: 'SUTTISARN',
    content: '1408-1410 Soi Inthamara 26/1 Suthisarn Winitchai Rd., Dindaeng, Dindaeng, Bangkok 10400'
    },
    {
    title: 'BANGKAE',
    content: '85,87 Phutthamonthon Sai 1 Road, Bang Duan , Phasi Charoen District, Bangkok 10160'
    },
    {
    title: 'NAWAMIN',
    content: '10/900 Nawamin Road, Khlong Kum, Bueng Kum, Bangkok 10240'
    },
    {
    title: 'BANGPLEE',
    content: '73/46 Moo4 Theparak Rd., Bangpleeyai, Bangplee, Samutprakan 10540'
    },
]

const maintenanceServiceCentersCard = <>
    <div style={{margin: '25px auto', textAlign: 'center', fontSize: '40px', fontWeight: 600, color: '#011e41'}}>Find our service centers</div>
    <div style={{display: 'flex', flexDirection: 'row', margin: '0 40px', justifyContent: 'space-between'}}>
        {
            serviceCenterConfig.map(item =>(
                <div key={item.title} style={{border: '1px solid #011e41',color: '#011e41',padding: '20px', margin: '0 6px'
                }}>
                    <div style={{fontWeight: 600,marginBottom: '25px' }}>ESC at {item.title}</div>
                    <div style={{
                        wordWrap: 'break-word',
                        wordBreak: 'break-word'
                    }}>{item.content}</div>
                </div>
            ))
        }
    </div></>

const OfflineStoresCard = ({locationNameAddress}) => {
        return (
            <div style={{display: 'flex'}}>
                <div style={{width: '40%'}}>
                    <div style={{padding: '25px', fontWeight: 600, fontSize: '36px',
                        color: '#011e41',

                    }}>Store locator</div>
                    <div className="input-area" style={{                borderTop: "1px solid rgba(223,231,234,2)",
                        borderBottom: "1px solid rgba(223,231,234,2)",
                    }}>
                        <input type="text"  className="global-search-nav" placeholder="Bueng Sam Phan District"
                               maxLength="100"
                        />
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
                    <div style={{fontSize: '16px', backgroundColor: '#dfe7ea',fontWeight: 600, padding: '15px 25px'}}>{locationNameAddress.length} Stores near you</div>
                    <div style={{height: '432px', overflow: 'scroll'}}>
                        {
                            locationNameAddress.map(address => (
                                <div key={address.name}
                                style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderBottom: '1px solid #ccc', padding: '10px 15px'}}>
                                    <em
                                        style={{
                                            display: "inline-block",
                                            width: "45px",
                                            height: "40px",
                                            marginRight: "10px",
                                            verticalAlign: "bottom",
                                            background:
                                                "url('https://www.electrolux.co.th/Static/css/themes/default/icons/marker.svg') no-repeat center",
                                        }}
                                    ></em>
                                    <div
                                         >
                                        <div style={{lineHeight: '18px', fontSize: '18px',fontWeight: 600, marginBottom: '10px'}}>{address.name}</div>
                                        <div style={{lineHeight: '18px', fontSize: '14px'}}>{address.location}</div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <StoreMap />
            </div>
        )
}

export const  WhereToBuy = ({
                                locationNameAddress
                            }) => {
    const [value, setValue] = React.useState(WHERE_TO_BUY_TAB.OFFLINE_STORES);

    const handleChange = (event: React.SyntheticEvent, newValue: WHERE_TO_BUY_TAB) => {
        setValue(newValue);
    };
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '40px',
                boxShadow: "15px 0 30px 0 rgba(0,0,0,0.1)"}}>
                <div style={{display: 'flex', alignItems: 'center',
                    textTransform: 'uppercase', fontWeight: 600, fontSize: '18px'}}>WHERE TO BUY</div>

                <Box sx={{ width: '50%',}} >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                        sx={{backgroundColor: '#dfe7ea', textTransform: 'capitalize'}}
                    >
                        <Tab sx={{textTransform: 'capitalize'}} value={WHERE_TO_BUY_TAB.MAINTENANCE_SERVICE_CENTERS} label="Maintenance service centers" />
                        <Tab sx={{textTransform: 'capitalize'}}  value={WHERE_TO_BUY_TAB.OFFLINE_STORES} label="Offline stores" />
                    </Tabs>

                </Box>
            </div>
            {value === WHERE_TO_BUY_TAB.MAINTENANCE_SERVICE_CENTERS ? maintenanceServiceCentersCard :
                <OfflineStoresCard locationNameAddress={locationNameAddress}/>}
        </div>
    );
}
