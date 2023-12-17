interface IAdress {
	street: string,
	city: string,
	zipCode: string
}

export interface IUser {
	id: number,
	name: string,
	username: string,
	email: string,
	address: IAdress
}

export interface ITodo {
	title: string,
	userId: number,
	id: number,
	completed: boolean
}