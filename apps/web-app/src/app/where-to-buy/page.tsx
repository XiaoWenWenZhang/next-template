import CardPromotion from "src/components/CardPromotion";
import "../../styles/home.scss";
import WhereToBuy from "src/components/WhereToBuy";

export default async function Page() {

    return (
        <div >
            <div className="body-container"><CardPromotion/></div>
            <WhereToBuy/>
        </div>
    );
}