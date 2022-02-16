import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">LOGO</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/users">Users</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/counter">Posts</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">Devices</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}
