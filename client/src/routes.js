import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// import my pages
import { MainPage } from './pages/Main.page'
import { Add      } from './pages/Add.page'
import { Edit     } from './pages/Edit.page'
import { List     } from './pages/List.page'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/main" exact>
                <MainPage />
            </Route>

            <Route path="/add" exact>
                <Add />
            </Route>

            <Route
                path="/edit"
                render={props => (
                    <Edit {...props} />
                )}
            />

            <Route path="/list" exact>
                <List />
            </Route>

            <Redirect to="/main" />            
        </Switch>
    )
}
