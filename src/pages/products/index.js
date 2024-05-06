import './styles.css'
import { useEffect } from 'react'
import { constants } from '../../utils'
import { Card } from '../../components/card'
import { useSelector, useDispatch } from 'react-redux'
import { countActions } from '../../store/slices/count'
import { Pagination } from '../../components/pagination'
import { Categories } from '../../components/categories'
import { offsetActions } from '../../store/slices/offset'
import { productsActions } from '../../store/slices/products'

export function Products() {
	const dispatch = useDispatch()
	const count = useSelector(store => store.count.value)
	const query = useSelector(store => store.query.value)
	const products = useSelector(store => store.products)
	const offset = useSelector(store => store.offset.value)
	const selectedCategory = useSelector(store => store.selectedCategory.value)

	useEffect(() => {
		fetch(`https://dummyjson.com/products/?limit=${constants.LIMIT}&skip=${offset}&category=${selectedCategory}&select=${query}`)
			.then(res => res.json())
			.then(res => {
				dispatch(countActions.set(res.total))
				dispatch(productsActions.set(res.products))
				console.log(res)
			})
			.catch(console.log)
	}, [query, offset, selectedCategory])

	return (
		<>
			<Categories/>
			<main>
				{products?.map(product => <Card key={product?.id} product={product}/>)}
				<Pagination
					count={count}
					offset={offset}
					limit={constants.LIMIT}
					onSelect={offset => dispatch(offsetActions.set(offset))}
				/>
			</main>
		</>
	)
}
