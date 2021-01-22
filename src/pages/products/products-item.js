import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { strip } from '../../utils/utils'

export function ProductsItem(product = {}) {
	return (
		<div className="w-64 bg-pink-200 text-center p-5 m-2">
			<img src={product.images[0]?.src} alt={product.images[0]?.alt} />
			<ul>
				<li>{product.name}</li>
				<li>Price: ${product.price}</li>
				<li className="text-xl my-6">
					{strip(product.short_description)}
				</li>
				<ul>
					{product.categories?.map((i) => (
						<li key={i.id + i.name}>{i.name}</li>
					))}
				</ul>
			</ul>
			<Link to={`/products/${product.id}`}>
				<Button>Info</Button>
			</Link>
		</div>
	)
}
