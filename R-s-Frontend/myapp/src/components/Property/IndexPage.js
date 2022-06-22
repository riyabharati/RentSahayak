import Property from "./Recently_Added/Property";
import { HomeWrapper } from "./style";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Most_viewed from "./Most_viewed/Most_viewed";
import HouseRent from "./House_on_rents/HouseRent";
import RoomRent from "./Rooms_on_rent/RoomRent";
 function IndexPage(){
     return(
         <div>
             <Navbar/>

            <HomeWrapper>
                <Property/>
                <Most_viewed/>
                <HouseRent/>
                <RoomRent/>
            </HomeWrapper>
            <Footer/>
         </div>
     )

}
export default IndexPage;