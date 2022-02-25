import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
	return (
		<>
			<h1>Page not found</h1>
			<NavLink to={'/'} className="btn btn-primary">go to Home</NavLink>
		</>
	)
}

export default NotFound