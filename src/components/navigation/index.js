import './style.css'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { queryActions } from '../../store/slices/query'
import { offsetActions } from '../../store/slices/offset'
import { categoriesActions } from '../../store/slices/categories'

let timerId
export function Navigation() {
	const dispatch = useDispatch()
	const [value, setValue] = useState()

	useEffect(() => {
		fetch('https://dummyjson.com/products/categories')
			.then(res => res.json())
			.then(res => dispatch(categoriesActions.load(res)))
			.catch(console.log)
	}, [])

	function search(e) {
		setValue(e.target.value)

		clearTimeout(timerId)
		timerId = setTimeout(value => {
			dispatch(offsetActions.set(0))
			dispatch(queryActions.set(value))
		}, 1000, e.target.value)
	}

	return (
		<nav>
			<div>
				<h1>Web-store</h1>
				<input
					type='text'
					value={value}
					onChange={search}
					placeholder='Search item'
				/>
			</div>
		</nav>
	)
}
