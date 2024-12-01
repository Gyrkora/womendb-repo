import { Link } from 'react-router-dom';
import {
	CardCategoriesMain,
	CategoriesMainContainer,
} from '../styles/Categories.styles';

export const Categories = ({ categories }) => {
	return (
		<CategoriesMainContainer>
			{categories.map((category) => (
				<Link key={category.id} to={`/category/${category.id}`}>
					<CardCategoriesMain $cardCategoryImage={category.bgImage}>
						<p>{category.name}</p>
					</CardCategoriesMain>
				</Link>
			))}
		</CategoriesMainContainer>
	);
};
