import React from 'react'
import 'materialize-css'

import { BrowserRouter as Router } from 'react-router-dom'

// import my routes
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()
  return (
    <Router>
      <div className="container">
        {routes}
      </div>
    </Router>
  )
}

export default App
