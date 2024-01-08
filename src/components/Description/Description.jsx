import { FaLocationDot } from "react-icons/fa6";

import "./Description.css"

export const Description =({data})=> {
    return (
       <div className = "pmain_content_descr">
        
          
                    <div className="pmain_content_description">
                            <h1 className="pmain_content_description_desc">{data.title}</h1>
                            <div className="pmain_content_description_loc"><FaLocationDot /><p>{data.addres}</p> </div>
                            <p className="pmain_content_description_price">${data.price}</p>
                        </div>
                
            
        
        </div>
   
    )
    
}