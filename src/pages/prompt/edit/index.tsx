import { Button, Form } from 'antd'
import { useState } from 'react'
import { useDocument } from 'react-firebase-hooks/firestore'
import { useHistory, useParams } from 'react-router-dom'

import { ErrorTag } from '../../../components/error-tag'
import { Layout } from '../../../components/layout'
import { PageSpinner } from '../../../components/page-spinner'
import { PromptsForm } from '../../../components/prompts-form'
import { firestore } from '../../../firebase'

export function PromptEditPage() {
	const [form] = Form.useForm()
	const history = useHistory()
	const { id }: any = useParams()
	// const queryClient = useQueryClient()

	const [promptSnapShot, isLoading] = useDocument(firestore.doc(`prompt/${id}`))
	const prompt = { ...promptSnapShot?.data(), id: promptSnapShot?.id }

	const isNew = !id

	const [isUpdating, setIsUpdating] = useState(false)
	const [isRemoving] = useState(false)
	const [error, setError] = useState(false)

	const onSubmit = async () => {
		setIsUpdating(true)
		const values = await form.validateFields()

		return await firestore
			.collection('prompt')
			.doc(id)
			.update(values)
			.then((i) => {
				setIsUpdating(false)
				history.replace({ pathname: '/prompts' })
			})
			.catch((error_) => setError(error_))
	}

	const onRemove = () => {
		// history.replace({ pathname: '/prompts' })
	}

	return (
		<Layout>
			<PageSpinner loading={isLoading}>
				<div className="w-full max-w-3xl">
					<ErrorTag error={error} />
					<PromptsForm data={prompt} form={form} />
					<div className="flex justify-center space-x-2">
						<Button type="primary" onClick={onSubmit} loading={isUpdating}>
							Edit product
						</Button>
						{!isNew && (
							<Button danger loading={isRemoving} onClick={onRemove}>
								Remove Product
							</Button>
						)}
					</div>
				</div>
			</PageSpinner>
		</Layout>
	)
}
