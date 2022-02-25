import React from 'react'

function Spinner({ isLoading }) {
	return (
		<div
			className="spinner-border text-primary m-5"
			role="status"
			hidden={isLoading}
		>
			<span className="sr-only"></span>
		</div>
	)
}

export default Spinner