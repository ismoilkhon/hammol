import './style.css'

export function Pagination({ onSelect, count, limit, offset }) {
	return (
		<div className='pagination'>
			{Array(Math.ceil(count / limit)).fill('').map((_, index) => (
				<button
					key={index}
					disabled={index * limit === offset}
					onClick={() => onSelect(index * limit)}
					className={index * limit === offset ? 'disabled' : ''}
				>
					{index + 1}
				</button>
			))}
		</div>
	)
}
