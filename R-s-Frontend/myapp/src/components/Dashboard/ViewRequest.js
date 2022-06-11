import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from './Sidebar'
import { BsPlusCircleFill } from 'react-icons/bs'
import './ViewRequest.css'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { apiAuthGetUser, apiFetchAllBooking } from '../../ApiService/AuthApi'


export default function ViewRequest() {
  const[userType,setUserType]=useState('')

  const [BookingList,setBookingList]=useState({

    pending:[],resolved:[],canceled:[]
  })
  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const res=await  apiAuthGetUser()
        if(res.data.success){
          setUserType(res.data.data.category)
        }
        console.log('user',res)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchUser()
  })

  useEffect(() => {
    const fetchAllBooking = async () => {
      console.log("hi")
      try {
        const res = await apiFetchAllBooking();
        if(res.data.success && res.data.data.length){
          setBookingList({
            pending:res.data.data.filter((booking)=>booking.status==="pending"),
            resolved:res.data.data.filter((booking)=>(booking.status==="accepted"||  booking.status==="declined")),
            canceled:res.data.data.filter((booking)=>booking.status==="canceled")
          })
        }
      }
      catch (e) {
        console.log(e)
      }
    };
    fetchAllBooking()
  }, [])

  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className='container req-contain'>
        <div className='sub-container'>

          <h1 className='text-warning font'>Pending</h1>
        
           {BookingList.pending.length && BookingList.pending.map((booking)=>(
             <Col className="mr-5">
             <Card className='card-style'>
              
               <Card.Body>
                 <h5 className="card-title">{booking.propertyId.title}</h5>
                 <p className="card-text">Hello I would like to negotiate my price<br></br> for the room to 15000 per month.<br></br> Please response</p>
               </Card.Body>
               <Link to ={`/view-request-details/${booking._id}`}>
               <Button className='w-20 ml-48'>Details</Button>
               </Link>
               
             </Card>
           </Col>
           ))}
      
        </div>
        <div>

          <h1 className='text-primary font'>{userType==="RENTER"?"Accept":"Resolve"}</h1>
          {BookingList.resolved.length && BookingList.resolved.map((booking)=>(
             <Col className="mr-5">
             <Card className='card-style'>
              
               <Card.Body>
                 <h5 className="card-title">{booking.propertyId.title}</h5>
                 <p className="card-text">Hello I would like to negotiate my price<br></br> for the room to 15000 per month.<br></br> Please response</p>
               </Card.Body>
               <Link to ={`/view-request-details/${booking._id}`}>
               <Button className='w-20 ml-48'>{userType==="RENTER"?"Decline":"Details"}</Button>
               </Link>
               
             </Card>
           </Col>
           ))}
          
        </div>
        <div>
          <h1 className='text-success font'>Cancel</h1>
          {BookingList.canceled.length && BookingList.canceled.map((booking)=>(
             <Col className="mr-5">
             <Card className='card-style'>
              
               <Card.Body>
                 <h5 className="card-title">{booking.propertyId.title}</h5>
                 <p className="card-text">Hello I would like to negotiate my price<br></br> for the room to 15000 per month.<br></br> Please response</p>
               </Card.Body>
               <Link to ={`/view-request-details/${booking._id}`}>
               <Button className='w-20 ml-48'>Details</Button>
               </Link>
               
             </Card>
           </Col>
           ))}

        </div>

      </div>

    </div>
  )
}

