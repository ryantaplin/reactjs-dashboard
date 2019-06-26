import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from '../components/Header';

import DashboardContainer from '../containers/DashboardContainer';
import FoodServiceContainer from '../containers/FoodServiceContainer';
import HomePage from '../containers/HomeServiceContainer';

import ErrorPage from '../containers/ErrorContainer'

import PersonContext from '../contexts/PersonContext';

class Router extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{maxHeight: '80%', maxWidth: '80%', margin: '2.5% 10% 2.5% 10%'}}>
                    <BrowserRouter>
                        <Route exact path="/" component={DashboardContainer}/>
                        <Route path="/error" component={ErrorPage}/>

                        <Route path="/home" component={HomePage}/>
                        <PersonContext.Provider value={{name: 'blah'}}>
                        <Route path="/food" component={FoodServiceContainer}/>
                        </PersonContext.Provider>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default Router;


