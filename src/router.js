import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}></IndexRoute>
        <Route path="/posts/new" component={PostsNew}></Route>
        <Route path="/posts/:id" component={PostsShow}></Route>
    </Route>
);