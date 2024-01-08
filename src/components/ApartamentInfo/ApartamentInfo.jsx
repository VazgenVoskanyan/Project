import { useEffect, useState } from "react"
import SendReqvest from "../../hook/UseSendRequest"
import apartaments from"./ApartamentInfo.module.css"
import { NavLink } from "react-router-dom"



const ApartamentInfo = ()=>{
    const [apartamentData,setApartamentData] = useState([])
    const {get} = SendReqvest()
    useEffect(()=>{
        (async()=>{
            const result = await get("http://localhost:5000/houses")
            setApartamentData(result)
        })()
    },[])

    return(
        <div className={apartaments.ApartamentInfoHolder}>
            <div className={apartaments.ApartamentInfoTitle}>Regular Ads</div>
            {
                apartamentData.map((apartament)=>{
                    return(
                        
                        <NavLink className={apartaments.apartamentPageLink} key={apartament.id}>
                                <img src={apartament.images[0]}/>
                                <div>
                                <div className={apartaments.apartamentInfo}>
                                        {apartament.title}
                                    </div>
                                <div className={apartaments.apartamentPriceHolder}>
                                    <div className={apartaments.apartamentPrice}>
                                            ${apartament.price}
                                        </div>
                                    </div>
                                <div className={apartaments.placeApartament}>
                                        {apartament.view}
                                    </div>
                                <div className={apartaments.apartamentSale}>
                                        For Sale 
                                    </div>
                                <div className={apartaments.apartamentData}>
                                        Saturday, December 16, 2023 15:41
                                    </div>
                                </div>
                                
                            </NavLink>
                    )
                })
            }
            <div className={apartaments.footer}>
                <NavLink>1</NavLink>
                <NavLink>2</NavLink>
                <NavLink>3</NavLink>
                <NavLink>4</NavLink>
            </div>
        </div>
    )
}

export default ApartamentInfo;