import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/AxiosWithAuth';

function AddFriend(props) {
	const [ newFriend, setNewFriend ] = useState({});

	const handleChanges = (event) => {
		setNewFriend({
			...newFriend,
			[event.target.name]: event.target.value,
		});
	};

	const handleAddFriend = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post(`http://localhost:5000/api/friends`, newFriend)
			.then((response) => {
				console.log(response, 'response from addFriend');
				props.history.push('/protected');
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<form onSubmit={handleAddFriend}>
				<input placeholder='name' type='text' name='name' value={newFriend.name} onChange={handleChanges} />
				<input placeholder='age' type='number' name='age' value={newFriend.age} onChange={handleChanges} />
				<input placeholder='email' type='text' name='email' value={newFriend.email} onChange={handleChanges} />
				<button type='submit'>Add Friend</button>
			</form>
		</div>
	);
}

export default AddFriend;
