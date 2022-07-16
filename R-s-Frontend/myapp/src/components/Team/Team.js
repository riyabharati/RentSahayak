import React from "react";
import './Team.css'
function Team(){
    return(
        <div className="Team-container">
            <h1 className="Team-text"> Our Team </h1>
            <div className="subteam-container">
                <div>
                    <img className="team-images1" src='assets/images/Crisel.jpg'></img>
                </div>
                <div>
                    <img className="team-images2" src='assets/images/sharon.jpeg'></img>
                </div>
                <div>
                    <img  className="team-images3" src='assets/images/Raman.jpeg'></img>
                </div>

            </div>

        </div>
    )
}
export default Team;