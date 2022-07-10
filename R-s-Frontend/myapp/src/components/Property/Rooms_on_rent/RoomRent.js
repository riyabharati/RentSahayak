import React,{useState} from "react";
import {Link} from 'react-router-dom'
import {Container,Card,Col,Row} from "react-bootstrap"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { Data } from "./data";
import './RoomRent.css';

function RoomRent({slides}){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    
    
    return(
        <div>
            
        <Container>
            
            <div className="clearfix mt-5 mb-4">
                <h1 className="float-left ">Most Viewed Property</h1>
                <Link  to="/">
                    <button className="button-class mt-2">
                    View All


                    </button>
            </Link>
                
                
                
            </div>
            <Slider {...settings}>
                {
                    Data.cardData.map((item,index)=>{
                        return(
                            <React.Fragment>
                                <Col className="mr-5">
                                <Card>
                                    <Card.Img
                                    variant="top"
                                    src={item.img}
                                    
                                    
                                    />
                                    
                                    <Card.Body>
                                    <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.desc}</p>

                                    </Card.Body>

                                </Card>
                                </Col>
                            </React.Fragment>

                        )
                    })
                }
                
                


            </Slider>
            
        </Container>
        </div>
    )
}
export default RoomRent;