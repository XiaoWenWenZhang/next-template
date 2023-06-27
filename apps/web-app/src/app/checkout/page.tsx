import {CheckoutForm} from "src/components/CheckoutForm";

export default async function Page() {

    return (
        <div style={{display: 'flex', flexDirection: 'column',
            width: '50vw', marginLeft: '200px'}}>
            <CheckoutForm/>
        </div>
    );
}