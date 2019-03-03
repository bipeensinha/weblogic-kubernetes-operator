// Copyright 2019, Oracle Corporation and/or its affiliates. All rights reserved.

import React, { Component } from 'react'
import { About } from './About'
import { Home } from './Home'
import Header from './Header'
import { DomainList } from './DomainList'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/domains" component={DomainList} />
                    {/* <Route path="/domain/:id" component={DomainDetail} /> */}
                    <Route exact path="/about" component={About} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);