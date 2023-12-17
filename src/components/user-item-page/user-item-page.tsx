import { FC } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

import { IUser } from "../../types/types";
import './user-item-page.css'

const UserPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null)
	const { id } = useParams();
	const navigate = useNavigate();

	const fetchUser = async () => {
		try {
			const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
			setUser(response.data)
		} catch (error) {
			console.log(error);

		}
	}

	useEffect(() => {
		fetchUser();
	}, [])

	return (
		<div className="user-page">
			<button onClick={() => navigate('/users')} className="btn">back</button>
			<h1>СТРАНИЦА ПОЛЬЗОВАТЕЛЯ {user?.name}</h1>
			<span className="item-page">{user?.email}</span>
			<span className="item-page">{user?.address.street}</span>
		</div>
	)
}

export default UserPage