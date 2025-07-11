import './App.css';
import Footer from './components/footer';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import PackageDetails from './pages/packageDetails';
import Header from './components/header';
import styled from 'styled-components';
import TripDetails from './pages/tripDetails';
import Reservation from './pages/reservation';

const FixedBackground = styled.img`
  position: fixed;
  min-width: 100%;
  min-height: 100vh;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: -1;
`;

const FixedIcon = styled.i`
  position: fixed;
  font-size: 50px;
  bottom: 10%;
  right: 3%;
  color: green;
  z-index: 3;
  cursor: pointer;
`
function App() {
  return (
    <>
      <Header/>
      <FixedBackground alt="fixed-backgroun" src='images/footer3.webp'></FixedBackground>
      <FixedIcon className="fa-brands fa-whatsapp" onClick={()=>window.open("https://wa.me/qr/MKFYCEY5UQOHK1","_blank")}></FixedIcon>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/PackageDetails' element={<PackageDetails></PackageDetails>}></Route>
        <Route path='/TripDetails' element={<TripDetails></TripDetails>}></Route>
        <Route path='/Reservation' element={<Reservation></Reservation>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
