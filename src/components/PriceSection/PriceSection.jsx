import price from"./PriceSection.module.css"

const PriceSection = ()=>{

    return(
        <div className={price.PriceSection}>
            <div className={price.priceSectionFirstElemnt}>
                <div className={price.PriceSectionText}>
                    Price
                </div>
                <div className={price.PriceSectionInputs}>
                    <input type="text" placeholder="from" />
                    <input type="text" placeholder="to" />
                </div>
            </div>
            <div className={price.priceSectionSecondElement}>
                <div className={price.Currency}>
                    Currency
                </div>
                <div className={price.CurrencyInput}>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default PriceSection;