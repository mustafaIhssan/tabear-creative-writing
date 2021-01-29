import { useHistory, useParams } from 'react-router-dom'
import { Button, Form } from 'antd'
import { PageSpinner } from '../../components/page-spinner'
import { Layout } from '../../components/layout'
import { ErrorTag } from '../../components/error-tag'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { PromptsForm } from '../../components/prompts-form'
import { useState } from 'react'

export function PromptEditPage({}) {
	const [form] = Form.useForm()
	const history = useHistory()
	const { id }: any = useParams()
	// const queryClient = useQueryClient()

	const [promptSnapShot, isLoading] = useDocument(
		firestore.doc(`prompt/${id}`)
	)
	const prompt = { ...promptSnapShot?.data(), id: promptSnapShot?.id }

	const isNew = !id

	const [isUpdating, setIsUpdating] = useState(false)
	const [error, setError] = useState(false)
	// const { storeBaseApi } = useAuth()
	//
	// const url = `${storeBaseApi}/products/${id}`
	//
	// const { data = {}, isLoading } = useFetch({ url })
	//
	// const useEdit = useMutation({ url, method: 'PUT' })
	// const useRemove = useMutation({ url, method: 'DELETE' })
	//
	const onSubmit = async () => {
		setIsUpdating(true)
		const values = await form.validateFields()
		console.log(values)

		return await firestore
			.collection('prompt')
			.doc(id)
			.update(values)
			.then((i) => {
				setIsUpdating(false)
				history.replace({ pathname: '/prompts' })
			})
			.catch((e) => setError(e))

		// 	values.categories = values.categories.map((i) => ({ id: i }))
		// 	useEdit.mutate(values, {
		// 		onSuccess: (newData) => {
		// 			const products = queryClient.getQueryState(
		// 				`${storeBaseApi}/products`
		// 			)
		// 			if (products) {
		// 				queryClient.setQueryData(
		// 					`${storeBaseApi}/products`,
		// 					(oldData) =>
		// 						oldData.map((i) =>
		// 							i.id === parseInt(id) ? newData : i
		// 						)
		// 				)
		// 			}
		//
		// 			queryClient.setQueryData(
		// 				`${storeBaseApi}/products/${id}`,
		// 				newData
		// 			)
		//
		// 		},
		// 	})
	}
	//
	const onRemove = () => {
		console.log('onRemove')
		// 	useRemove.mutate(
		// 		{},
		// 		{
		// 			onSuccess: () => {
		// 				queryClient.setQueryData(
		// 					`${storeBaseApi}/products`,
		// 					(oldData = []) =>
		// 						oldData.filter((i) => i.id !== parseInt(id))
		// 				)
		// 				history.replace({ pathname: `/products` })
		// 			},
		// 		}
		// 	)
	}

	return (
		<Layout>
			<PageSpinner loading={isLoading}>
				<div className="w-full max-w-3xl">
					<ErrorTag error={error} />
					<PromptsForm data={prompt} form={form} />
					<div className="flex justify-center space-x-2">
						<Button
							type="primary"
							onClick={onSubmit}
							loading={isUpdating}
						>
							Edit product
						</Button>
						{!isNew && (
							<Button
								danger
								// loading={useRemove?.isLoading}
								onClick={onRemove}
							>
								Remove Product
							</Button>
						)}
					</div>
				</div>
			</PageSpinner>
		</Layout>
	)
}
