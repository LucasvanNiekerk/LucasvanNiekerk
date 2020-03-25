import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostList from './PostList';
import PostDetail from './PostDetail';
import {About} from './About';
import {Help} from './Help';

class Main extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={ PostList }/>
                    <Route path='/Post' component={ PostDetail }/>
                    <Route path='/About' component={ About }/>
                    <Route path='/Help' component={ Help }/>
                </Switch>
            </div>
        );
    }
}

export default Main;