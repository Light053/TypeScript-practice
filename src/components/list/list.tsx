
interface ListProps<T> {
	items: T[],
	rednerItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
	return (
		<div>
			{props.items.map(props.rednerItem)}
		</div>
	)
}

