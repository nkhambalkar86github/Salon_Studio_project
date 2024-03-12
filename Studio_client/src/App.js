
// import './App.css';
// import { About_Us } from './Component/About_Us';
// import { Home } from './Component/Home';
// import { Navbarbarpage, Navbarpage } from './Component/Navbarpage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Registraion } from './Component/Registration';
// import { Login } from './Component/Login';
// import { CostomerList } from './Component/CostomerList';
// import { EditCostomerForm } from './Component/EditCostomerForm';





// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
//      {/* <Navbarpage></Navbarpage> */}
//      <Routes>
//      <Route path='/' element={<Login/>}></Route>
//       <Route path='/home' element={<Home/>}></Route>
//      <Route path='/about' element={<About_Us/>}></Route>
//      <Route path='/reg' element={<Registraion/>}></Route>
     
//      <Route path='/clist' element={<CostomerList/>}></Route>
//      <Route path='/edit/:number' element={<EditCostomerForm/>}></Route>
     

//       </Routes>
//      </BrowserRouter>
     
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavbarComponent from './Component/NavbarComponent';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import LoginAndRegister from './Component/LoginAndRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer';
import BookAnAppointment from './Component/BookAnAppointment';
import { Registraion } from './Component/Registration';
import { Login } from './Component/Login';
import { CostomerList } from './Component/CostomerList';
import { EditCostomerForm } from './Component/EditCostomerForm';


const App = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
       
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login-register" element={<LoginAndRegister />} />
          <Route path="/book-an-appointment" element={<BookAnAppointment/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/clist' element={<CostomerList/>}></Route>
          <Route path='/reg' element={<Registraion/>}></Route>
          <Route path='/edit/:number' element={<EditCostomerForm/>}></Route>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;