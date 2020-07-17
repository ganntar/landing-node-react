import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Institutional from './pages/Institutional';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/cursos" component={ Courses}/>
                <Route path="/contato" component={ Contact}/>
                <Route path="/blog" component={ Blog}/>
                <Route path="/institucional" component={ Institutional}/>
                <Route path="/moodle"/>
            </Switch>
        </BrowserRouter>
    );
}