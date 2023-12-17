import { FC } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { ITodo } from "../../types/types";
import List from "../list/list";
import TodoItem from "../todo-item/todo-item";

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	const fetchTodos = async () => {
		try {
			const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
			setTodos(response.data)
		} catch (error) {
			console.log(error);

		}
	}

	useEffect(() => {
		fetchTodos();
	}, [])


	return (
		<List items={todos} rednerItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
	)
}

export default TodosPage