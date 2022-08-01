import React,{useState} from "react";
import './RenteeBody.css'
import { Link } from "react-router-dom";

function RenteeBody(){
    const [name,setName]=useState('')
    function handleChange(e){
        setName(e.target.value)
 
    }
   
    

    return(
    
            <div data-testid="RenteeBody"  className="containers">
                
                <div className="submain-container">
                    <img className="Image"src='assets/images/Rentee.png'></img>


                </div>
                <div className="submain-container2">
                    <h1 className="Heading">
                        Become a Rentee
                    </h1>
                    <p className="paragraph">
                    Start renting your places and Start earning <br></br>passive income
                    </p>
                    <Link to='/register'>

                    <button className="Button-style">List an Spaces</button><br></br>
                    </Link>
                    

                </div>
                

            </div>


     
    )

}
export default RenteeBody;