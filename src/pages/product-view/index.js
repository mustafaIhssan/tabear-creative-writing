import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'antd'
import { strip } from '../../utils/utils'
import { useFetch } from '../../api'
import { PageSpinner } from '../../components/page-spinner'
import { Layout } from '../../components/layout'
import { useAuth } from '../../security'

export function ProductViewPage() {
	const { id } = useParams()
	const { storeBaseApi } = useAuth()
	const { data = {}, isLoading } = useFetch({
		url: `${storeBaseApi}/products/${id}`,
	})

	return (
		<Layout>
			{isLoading ? (
				<PageSpinner />
			) : (
				<div className="flex flex-col text-center justify-around">
					<img
						src={data.images[0]?.src}
						alt={data.images[0]?.alt}
						className="w-2/3 mx-auto rounded-2xl"
					/>
					<h1 className="mt-8 text-xl font-semibold">{data.name}</h1>

					{data.categories.map((i) => (
						<span key={i.name}>{i.name}</span>
					))}

					<h2>${data.price}</h2>

					<span className="mt-2 p-4">{strip(data.description)}</span>
					<Link to={`/products/${data.id}/edit`}>
						<Button>Edit</Button>
					</Link>
				</div>
			)}
		</Layout>
	)
}
