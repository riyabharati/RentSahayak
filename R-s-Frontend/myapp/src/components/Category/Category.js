import React from "react";

import { Link } from "react-router-dom";
import './Category.css'
function Category(){
    return(
        <div className="container ">
            <h1 className="Header ">Explore Categories</h1>
            <div className="flex flex-row justify-evenly mt-5 categoryclass">

                <div className="image-contain">
                    <Link to='/house'>
                    
                    <img  src='/assets/images/image11.png'></img>
                    </Link>
                    <p className="font-styles">House</p>

                </div>
                <div>
                    <Link to ='/car'>
                        <img src='/assets/images/image6.png'></img>
                    </Link>
                    <p className="font-styles">Room</p>
                    
                </div>
                <div>
                    <Link to='/appartments'>
                    
                    <img src='/assets/images/image7.png'></img>
                    </Link>
                    <p className="font-styles">Office</p>
                </div>
                
                
            </div>
            
            
        </div>
    )

}
export default Category;