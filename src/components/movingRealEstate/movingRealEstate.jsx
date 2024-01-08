import { NavLink } from "react-router-dom"
import move from"./movingRealEstate.module.css"

const MovingRealEstate = ()=>{
    return(
        <div className={move.MovingRealEstate}>
                <NavLink to={"/"}>Home</NavLink>
            <NavLink className={move.homeMovingLink}>Real Estate</NavLink>
            </div>
        
    )
}

export default MovingRealEstate;