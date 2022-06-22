import Body from '../../Body/Body';
import RenteeBody from '../../Body/RenteeBody';
import RenterBody from '../../Body/RenterBody';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Team from '../../Team/Team';
import Category from '../../Category/Category';
import { useState } from 'react';

function LandingPage() {
  const [name, setName] = useState('prazwal')
  return (
    <div>
      <Navbar name={name} onClick={() => {console.log('onclick')}}/>
      <Body/>
      <RenterBody/>
      <RenteeBody/>
      <Category/>
      
      <Footer/>
    </div>
    
  );
}

export default LandingPage;
