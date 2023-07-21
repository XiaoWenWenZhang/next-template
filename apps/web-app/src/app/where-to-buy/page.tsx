import CardPromotion from "src/components/CardPromotion";
import "../../styles/home.scss";
import {WhereToBuy} from "src/components/WhereToBuy";

export default async function Page() {
    const targetPath = 'https://vtexsgdemostore.vtexcommercestable.com.br/api/logistics/pvt/configuration/pickuppoints';

    const requestInit = {
        method: 'GET',
        headers: {
            'X-VTEX-API-AppKey': 'vtexappkey-vtexsgdemostore-ODAXOP',
            'X-VTEX-API-AppToken': 'IRIUHZSYLRPUFXWGLZAODTZTOICMVFPWDTCGKJJQPKXQMYQXZDJIFRRQOMEURRFKYNTNZIEIZDZPKUHACZJGMODPCOUWYWSRGXCOKXYSLZXULWLJBUQDXMPUZKISMDBE'
        }
    }
    const locationListRes = await fetch(targetPath, requestInit)

    const locationList = await locationListRes.json();
    console.log('locationList', locationListRes.json())

    // const locationNameList = locationList.map(item => item.name)
    const locationNameAddress = locationList.map(item => ({
        name: item.name,
        location: `${item.address?.number ? item.address?.number + ' ': ''}${item.address?.street} ${item.address?.neighborhood} ${item.address?.state} ${item.address?.city} ${item.address?.country?.name} ${item.address?.postalCode}`
    }))
    // console.log('locationList', locationList)
    // console.log('locationNameList',locationNameList)
    console.log('locationNameAddress',locationNameAddress)
    return (
        <div >
            <div className="body-container"><CardPromotion/></div>
            <WhereToBuy locationNameAddress={locationNameAddress} />
        </div>
    );
}