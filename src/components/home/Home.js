import React from 'react'
import SearchForm from '../searchForm/SearchForm'
import './Home.css'

import logo from '../../assets/images/logo.png'

const Home = () =>
  <div className='home-bg'>
    <content className='home-content'>
      <img src={logo} alt='logo' />
      <h1 className='home-title'>Lorem ipsum dolar sit</h1>
      <p className='home-description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
      <SearchForm />
    </content>
  </div>

export default Home

