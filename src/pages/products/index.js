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
		fetch(`/api/product?limit=${constants.LIMIT}&offset=${offset}&category=${selectedCategory}&name=${query}`)
			.then(res => res.json())
			.then(res => {
				dispatch(countActions.set(res.count))
				dispatch(productsActions.set(res.products))
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
