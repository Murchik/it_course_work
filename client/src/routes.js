import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

// import my pages
import { MainPage } from './pages/MainPage'
import { AddCharacter } from './pages/AddCharacter'
import { List } from './pages/List'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/main" exact>
                <MainPage />
            </Route>
            <Route path="/add" exact>
                <AddCharacter />
            </Route>
            <Route path="/list" exact>
                <List />
            </Route>
            <Redirect to="/main" />
        </Switch>
    )
}
