import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage, HomePage, DashBoardPage } from './pages'

const App = () => {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index path='/*' element={<HomePage /> }/>
          <Route path='/login' element={<LoginPage /> }/>
          <Route path='/register' element={<RegisterPage /> }/>
          <Route path='/dashboard/*' element={<DashBoardPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
