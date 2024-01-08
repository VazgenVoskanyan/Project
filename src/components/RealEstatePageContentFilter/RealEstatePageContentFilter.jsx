import PriceSection from "../PriceSection/PriceSection";
import FirstFilterSection from "../firstFilterSection/firstFilterSection";
import LocationFilterSection from "../locationFilterSection/locationFilterSection";
import filter from"./RealEstatePageContentFilter.module.css"
import CategoriesSection from "../CategoriesSection/CategoriesSection";

const RealEstatePageContentFilter = ()=>{
    return(
        <div className={filter.RealEstatePageContentFilterHolder}>
            <FirstFilterSection/>
            <LocationFilterSection/>
            <PriceSection/>
            <CategoriesSection/>
        </div>
    )
}

export default RealEstatePageContentFilter;