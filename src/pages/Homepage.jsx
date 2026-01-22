import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Tabs from '../components/Tabs.jsx'
import ResultCard from '../components/ResultCard.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Homepage() {
  return (
<>
    <Navbar/>
    <Searchbar/>
    <Tabs/>
    <ResultCard/>
    <ToastContainer/> 
</>  )
}

export default Homepage