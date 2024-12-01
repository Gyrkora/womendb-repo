import { useEffect, useState } from 'react';
import { getAllCategories } from '../api/tasks.api';
import { TaskCard } from './TaskCard';

export function TaskList() {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			try {
				const response = await getAllCategories();
				setCategory(response.data);
			} catch (error) {
				console.error('An error occurred while fetching category:', error);
			}
		}

		loadCategories();
	}, []);

	return (
		<div>
			{category.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}

/* 


async function loadCategories() {

	try {
		response = await getAllCategories(categoryId)
		setWomen(response.data);
	} catch (error) {
		console.error('Error fetching women:', error));
		
	}
}

*/
