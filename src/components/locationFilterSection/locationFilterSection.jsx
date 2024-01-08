import location from "./LocationFilterSection.module.css"


const LocationFilterSection = ()=>{
    return(
        <div className={location.locationFilterSectionHolder}>
            <div className={location.locationFilterSection}>
                <div className={location.locationFilterSectionFirstElement}>
                    Location
                </div>
                <div className={location.locationFilterSectionSecondElement}>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default LocationFilterSection;