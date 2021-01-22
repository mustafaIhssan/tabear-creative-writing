import React from 'react'
import { useTranslation } from 'react-i18next'
import { ProductsItem } from './products-item'

export function ProductsList({ products }) {
	const { t } = useTranslation()
	return (
		<div className="flex flex-row flex-wrap justify-around">
			{!products.length && t('No products yet.')}
			{products.map((product) => (
				<ProductsItem key={product.id} {...product} />
			))}
		</div>
	)
}
