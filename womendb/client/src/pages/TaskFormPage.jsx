import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function TaskFormPage() {
	// registrar inputs
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();
	const navigate = useNavigate();

	const onSubmit = handleSubmit(async (data) => {
		if (params.id) {
			await updateTask(params.id, data);
			toast.success('Task updated', {
				position: 'bottom-right',
				style: { backgroundColor: '#3a2597', color: '#fff' },
			});
		} else {
			await createTask(data);
			toast.success('Task created', {
				position: 'bottom-right',
				style: { backgroundColor: '#39d28d', color: '#fff' },
			});
		}

		navigate('/tasks');
	});

	useEffect(() => {
		async function loadTask() {
			if (params.id) {
				const res = await getTask(params.id);
				setValue('title', res.data.title);
				setValue('description', res.data.description);
			}
		}

		loadTask();
	}, []);

	const params = useParams();
	console.log(params);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="title"
					{...register('title', { required: true })}
				/>

				{errors.title && <p>title is required</p>}
				<textarea
					rows="3"
					placeholder="Description"
					{...register('description', { required: true })}
				></textarea>

				{errors.description && <p>Description is required</p>}
				<button>Save</button>
			</form>

			{params.id && (
				<button
					onClick={async () => {
						const accepted = window.confirm('Are you sure?');
						if (accepted) {
							await deleteTask(params.id);
							toast.success('Task deleted', {
								position: 'bottom-right',
								style: { backgroundColor: '#bd1212', color: '#fff' },
							});
							navigate('/tasks');
						}
					}}
				>
					Delete
				</button>
			)}
		</div>
	);
}

export default TaskFormPage;
