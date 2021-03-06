import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Contact from '../Pages/ContactMe/Contact';
import Projects from '../Pages/Projects/Projects.js';


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/Portfolio' component={HomePage} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Projects' component={Projects} />
           
                <Redirect to='/Portfolio' />
            </Switch>
        </div>
    )
}

export default Routes;
