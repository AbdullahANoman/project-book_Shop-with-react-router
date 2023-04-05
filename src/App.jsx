import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      {/* header section  */}
      <Header></Header>
      <div className='min-h-[calc(100vh-220px)]'>
         <Outlet></Outlet>
      </div>
      <div className='mt-10'></div>
      {/* footer section  */}
      <Footer></Footer>
    </div>
  );
};

export default App;