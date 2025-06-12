import axios from 'axios';

const tasksApi = axios.create({
	baseURL: 'http://127.0.0.1:8001/tasks/api/v1/tasks',
});

export const getAllTasks = () => {
	return tasksApi.get('/');
};
// return axios.get('http://localhost:8000/tasks/api/v1/tasks/');

export const getAllCategoriesList = () => {
	return axios.get('https://womendb-api.onrender.com/tasks/api/v1/categories/');
};

export const getAllCategories = (categoryId) => {
	return axios.get(
		`https://womendb-api.onrender.com/tasks/api/v1/categories/${categoryId}/`
	);
};

export const getAllWomen = (categoryId) => {
	return axios.get(
		`https://womendb-api.onrender.com/tasks/api/v1/women/?category=${categoryId}`
	);
};

export const getTask = (id) => {
	return tasksApi.get(`/${id}/`);
};

export const createTask = (task) => {
	return tasksApi.post('/', task);
};

export const deleteTask = (id) => {
	return tasksApi.delete(`/${id}`);
};

export const updateTask = (id, task) => {
	return tasksApi.put(`/${id}/`, task);
};

/* 


una forma de llamarla en los componentes:

	 axios
			  .get(`http://127.0.0.1:8000/tasks/api/v1/women/?category=${categoryId}`)
			  .then((response) => {
					setWomen(response.data);
			  })

			.catch((error) => console.error('Error fetching women:', error));
*/
