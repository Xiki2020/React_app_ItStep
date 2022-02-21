import React from 'react'
import { useState } from "react";

import MyModal from '../../components/MyModal/MyModal'
import UserAdd from './UserAdd'
import UserList from './UserList'

export default function Users() {
	const [showModal, setShowModal] = useState(false)
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
	])
	return (
		<div className="container-sm mt-5">
			<button
				className='btn btn-secondary'
				onClick={() => setShowModal(true)}
			>
				Add user
			</button>
			<UserList users={users} />
			<MyModal
				visible={showModal}
				onCancel={() => setShowModal(false)}
			>
				<UserAdd
					setUsers={setUsers}
					users={users}
					closeModal={() => setShowModal(false)} />
			</MyModal>
		</div>
	)
}
