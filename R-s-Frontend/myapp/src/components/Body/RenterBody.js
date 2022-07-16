import React,{useState} from "react";
import './Body.css'
import { Link } from "react-router-dom";

function RenterBody(){
    const [name,setName]=useState('')
    function handleChange(e){
        setName(e.target.value)
 
    }
   
    

    return(
    
            <div className="Sub-container2">
                <div className="sub-sub-container3">
                    <h1 className="Heading">
                        Become a Renter
                    </h1>
                    <p className="paragraph">
                    Start renting your places and Start earning passive income
                    </p>
                    <Link to='/register'>

                    <button className="Button-style">List an Spaces</button><br></br>
                    </Link>


                </div>
                <div className="sub-sub-container4">
                    <img className="Image"src='assets/images/Renter.png'></img>


                </div>

            </div>


     
    )

}
export default RenterBody;