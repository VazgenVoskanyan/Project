import first from"./firstFilterSection.module.css"

const FirstFilterSection = ()=>{

    return(
        <div className={first.firstFilterSection}>
            <div className={first.firstFilterSectionFirstPart}>
                <div>
                    <input type="radio" />
                    <span>Private</span>
                </div>
                <div>
                    <input type="radio" />
                    <span>Agency</span>
                </div>
            </div>
            <div className={first.firstFilterSectionSecondPart}>
                <div>
                    <input type="radio" />
                    <span>For Sale</span>
                </div>
                <div>
                    <input type="radio" />
                    <span> Exchange</span>
                </div>
                <div>
                    <input type="radio" />
                    <span>Wanted</span>
                </div>
            </div>
        </div>
    )
}

export default FirstFilterSection;