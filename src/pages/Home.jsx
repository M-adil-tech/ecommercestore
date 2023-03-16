import React from 'react'
import { Announcment } from '../components/Announcment'
import Catogories from '../components/Catogories'
import Footer from '../components/Footer'

import { Navbar } from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'
import { Silder } from '../components/Silder'



export const Home = () => {
  return (
    <div>
 <Announcment/>
 <Navbar/>
 <Silder/>
 <Catogories/>
 <Product/>
 <Newsletter/>
 <Footer/>
 
    </div>
 
  
     

  )
}
