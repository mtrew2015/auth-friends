import React from 'react';
import {axiosWithAuth} from '../auth/AxiosWithAuth';

function Friend(props) {
    
    const handleDelete = (id) => {
        axiosWithAuth().delete(`/api/friends/${id}`)
        .then((response) => {
            console.log(response)
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

	return (
		<div>
			<h2>Name: {props.friend.name}</h2>
			<p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <button onClick={() => handleDelete(props.friend.id)}>Delete Friend</button>
		</div>
	);
}

export default Friend;
