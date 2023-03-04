import React, {useState} from 'react'
import { Navbar_001, Navbar_002 } from '../components'
import { HomeSubPage, ProductSubHomePage } from './subHomePage'
import { Route, Routes } from 'react-router-dom'


export const HomePage = () => {
  const [iconNavBar, setIconNavBar] = useState('bx-menu-alt-left')
    const [widthNavBar, setWidthNavBar] = useState('0px')
    const openNavBar = () => {
      iconNavBar == 'bx-menu-alt-left' ? setIconNavBar('bx-x') : setIconNavBar('bx-menu-alt-left')
      widthNavBar == '0px' ? setWidthNavBar('300px') : setWidthNavBar('0px')
  }
  return (
    <div className='contentHome dflex' style={{width: '100%'}}>
        <Navbar_002 widthNavBar={widthNavBar}/>
        <div className="contentHomeRoutes" style={{width: '100%'}}>
          <Navbar_001 iconNavBar={iconNavBar} openNavBar={openNavBar} />
          <Routes>
              <Route index path='/' element={<HomeSubPage/>}></Route>
              <Route path='/shop' element={<ProductSubHomePage/>}></Route>
          </Routes>
        </div>
    </div>
  )
}

