import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import CarDetails from './pages/CarDetails'
import PCBuilder from './components/PCBuilder'
import './components/PCBuilder.css';

import './App.css'
import ViewBuilds from './pages/ViewBuilds'

const App = () => {
  let element = useRoutes([
   
    {
      path: '/customBuilds',
      element: <ViewBuilds title='PC | Views' />
    },
    {
      path: '/builds',
      element: <ViewBuilds title='PC | Views' />
    },

    {
      path: '/',
      element: <PCBuilder />
    }
  ])

  return (
    <div className='app'>
      <Navigation />
      {element}
      
    </div>
  )
}

export default App