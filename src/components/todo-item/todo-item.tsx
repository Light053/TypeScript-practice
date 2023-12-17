import { FC } from "react";
import { ITodo } from "../../types/types";
import './todo-item.css'

interface TodoItemProps {
	todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	return (
		<div className="todo-block">
			<input type="checkbox" checked={todo.completed} />
			<span className="todo-item">{todo.id}. {todo.title}</span>
		</div>
	)
}

export default TodoItem