import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import {Container,Card,Col,Row} from "react-bootstrap"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { Data } from "./data";
import './Property.css';
import { apiFetchAllHouse, apiFetchHouse } from "../../../ApiService/AuthApi";

function Property({slides}){
    const [data,setData]=useState([])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
      useEffect(() => {
        const fetchHouse = async () => {
          console.log("hi")
          try {
            const res = await apiFetchAllHouse();
            if(res.data.success){
                setData(res.data.data)
            }
          }
          catch (e) {
            console.log(e)
          }
        };
        fetchHouse()
      }, [])
    console.log('data',data)
    
    return(
        <div>
        <Container>
            <div className="clearfix mt-5 mb-4">
                <h1 className="float-left ">Recently Added</h1>
                <Link  to="/">
                    <button className="button-class mt-2">
                    View All


                    </button>
            </Link>
            </div>
            <Slider {...settings}>
                {
                    data.length  && data.map((item,index)=>{
                        console.log('item',item)
                        return(
                            <React.Fragment>
                                <Col className="mr-5">
                                <Link to={`/propertylist/${item._id}`} className="link">
                                <Card className="card-hover">
                                    <Card.Img
                                    variant="top"
                                    src={process.env.PUBLIC_URL+"/assets/images/hello.png"}
                                    />
                                    <Card.Body>
                                    <h5 className="card-title">{item.title}</h5>
                                        
                                    </Card.Body>
                                </Card>
                                </Link>
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
export default Property;