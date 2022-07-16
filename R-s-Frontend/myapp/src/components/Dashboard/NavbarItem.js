import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const NavbarItem=[
    {
        title:"Dashboard",
        path:'/dashboard',
        icon:<AiIcons.AiFillAppstore/>,
        cName:'nav-text'
    },
    {
        title:"Profile",
        path:'/userprofile',
        icon:<AiIcons.AiOutlineUser/>,
        cName:'nav-text'
    },
    {
        title:"View Request",
        path:'/view-request',
        icon:<AiIcons.AiFillAppstore/>,
        cName:'nav-text'
    }
]

export const TenantItem=[
    {
        title:"Profile",
        path:'/userprofile',
        icon:<AiIcons.AiOutlineUser/>,
        cName:'nav-text'
    },
    {
        title:"View Request",
        path:'/view-request',
        icon:<AiIcons.AiFillAppstore/>,
        cName:'nav-text'
    }
]