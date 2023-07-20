import "../styles/home.scss";
import HeroBannerStandard from "src/components/HeroBannerStandard";
import BrowseProducts from "src/components/BrowseProducts";
import CardPromotion from "src/components/CardPromotion";

export default async function IndexPage() {
    return (
        <div className="body-container">
            <CardPromotion/>
            <HeroBannerStandard/>
            <BrowseProducts/>
        </div>
    );
}
