import React,{useState} from "react";
import './Body.css'


function Body(){
    const [name,setName]=useState('')
   function handleChange(e){
       setName(e.target.value)

   }
    

    return(
        <div className="Container-main">
            <div className="Sub-container">
                <div className="sub-sub-container1">
                    <h1 className="Heading">
                        Rent Spaces
                    </h1>
                    <p className="paragraph">
                    Classy  Fine Rooms, Flats and  Apartments, Office Spaces,<br></br> Shutters and Shop according to  your needs.
                    </p>
                    <button className="Button-style">Get Started</button><br></br>
                    <input className="inputdesign" type="text" name="name" value={name} onChange={handleChange} placeholder="searching for?"></input>

                </div>
                <div className="sub-sub-container2">
                    <img className="Image"src='assets/images/House.png'></img>


                </div>

            </div>
            
            


        </div>
    )

}
export default Body;