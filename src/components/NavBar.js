import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react"

export default function NavBar() {
	const [menuActive, setMenuActive] = useState('')
	const links = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Users',
			link: '/users'
		},
		{
			name: 'Posts',
			link: '/posts'
		},
		{
			name: 'Photos',
			link: '/'
		}
	]

	const toogleMenu = () => {
		menuActive === 'show' ? setMenuActive('') : setMenuActive('show')
	}

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">LOGO</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={toogleMenu}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={`collapse navbar-collapse justify-content-end ${menuActive}`} id="navbarNav">
						<ul className="navbar-nav">
							{links.map((link, i) =>
								<li
									className="nav-item"
									key={i}
								>
									<Link
										className="nav-link"
										to={link.link}
										onClick={toogleMenu}
									>
										{link.name}
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}
