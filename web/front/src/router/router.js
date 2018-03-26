import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/HomeComponent'
import SortComponent from '../components/sort/SortComponent'
import CartComponent from '../components/cart/CartComponent'
import MyselfComponent from '../components/MyselfComponent/MyselfComponent'


export default (
    <Route>
        <Route path="/" component={HomeComponent} />
        <Route path="/sort" component={SortComponent} />
        <Route path="/cart" component={CartComponent} />
        <Route path="/mine" component={MyselfComponent} />
    </Route>
  
)