import React from 'react'
import { useState } from "react";

import UserAdd from './UserAdd'
import UserList from './UserList'

export default function Users() {
	const [users, setUsers] = useState([
		{
			 name: 'Franko',
			 age: 32,
			 country: 'USA',
		},
		{
			 name: 'Stefano',
			 age: 25,
			 country: 'Italy',
		},
		{
			 name: 'Macumoto',
			 age: 66,
			 country: 'Japan',
		},
  ]);
  return (
	 <div className="container-sm mt-5">
		<UserAdd setUsers={setUsers} users={users}/>
		<UserList users={users}/>
	 </div>
  )
}
