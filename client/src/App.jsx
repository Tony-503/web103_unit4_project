import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import BuildDetails from './pages/BuildDetails'
import PCBuilder from './components/PCBuilder'
import ViewBuilds from './pages/ViewBuilds'
import EditBuild from './pages/EditBuild'
import './components/PCBuilder.css';

import './App.css'


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
    },

    {
      path:  'deleteBuilds/:id',
    },

    {
     path: '/customBuilds/:id',
      element: <EditBuild />
    },
  
    {
      path: '/builds/:id',
      element: <BuildDetails />
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