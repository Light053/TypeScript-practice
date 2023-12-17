import { FC, useState } from "react";
import './events-example.css'

const EventsExample: FC = () => {
	const [isDrag, setIsDrag] = useState<boolean>(false)

	const onDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('drag');

	}
	const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false)
		console.log('DROP');
	}
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false)

	}
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true)
	}
	const color = isDrag ? '-red' : ''
	return (
		<div>
			<h1>ПЕРЕТАЩИТЕ ПЕРВЫЙ КВАДРАТ НА ВТОРОЙ</h1>
			<div
				onDrag={onDragHandler}
				draggable
				className="block1"></div>
			<div
				onDrop={onDropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				className={'block2' + color}></div>
		</div>
	)
}

export default EventsExample