import React from 'react'
import 'materialize-css'

import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useRoutes } from './routes'
import { Navbar } from './components/Navbar'

function App() {
  const routes = useRoutes()
  return (
    <Router>
      <Helmet>
        <title>Arksite</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <div className="container">
        {routes}
      </div>
    </Router>
  )
}

export default App
