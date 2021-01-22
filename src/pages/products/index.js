import React from 'react'
import { Layout } from '../../components/layout'
import { PageSpinner } from '../../components/page-spinner'
import { useFetch } from '../../api'
import { ProductsList } from './products-list'
import { useAuth } from '../../security'

export function ProductsPage() {
	const { storeBaseApi } = useAuth()
	const { isLoading, data } = useFetch({
		url: `${storeBaseApi}/products`,
	})
	return (
		<Layout>
			{isLoading ? <PageSpinner /> : <ProductsList products={data} />}
		</Layout>
	)
}
