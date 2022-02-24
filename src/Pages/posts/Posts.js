import React, { useEffect, useMemo } from 'react'
import MyModal from '../../components/MyModal/MyModal'
import Crud from '../../service/crud.service'

import { useState } from "react"
import "./posts.css"


const Posts = () => {
	const postsCrud = new Crud('posts')
	const [filteredPosts, setFilteredPosts] = useState([])
	const [loading, setLoading] = useState(false)
	const [postId, setPostId] = useState([])
	const [posts, setPosts] = useState([])
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		fetchAllPosts()
	}, [])

	const fetchAllPosts = () => {
		postsCrud.get('?_page=2&_limit=5')
			.then((res) => {
				setLoading(true)
				setPosts(res.data)
			})
	}

	useMemo(() => {
		setFilteredPosts(posts)
	}, [posts])

	const viewModal = (id) => {
		setPostId(id)
		setShowModal(true)
	}

	const deletePost = () => {
		postsCrud.delete(postId)
			.then(() => {
				setPosts(posts.filter((post) => post.id !== postId))
				setShowModal(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const onSearch = (e) => {
		setFilteredPosts(posts.filter((post) => post.title.toLowerCase().includes(e.target.value.toLowerCase())))
	}

	const onSort = (e) => {
		const sortPosts = JSON.parse(JSON.stringify(filteredPosts))
		if (+e.target.value) {
			setFilteredPosts(sortPosts.sort((a, b) => b.id - a.id))
			return
		}
		setFilteredPosts(sortPosts.sort((a, b) => a.id - b.id))
	}

	return (
		<div className='container'>
			<div className="input-group mt-5 mb-5">
				<span
					className="input-group-text"
					id="basic-addon1"
				>
					Search
				</span>
				<input
					type="text" className="form-control"
					placeholder="Posts"
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={onSearch} />
			</div>
			<select
				className="form-select mt-4"
				aria-label="Default select example"
				onChange={onSort}
			>
				<option defaultValue value="0">По возрастанию</option>
				<option value="1">По убыванию</option>
			</select>
			<div
				className="spinner-border text-primary"
				role="status"
				hidden={loading}
			>
				<span className="sr-only"></span>
			</div>
			<div
				className="posts-container mt-5"
				hidden={!loading}
			>
				{filteredPosts.length
					?
					filteredPosts.map((post) =>
						<div className="card text-dark bg-light" key={post.id}>
							<div className="card-header">{post.id}</div>
							<div className="card-body">
								<h5 className="card-title">{post.title}</h5>
								<p className="card-text">{post.body}</p>
							</div>
							<button
								onClick={() => viewModal(post.id)}
								type="button"
								className='btn btn-danger'
							>
								Delete
							</button>
						</div>
					)
					:
					<h2>Not posts</h2>
				}
			</div>
			<MyModal
				visible={showModal}
				onCancel={() => setShowModal(false)}
				saveButtonShow
				onConfirm={() => deletePost()}
			>
				<h4>Вы уверены что хотите удалить пост?</h4>
			</MyModal>
		</div>
	);
};

export default Posts;