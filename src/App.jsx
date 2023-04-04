import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      {/* header section  */}
      <Header></Header>
      <Outlet></Outlet>
      {/* footer section  */}
      <Footer></Footer>
    </div>
  );
};

export default App;