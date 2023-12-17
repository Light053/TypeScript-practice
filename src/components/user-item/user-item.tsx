import { FC } from "react"
import { IUser } from "../../types/types"
import './user-item.css'

interface UserItemProps {
	user: IUser,
	toUser: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({ user, toUser }) => {
	return (
		<div className="user" onClick={() => toUser(user)}>
			{user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.city}
		</div>
	)
}

export default UserItem