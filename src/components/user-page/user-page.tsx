import { FC } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import { IUser } from "../../types/types";
import List from "../list/list";
import UserItem from "../user-item/user-item";

const UserPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const navigate = useNavigate();

	const fetchUsers = async () => {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(response.data)
		} catch (error) {
			console.log(error);

		}
	}
	useEffect(() => {
		fetchUsers();
	}, [])

	return (
		<List
			items={users}
			rednerItem={(user: IUser) =>
				<UserItem
					user={user}
					toUser={(user) => navigate(`/users/${user.id}`)}
					key={user.id} />}
		/>
	)
}

export default UserPage