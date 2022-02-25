import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Users from '../Pages/users/Users'
import Posts from '../Pages/posts/Posts'
import UserEdit from '../Pages/users/UserEdit'
import NotFound from '../Pages/NotFound'

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Users />} />
			<Route path="/users" element={<Users />} />
			<Route path="/users/:id" element={<UserEdit />} />
			<Route path="/posts" element={<Posts />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
