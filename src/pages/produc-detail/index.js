import './style.css'
import { capitalize, getNewPrice } from '../../utils'
import { useState, useEffect } from 'react'
import { Rating } from '../../components/rating'
import { useParams, useNavigate } from 'react-router-dom'

export function ProductDetail() {
	const { id } = useParams()
	const navigate = useNavigate()
	const [product, setProduct] = useState(null)
	const [selectedImage, setSelectedImage] = useState(null)

	useEffect(() => {
		fetch(`/api/product/${id}`)
			.then(res => res.json())
			.then(res => {
				setProduct(res)
				setSelectedImage(res?.images[0])
			})
			.catch(console.log)
	}, [])

	return (
		<>
			<button className='back-arrow' onClick={() => navigate(-1)}>➜</button>
			<div className='product-detail'>
				<div className='img-cont'>
					<img src={selectedImage}/>
					<div>
						{product?.images?.map(img => <img key={img} src={img} onClick={() => setSelectedImage(img)}/>)}
					</div>
				</div>
				<div className='content-cont'>
					<h1>{product?.title}</h1>
					<p>{product?.description}</p>
					<strong>Category:</strong>
					<span>{capitalize(product?.category)}</span>
					<strong>Brand:</strong>
					<span>{capitalize(product?.brand)}</span>
					<strong>Stock:</strong>
					<span>{product?.stock}</span>
					<div className='row'>
						<p className='new-price'>${getNewPrice(product?.price, product?.discountPercentage)}</p>
						<div>
							<p className='discount'>Save {Math.round(product?.discountPercentage)}%</p>
							<div className='inline-row'>
								<p>Old price:</p><del>${product?.price}</del>
							</div>
						</div>
					</div>
					<Rating rating={product?.rating}/>
				</div>
			</div>
		</>
	)
}
