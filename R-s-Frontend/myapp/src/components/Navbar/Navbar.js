import React, { useEffect, useState } from "react";
import './Navbar.css'
import { commonNavItems, notLoggedInNavItems } from "./NavbarItem";
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { useUserContext } from "../../context/userContext";
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';


function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false)
    const [activeNavItems, setActiveNavItems] = useState([]);
    const navigate = useNavigate()
    const showSidebar = () => setShowMediaIcons(!showMediaIcons);

    const { isLoggedIn } = useUserContext()

    useEffect(() => {
        if (isLoggedIn) {
            
            setActiveNavItems(commonNavItems)
        } else {
            setActiveNavItems([...commonNavItems, ...notLoggedInNavItems])
        }
    }, [isLoggedIn])
    async function Logout() {
        localStorage.clear();



    }

    return (
        <div  data-testid="Navbar" className="Topbar">
            <div className="TopbarLeft">
                <a href="/"> <img src={process.env.PUBLIC_URL+"/assets/images/Rentsahayak.png"}></img></a>
            </div>
            <div className="mobile-menu-link">
                <ul className="TopbarList">
                    {activeNavItems.length > 0 && activeNavItems.map((items, index) => {
                        return (
                            <li key={index}>
                                <a className={'sidebarListItemText'} href={items.url}>{items.title}</a>
                            </li>
                        )

                    })}
                    {isLoggedIn && (

                        <ul className="addedMenuItem">
                            <li><a href="/login" className={'sidebarListItemText'} onClickCapture={Logout}>Logout</a></li>
                            <li><a href="/dashboard" className={'sidebarListItemText'}>Dashboard</a></li>
                        </ul>


                    )}
                </ul>
            </div>
            <div >
                <span className="navbar-main">
                    <Link to="#" className="navmenu-bars">
                        <FaBars onClick={showSidebar} />
                    </Link>
                </span>
                <nav className={showMediaIcons ? 'nav-menus active' : 'nav-menus'}>




                    <ul className="nav-menus-items" onClick={showSidebar}>
                        <li classname='navbars-toogle'>
                            <Link to="#" className="menu-bars">
                                <AiOutlineClose />
                            </Link>
                        </li>
                        {activeNavItems.length > 0 && activeNavItems.map((items, index) => {
                            return (
                                <li key={index}>
                                    <a className={items.cName} href={items.url}>{items.title}</a>
                                </li>
                            )

                        })}
                        {isLoggedIn && (

                            <ul >
                                <li><a href="/login" className={'navs-text'} onClickCapture={Logout}>Logout</a></li>
                                <li><a href="/dashboard" className={'navs-text'}>Dashboard</a></li>
                            </ul>


                        )}
                    </ul>
                </nav>

            </div>


        </div>
    )

}
export default Navbar;