import React from 'react'

import { Switch, Route } from 'react-router-dom'

// import my pages
import { TestPage }       from './pages/TestPage'
import { SecondTestPage } from './pages/SecondTestPage'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/testPage" exact>
                <TestPage />
            </Route>
            <Route path="/secondTestPage" exact>
                <SecondTestPage />
            </Route>
        </Switch>
    )
}
