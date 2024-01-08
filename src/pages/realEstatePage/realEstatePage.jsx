import MovingRealEstate from "../../components/movingRealEstate/movingRealEstate"
import RealEstateParametrs from "../../components/RealEstateParametrs/RealEstateParametrs"
import RealEstatePageContentFilter from "../../components/RealEstatePageContentFilter/RealEstatePageContentFilter"
import ApartamentInfo from "../../components/ApartamentInfo/ApartamentInfo"
import realEstatePageStyle from "./realEstatePage.module.css"

const RealEstatePage =()=>{
    
    return(
        <div className={realEstatePageStyle.main}>
            <MovingRealEstate/>
            <RealEstateParametrs/>
            <div className="RealEstatePageContentHolder">
                <RealEstatePageContentFilter/>
                <ApartamentInfo/>
            </div>
        </div>
    )
}

export default RealEstatePage;