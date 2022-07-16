import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { NavbarItem, TenantItem } from './NavbarItem'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useState,useEffect } from 'react'
import './Navbar.css'
import { apiAuthGetUser } from '../../ApiService/AuthApi'
import { userCategory } from '../../Utils/enumconstant'

export default function Sidebar() {
    const [sidebar,setSidebar]=useState(false)

    useEffect(() => {
    try{
      const fetchUser=async()=>{
        try{
          const res=await apiAuthGetUser()
          if(res.data.data.category===userCategory.TENANT){
            setSidebar(TenantItem)

          }
          else{
            setSidebar(NavbarItem)
          }
          
        }
        catch (e) {
          console.log(e)
        }

      }
      fetchUser()

      
    }
    catch(err){
        console.log(err)

    }
  })
    const menu=(
        <Menu
        items={[
            {
                key:'1',
                label:(
                    <a href='/change-password'>
                        Change password
                    </a>

                )
            }
        ]}
        />
    )
  return (
    <div  data-testid="Sidebar" className='contains'>


    <nav className='nav-menu main-nav'>
        <ul className='nav-menu-items'>
           
            {sidebar.length > 0 && sidebar.map((item,index)=>{
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>

                        {item.title}
                            </span>

                        </Link>

                    </li>
                    
                )

            })}
             <li className='nav-text'>
                <Dropdown overlay={menu}>

                <Link to="/change-password" onClick={(e)=>e.preventDefault()}>
                    <AiIcons.AiFillAppstore/>
                    <Space>Account settings</Space>
                    
                    
                </Link>
                </Dropdown>
            </li>
        </ul>
    </nav>
    </div>
  )
}
