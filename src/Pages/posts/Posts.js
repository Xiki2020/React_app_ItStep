import React, { useMemo } from 'react';
import { useState } from "react";
import "./posts.css"

const Posts = () => {
	const [filteredPosts, setFilteredPosts] = useState([])
	const [sorter, setSorter] = useState(0)
	const [posts, setPosts] = useState([
		{
			"userId": 1,
			"id": 1,
			"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
		},
		{
			"userId": 1,
			"id": 2,
			"title": "qui est esse",
			"body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
		},
		{
			"userId": 1,
			"id": 3,
			"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
			"body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
		},
		{
			"userId": 1,
			"id": 4,
			"title": "eum et est occaecati",
			"body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
		},
		{
			"userId": 1,
			"id": 5,
			"title": "nesciunt quas odio",
			"body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
		},
		{
			"userId": 1,
			"id": 6,
			"title": "dolorem eum magni eos aperiam quia",
			"body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
		}])

	useMemo(() => {
		setFilteredPosts(posts)
	}, [posts])

	const deletePost = (id) => {
		const confirm = window.confirm('You really want to delete it?')
		if (confirm) setPosts(posts.filter((post) => post.id !== id))
	}

	const onSearch = (e) => {
		setFilteredPosts(posts.filter((post) => post.title.toLowerCase().includes(e.target.value.toLowerCase())))
	}

	const onSort = (e) => {
		setSorter(+e.target.value)
	}

	const doSort = (posts) => {
		if (sorter) {
			return posts.sort((a, b) => b.id - a.id)
		}
		return posts.sort((a, b) => a.id - b.id)
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
			<div className="posts-container mt-5">
				{doSort(filteredPosts).map((post) =>
					<div className="card text-dark bg-light" key={post.id}>
						<div className="card-header">{post.id}</div>
						<div className="card-body">
							<h5 className="card-title">{post.title}</h5>
							<p className="card-text">{post.body}</p>
						</div>
						<button onClick={() => deletePost(post.id)} type="button" className='btn btn-danger'>Delete</button>
					</div>
				)
				}
			</div >
		</div>
	);
};

export default Posts;