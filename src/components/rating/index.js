import './style.css'

export function Rating({ rating }) {
	return (
		<div className='rating'>
			{Array(5).fill('★').map((star, index) => (
				<label
					key={index}
					className={index <= rating - 1 ? 'selected' : ''}
				>
					{star}
				</label>
			))}
		</div>
	)
}
