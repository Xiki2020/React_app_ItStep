import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
	return users.map((user) =>
		<Link
			to={`/users/${user.id}`}
			key={user.id}
			className='card mt-4 p-3'
		>
			<div>Number: {user.id}</div>
			<div>Name: {user.name}</div>
			<div>Age: {user.age}</div>
			<div>Country: {user.country}</div>
		</Link>)
};

export default UserList;