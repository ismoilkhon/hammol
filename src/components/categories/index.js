import './style.css'
import { capitalize } from '../../utils'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { offsetActions } from '../../store/slices/offset'
import { selectedCategoryActions } from '../../store/slices/selectedCategory'

export function Categories() {
	const dispatch = useDispatch()
	const categories = useSelector(store => store.categories)
	const selectedCategory = useSelector(store => store.selectedCategory.value)

	function changeCategory(category) {
		dispatch(offsetActions.set(0))
		dispatch(selectedCategoryActions.set(category === selectedCategory ? '' : category))
	}

	return (
		<div className='categories'>
			<h1>Categories</h1>
			{categories?.map(category => (
				<button
					key={category}
					onClick={() => changeCategory(category)}
					className={category === selectedCategory ? 'selected' : ''}
				>
					{capitalize(category)}
				</button>
			))}
		</div>
	)
}
