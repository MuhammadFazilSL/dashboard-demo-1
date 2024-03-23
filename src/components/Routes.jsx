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
            <Route path='/dashboard-demo-1/' exact component={Dashboard}/>
            <Route path='/dashboard-demo-1/customers' component={Customers}/>
            <Route path='/dashboard-demo-1/products' component={Products}/>
            <Route path='/dashboard-demo-1/orders' component={Orders}/>
            <Route path='/dashboard-demo-1/settings' component={Settings}/>
        </Switch>
    )
}

export default Routes
