import CardPromotion from "src/components/CardPromotion";
import "../../styles/home.scss";
import {WhereToBuy} from "src/components/WhereToBuy";

export default async function Page() {
    const targetPath = 'https://vtexsgdemostore.vtexcommercestable.com.br/api/logistics/pvt/configuration/pickuppoints';

    const requestInit = {
        method: 'GET',
        headers: {
            'X-VTEX-API-AppKey': process.env.X_VTEX_API_AppKey,
            'X-VTEX-API-AppToken': process.env.X_VTEX_API_AppToken
        }
    }
    const locationListRes = await fetch(targetPath, requestInit)

    const locationList = await locationListRes.json();

    const locationNameAddress = locationList.map(item => ({
        name: item.name,
        latitude: item.address.location.latitude,
        longitude: item.address.location.longitude,
        location: `${item.address?.number ? item.address?.number + ' ': ''}${item.address?.street} ${item.address?.neighborhood} ${item.address?.state} ${item.address?.city} ${item.address?.country?.name} ${item.address?.postalCode}`
    }))
    return (
        <div >
            <div className="body-container"><CardPromotion/></div>
            <WhereToBuy locationNameAddress={locationNameAddress} />
        </div>
    );
}