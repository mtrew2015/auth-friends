import React from 'react';
import {Route} from 'react-router-dom';
import Navigation from '../src/components/routes/Navigation';
import Login from './components/auth/Login';
import AddFriend from './components/friends/AddFriend';
import PrivateRoute from './components/routes/PrivateRoute';
import FriendList from './components/friends/FriendList';

import './App.css';

function App() {
	return (
		<div className='App'>
			<h1> Friends App </h1>
            <Navigation />
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/addfriend" component={AddFriend}/>
            <PrivateRoute exact path="/friends" component={FriendList}/>
		</div>
	);
}

export default App;
