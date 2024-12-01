import { SearchInputContainer } from '../styles/Categories.styles';

export function SearchInput({ value, onChange }) {
	return (
		<SearchInputContainer
			type="search"
			value={value}
			placeholder="Search woman"
			onChange={onChange}
		/>
	);
}

/* 


https://www.guvi.in/blog/build-a-search-filter-component-in-react/ 

chagpt







*/
