import React from 'react';
import { useState } from "react";

const UserAdd = ({ users, setUsers }) => {
	const onChange = (e) => {
		const field = e.target.id;
		setValues({ ...values, [field]: e.target.value })
	};
	const addUser = () => {
		setUsers([values, ...users]);
		setValues(
			{
				name: '',
				age: '',
				country: '',
			}
		)
	}

	const [values, setValues] = useState({
		name: '',
		age: '',
		country: '',
	});

	return (
		<div className='mb-5 d-flex justify-content-between'>
			{Object.keys(values).map((value, index) => {
				if (value === 'age') {
					return <input
						className='d-block w-100 form-control'
						id={value}
						key={index}
						value={values[value]}
						type="number"
						placeholder={`Input user ${value}`}
						onChange={onChange}
					/>
				}
				return <input
					className='d-block w-100 form-control'
					id={value}
					key={index}
					value={values[value]}
					//   type={values[value]}
					placeholder={`Input user ${value}`}
					onChange={onChange}
				/>
			})}
			<button onClick={addUser} className="btn-primary w-100">Add new User</button>
		</div>
	);
};

export default UserAdd;