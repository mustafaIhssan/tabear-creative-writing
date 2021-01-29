import { useHistory, useParams } from 'react-router-dom'
import { Button, Form } from 'antd'
import { PageSpinner } from '../../../components/page-spinner'
import { Layout } from '../../../components/layout'
import { ErrorTag } from '../../../components/error-tag'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../../firebase'
import { PromptsForm } from '../../../components/prompts-form'
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
	const [isRemoving, setIsRemoving] = useState(false)
	const [error, setError] = useState(false)

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
	}

	const onRemove = () => {
		console.log('onRemove')
		// history.replace({ pathname: '/prompts' })
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
								loading={isRemoving}
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
