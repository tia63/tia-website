import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import HomePage from '../components/Home';
import Footer from '../components/Footer';
import Services from '../components/Services';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HomePage />
    <Services />
    <Footer />
    </>
  );
};

export default Home