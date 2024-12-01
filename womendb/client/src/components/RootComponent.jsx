import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Categories } from '../pages/Categories';
import { Loader } from './UI/Loader';
import { getAllCategoriesList } from '../api/tasks.api';

const RootComponent = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadCategoriesList() {
			setLoading(true);
			try {
				const response = await getAllCategoriesList();
				setCategories(response.data);
			} catch (error) {
				console.error('Error fetching categories:', error);
			} finally {
				setLoading(false);
			}
		}
		loadCategoriesList();
	}, []);

	if (loading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<div>
			{categories ? (
				<Categories categories={categories} />
			) : (
				<p>No objects loaded</p>
			)}
		</div>
	);
};

export default RootComponent;
