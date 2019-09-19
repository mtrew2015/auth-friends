import React, { useState } from 'react';
import {axiosWithAuth} from './AxiosWithAuth';

function Login(props) {
    const [ credentials, setCredentials ] = useState({});
    
    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`http://localhost:5000/api/login`, credentials)
        .then(response => {
            console.log(response)
            localStorage.setItem("token", response.data.payload)
        })
        .catch(err => console.log(err))
    }

	const handleChanges = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};
	return (
		<div>
			<form>
				<input placeholder={'username'} name='username' type='text' value={credentials.username} onChange={handleChanges} />
				<input placeholder={'password'} name='password' type='password' value={credentials.password} onChange={handleChanges} />
				<button onClick={handleLogin} type='submit'>Login</button>
			</form>
		</div>
	);
}

export default Login;
