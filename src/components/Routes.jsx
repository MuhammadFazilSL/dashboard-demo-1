import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Settings from './settings/Settings'

const Routes = () => {
    return (
        <Switch>
            <Route path='' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' component={Products}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/settings' component={Settings}/>
        </Switch>
    )
}

export default Routes
