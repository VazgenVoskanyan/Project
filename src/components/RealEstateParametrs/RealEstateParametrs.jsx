import { NavLink } from "react-router-dom";
import parametrs from "./RealEstateParametrs.module.css"

const RealEstateParametrs = ()=>{
    return(
        <div className={parametrs.RealEstateParametrs}>
                <h1>Real Estate</h1>
            <div className={parametrs.catms}>
                <div className={parametrs.stripc}>
                        <div>
                            <NavLink>
                                Apartments for Sale
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                Apartments for Rent
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                Land for Sale
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                Houses for Sale
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                Commercial Real Estate
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                Commercial Real Estate for Sale
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                Short Term Rentals of Apartments
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                Event Venues for Rent
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                Garages and Parking for Sale
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default RealEstateParametrs;