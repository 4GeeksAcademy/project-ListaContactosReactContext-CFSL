import React, { useState, useEffect, useContext } from "react";


import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername]=useState('');
	//se ejecutara en el momento de acceder a la pagaina, con array vacio
	useEffect(()=>{
		actions.getUsers()
	},[])

	const handleSubmit = e => {
		e.preventDefault();
		actions.addUser(username);
	}

	const handleDelete = (user) => {
		actions.delUser(user);
	}

	return (
		<div className="container">
			<h2>METODOS</h2>
			<ul>
				{store.users?.map(el=> <li key={el.id}>{el.name} <span onClick={()=> handleDelete(el.name)}>xxxxx</span> </li>)}
				
			</ul>

			<form onSubmit={handleSubmit}>
				<h2>Create user</h2>
				<input type="text" value={username} placeholder="username" onChange={e=> setUsername(e.target.value)}></input>
				<input type="submit" value={'crear'}></input>
				
			</form>

			
		</div>
	);
};
