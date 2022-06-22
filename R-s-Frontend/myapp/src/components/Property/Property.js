import React from "react";
import Navbar from "../Navbar/Navbar";
import './Property.css';
function Property(){
    return(
        <div>
            <Navbar/>
            <div>
                <h1 className="text-design">
                    Most visited spaces:
                </h1>
                <div className="contain">
                    <div>
                        <img src="assets/images/hello.png"></img>
                        <p>House on rent</p>
                        <p>At Kapan,Kathmandu</p>
                        <p>Rs 1,00,000 per month</p>

                    </div>
                    <div>
                        <img src='assets/images/sweethome.png'></img>
                        <p>Apartment on rent</p>
                        <p>At POkhara</p>
                        <p>Rs 1,00,000 per month</p>


                    </div>
                    <div>
                        <img src='assets/images/building.png'></img>
                            <p>Commercial building on rent</p>
                            <p>At Sanepa Lalitpur,Kathmandu</p>
                            <p>Rs 6,00,000 per month</p>


                    </div>

                </div>
            </div>

        </div>
    )
}
export default Property;