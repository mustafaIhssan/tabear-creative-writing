import { useHistory, useParams } from 'react-router-dom'
import { Button, Form } from 'antd'
import { PageSpinner } from '../../../components/page-spinner'
import { Layout } from '../../../components/layout'
import { ErrorTag } from '../../../components/error-tag'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../../firebase'
import { StoryForm } from '../../../components/story-form'
import { useState } from 'react'

export function StoryEditPage({}) {
	const [form] = Form.useForm()
	const history = useHistory()
	const { id }: any = useParams()
	// const queryClient = useQueryClient()

	const [storySnapShot, isLoading] = useDocument(firestore.doc(`story/${id}`))
	const story = { ...storySnapShot?.data(), id: storySnapShot?.id }

	const isNew = !id

	const [isUpdating, setIsUpdating] = useState(false)
	const [isRemoving, setIsRemoving] = useState(false)
	const [error, setError] = useState(false)

	const onSubmit = async () => {
		setIsUpdating(true)
		const values = await form.validateFields()
		console.log(values)

		return await firestore
			.collection('story')
			.doc(id)
			.update(values)
			.then((i) => {
				setIsUpdating(false)
				history.replace({ pathname: '/story' })
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
					<StoryForm data={story} form={form} />
					<div className="flex justify-center space-x-2">
						<Button
							type="primary"
							onClick={onSubmit}
							loading={isUpdating}
						>
							Edit Story
						</Button>
						{!isNew && (
							<Button
								danger
								loading={isRemoving}
								onClick={onRemove}
							>
								Remove Story
							</Button>
						)}
					</div>
				</div>
			</PageSpinner>
		</Layout>
	)
}
