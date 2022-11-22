import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';
import ShopCards from '../components/ShopCards';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <ShopCards />
      <Products />
      <Footer />
    </div>
  )
}

export default Home;
