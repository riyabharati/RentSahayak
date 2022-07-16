import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from './Sidebar'
import { Button, Card, Col } from 'react-bootstrap'
import {Form,Input} from 'antd';
import { Link, useParams } from 'react-router-dom'

import './FormComponent.css'
import { apiAuthGetUser, apiFetchBookingById, apiUpdateBookingStatus, apiUpdateConversation } from '../../ApiService/AuthApi';
import TextArea from 'antd/lib/input/TextArea';
import { useUserContext } from '../../context/userContext';

export default function FormComponent() {
  const[userType,setUserType]=useState('')
  const[status,setUpdateStatus]=useState()

  const [loading,setLoading]=useState(true)
  const [bookingData,setbookingData]=useState({})
  const[message,setMessage]=useState('')
  const {isLoggedIn, fetchUser} = useUserContext()
  
  const  params=useParams()
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
    const fetchBooking = async () => {
      console.log("hi")
      try {
        const res = await apiFetchBookingById(params.bookingId);
        
        if(res.data.success){
          setbookingData(res.data.data);
          setLoading(false)
        }
        
        console.log('responsess',res.data.data)

       
      }
      catch (e) {
        console.log(e)
      }
   
    };
    fetchBooking()
  }, [])
  console.log(bookingData)

  const updateMessage=async(values)=>{
    const res=await apiUpdateConversation(bookingData._id,{...values})
    if(res.data.success){
      bookingData(res.data.data)
    }
    console.log(res)
  }
  const handleResolve=async(value)=>{
    const res=await apiUpdateBookingStatus(bookingData._id,{status:value})
    
    if(res.data.success){
      setbookingData(res.data.data)
    }
  }

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        {loading
        ?<>loading</>
        :(
          <div className='container sub-contain'>

        <React.Fragment  >
            <Col className="mr-5">
              <Card>
               
                <Card.Body>
                    <div  className='d-flex  justify-between'>

                  <h5 className="card-title">{bookingData.propertyId?.title}</h5>
                  <p className='bg-success  text-white'>{bookingData.status}</p>
                    </div>
                 
                </Card.Body>
                
                
              </Card>
              <Form onFinish={updateMessage} className='mt-4'>
                <Form.Item name="price" label={"original price"}   >
                  <p>{bookingData.propertyId?.price}</p>
                </Form.Item>
                <Form.Item name="quotedPrice" label="quoted price"  initialValue={bookingData.quotedPrice} >
                {userType==="RENTER"?<p>{bookingData.quotedPrice}</p>:<Input/>}
   
                </Form.Item>
                <Form.Item name="redefinedPrice" label="redefined price"  initialValue={bookingData.redefinedPrice} >
                {userType==="TENANT"?<p>{bookingData.redefinedPrice}</p>:<Input/>}
                 
                </Form.Item>
              <div >
                <h1>Chat Box</h1>
                <div  className='container main-contain'> 
                {bookingData.conversation.map((conv)=>(
                  <div>
                    <h5 >{conv.userId.profile.fullName}<span className='date-design'>{new Date(conv.date).toDateString()}</span></h5>
                    <p>{conv.message}</p>
                  </div>
                ))}
                

           
                <Form.Item name="message">
                  <TextArea/>

                </Form.Item>
                
                
                <Button type="submit" className='w-20 mr-4'>Send</Button>
               
              

              
                </div>
              </div>
                
              </Form>
             {bookingData.status==="pending"&& 
             (userType==="RENTER"
             ?(
              <>
               <Button  onClick={()=>handleResolve('accepted')}  className='w-20 mr-4'>Accept</Button>
              <Button  onClick={()=>handleResolve('declined')}  className='w-20 bg-danger'>Decline</Button>
              </>
             ):
             <Button  onClick={()=>handleResolve('canceled')}  className='w-20 bg-danger'>Cancel</Button>)
             }
            </Col>
          </React.Fragment>
        </div>
        )
        }
      
    </div>
  )
}
