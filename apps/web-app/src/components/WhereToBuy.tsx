'use client';

import * as React from 'react';
import "../styles/BasicCard.scss";
import {Box, Tab, Tabs} from "@mui/material";

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

const offlineStoresCard = <>
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
export default function WhereToBuy() {
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
                        textColor="#11e41'"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                        sx={{backgroundColor: '#dfe7ea', textTransform: 'capitalize'}}
                    >
                        <Tab sx={{textTransform: 'capitalize'}} value={WHERE_TO_BUY_TAB.MAINTENANCE_SERVICE_CENTERS} label="Maintenance service centers" />
                        <Tab sx={{textTransform: 'capitalize'}}  value={WHERE_TO_BUY_TAB.OFFLINE_STORES} label="Offline stores" />
                    </Tabs>

                </Box>
            </div>
            {value === WHERE_TO_BUY_TAB.MAINTENANCE_SERVICE_CENTERS && offlineStoresCard}
        </div>
    );
}
