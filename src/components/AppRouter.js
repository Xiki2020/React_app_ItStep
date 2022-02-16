import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Users from '../Pages/users/Users'
import Counter from './Counter'

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Users />} />
			<Route path="/users" element={<Users />} />
			<Route path="/counter" element={<Counter />} />
		</Routes>
	)
}
