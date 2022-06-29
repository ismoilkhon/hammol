import './style.css'
import { Rating } from '../rating'
import { useNavigate } from 'react-router-dom'
import { capitalize, getNewPrice } from '../../utils'

export function Card({ product }) {
	const navigate = useNavigate()
	return (
		<div className='card' onClick={() => navigate(`/${product.id}`)}>
			<img src={product?.thumbnail} alt={product?.title}/>
			<div className='row'>
				<div>
					<h1>{product.title}</h1>
					<p>{capitalize(product.category)}</p>
					<Rating rating={product?.rating}/>
					<div className='cardContent'>
						{product?.discountPercentage && <p>${getNewPrice(product.price, product?.discountPercentage)}</p>}
						<p className={product?.discountPercentage ? 'old' : 'new'}>${product.price}</p>
						{product?.discountPercentage && <p>{Math.round(product?.discountPercentage)}% of</p>}
					</div>
				</div>
				<div>{product.description}</div>
			</div>
		</div>
	)
}
