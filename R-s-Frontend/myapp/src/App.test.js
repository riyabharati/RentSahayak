import { render,fireEvent,cleanup,waitForElementToBeRemoved, screen } from '@testing-library/react';
import { Navbar } from 'react-bootstrap';
import { BsJustifyLeft } from 'react-icons/bs';
import { BrowserRouter } from 'react-router-dom';
import sendRequest from './ApiService/httpRequest';
import App from './App';
import Login from './components/Auth/Login';
import RenteeBody from './components/Body/RenteeBody';
import Sidebar from './components/Dashboard/Sidebar';
import Property from './components/Property/Property';
import ViewProperty from './components/Property/PropertyList/ViewProperty';
import { ApolloMockedProvider } from './Utils/provider';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const MockTodo=()=>{
  return(
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  )
}
describe('Rent Shayak',()=>{
  
  // test('verify validation  works',()=>{
  //   const {debug}=render(
     
  //       <Property/>
      
      
  //   );
  //   const todoElement=screen.getByTestId('');
  //   expect(todoElement).toBeInTheDocument()
  //   debug();

  // })
  test('verify Navbar works',()=>{
    const  div=document.createElement("div");
    render(<Navbar></Navbar>,div)

  })
  test('verify login works',()=>{
    const  div=document.createElement("div");
    render(<MockTodo/>,div)

  })
  test('verify sidebar works',()=>{
    const  div=document.createElement("div");
    render(<Sidebar></Sidebar>,div)

  })
  test('verify property list works',()=>{
    const  div=document.createElement("div");
    render(<RenteeBody></RenteeBody>,div)

  })
})