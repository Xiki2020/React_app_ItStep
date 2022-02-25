import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Crud from '../../service/crud.service'

function UserEdit() {
	const userCrud = new Crud('users')
	const [user, setUser] = useState({})
	const [error, setError] = useState('')
	const { id } = useParams()

	useEffect(() => {
		getUser()
	}, [])

	const getUser = () => {
		userCrud.get(`${id}`)
			.then((res) => setUser(res.data))
			.catch((e) => {
				setError(e.message)
			})
	}

	console.log(user)

	return (
		<>
			{error ?
				<h1>
					{error}
				</h1>
				:
				<div>UserEdit</div>
			}
		</>
	)
}

export default UserEdit