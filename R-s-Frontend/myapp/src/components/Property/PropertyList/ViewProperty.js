import React, { useState,useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link, useLocation, useParams } from "react-router-dom";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { Form, Input, Select, Space } from 'antd';

import "./viewproperty.css";
import { Modal } from 'antd'
import { apiCreateNewBooking, apiFetchHouse } from "../../../ApiService/AuthApi";

const FORM_ENDPOINT = "";
 //const initialPropertyData={title:"",description:"",price:"",floors:"",bedroom:"",bathroom:"",parkingSpace:"",furnishing:"",roadSize:"",roadType:"",areaSqFeet:""}


function ViewProperty() {
  const [submitted, setSubmitted] = useState(false);
  const [title,setTitle]=useState("")
  const  params=useParams()
  console.log(params);
  // const [propertyData,setpropertyData]=useState(initialPropertyData);
  const [price,setPrice]=useState('');
  const [message,setMessage]=useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  useEffect(() => {
    const fetchHouse = async () => {
      console.log("hi")
      try {
        const res = await apiFetchHouse(params.propertyId);
        
        if(res){
          setTitle(res.data.data);
        }
        
        console.log('responsess',res.data.data)

       
      }
      catch (e) {
        console.log(e)
      }
    };
    fetchHouse()
  }, [])


  const handleBooking = async(values) => {
 
    const res=await apiCreateNewBooking()
    console.log('this is res',res)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-2">
        <div className="d-flex justify-content-between ">
          <div>

            <h1 className="card-title">{title.title}</h1>
            <p className="card-text">New Baneshwor,Kathmandu</p>
          </div>
          <div>
            <Button onClick={showModal} className="mt-2 btn-danger">Send Request</Button>
          </div>
          <Modal title="Basic Modal" visible={isModalVisible}  onCancel={handleCancel}>
            <Form onFinish={handleBooking}>
              <Form.Item name="quotedPrice" label="Price Negotiation"  rules={[{required:true,message:'Please enter the price for negotiation'}]}>
                <Input/>
              </Form.Item>
              <Form.Item name="message" label="Message"   rules={[{required:true,message:'Please enter the price for negotiation'}]}>
                <Input/>
              </Form.Item>
              <Button  type="submit"> Submit</Button>
              
       
             


            </Form>

          </Modal >




        </div>
        <div className="row g-1 ">
          <div className="col-8">
            <img src={process.env.PUBLIC_URL+"/assets/images/house1.jpg"}></img>
          </div>
          <div className="col ">
            <div className="row ">
              <img src={process.env.PUBLIC_URL+"/assets/images/house2.jpg"}></img>
            </div>
            <div className="row">
              <img src={process.env.PUBLIC_URL+"/assets/images/house3.jpg"}></img>
            </div>
          </div>
        </div>
        <div className="row gx-1">
          <div className="col">
            <img src={process.env.PUBLIC_URL+"/assets/images/house4.jpg"}></img>
          </div>
          <div className="col">
            <img src={process.env.PUBLIC_URL+"/assets/images/house5.jpg"}></img>
          </div>
          <div className="col">
            <img src={process.env.PUBLIC_URL+"/assets/images/house6.jpg"}></img>
          </div>
        </div>
      </div>
      <div className="row container card-container">
        <div className="col-8 card1">
          <Card>
            <Card.Body>
              <p>
                Property ID:<span>None</span>
              </p>

              <hr></hr>
              <h1> Description </h1>
              <p>
               {title.description}
              </p>
              <ul>
                <li>{title.features?.floors} Floors</li>
                <li>{title.features?.bedroom} Family Bedrooms</li>
                <li>{title.features?.bathroom} Big bathroom</li>
                <li>{title.features?.parkingSpace} Big parkingSpace</li>
                <li>{title.features?.furnishing} furnishing</li>
                <li>{title.features?.roadSize} ft roadSize</li>
                <li>{title.features?.roadType} roadType</li>
                <li>{title.features?.areaSqFeet} areaSqFeet</li>
              </ul>
              <p>
                Location: When go from Birauta to Chhorepatan it’s on right
                before Davis Fall downhill (बिरौटाको ओरालोमा)
              </p>
              <p>Rent:Rs {title.price} per month</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col ml-2">
          <Card>
            <Card.Body>
              <img src="/assets/images/sharon.jpeg" />
              <h1>Sharon Shakya</h1>
              <p>Mobile:9812344426</p>
              <p>Email:richoo234@gmail.com</p>
              <form className="form-group">
                <label className="mb-2">Name</label>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="name"
                  placeholder="Name"
                  category="small"
                />
                <label className="mb-2">Email</label>
                <input
                  className="form-control  mb-3"
                  type="email"
                  name="email"
                />
                <label className="mb-2">Phone Number</label>

                <input
                  className="form-control"
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  category="small"
                />

                <button className=" button-design" type="submit">
                  Send Message
                </button>
              </form>
            </Card.Body>
          </Card>
        </div>
        <div>
          <h1>Similar Properties</h1>
          <div className="row g-0">
            <div className="col-4">
              <Col className="mr-5">
                <Link to="/propertylist" className="link">
                  <Card className="card-hover">
                    <Card.Img variant="top" src="/assets/images/house6.jpg" />

                    <Card.Body>
                      <h5 className="card-title">Beautiful house</h5>
                      <p className="card-text">preety house</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </div>
            <div className="col-4">
              <Col className="mr-5">
                <Link to="/propertylist" className="link">
                  <Card className="card-hover">
                    <Card.Img variant="top" src="/assets/images/house6.jpg" />

                    <Card.Body>
                      <h5 className="card-title">Beautiful house</h5>
                      <p className="card-text">preety house</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </div>

          </div>
        </div>
        <Card className="card-design" >
          <h1>Leave a Reply</h1>
          <p>Your email address will not be published.
            Required fields are marked *</p>

          <form

            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="mb-3 pt-0">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <label>Email*</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <label>Comment*</label>
              <textarea
                placeholder="Your message"
                rows="10" cols="50"
                name="message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Send a message
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
export default ViewProperty;
