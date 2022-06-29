export const constants = {
	LIMIT: 8,
}

export function capitalize(text) {
	if (!text) {
		return ''
	}

	return text[0].toUpperCase() + text.slice(1)
}

export function getNewPrice(price, discount) {
	if (!discount) {
		return price
	}

	return Math.round(price * (1 - (discount / 100)))
}
