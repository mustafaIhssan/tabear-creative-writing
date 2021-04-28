import { Button, Form } from 'antd'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ErrorTag } from '../../../components/error-tag'
import { Layout } from '../../../components/layout'
import { PageSpinner } from '../../../components/page-spinner'
import { StoryForm } from '../../../components/story-form'
import { firestore } from '../../../firebase'

export function StoryEditPage() {
	const [form] = Form.useForm()
	const history = useHistory()
	const { id }: any = useParams()

	// const [story, isLoading] = useStoryById(id)
	const [story, isLoading] = [{}, false]

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
			.catch((error_) => setError(error_))
	}

	const onRemove = () => {
		setIsRemoving(true)
		console.log('onRemove')
		setIsRemoving(false)
	}

	return (
		<Layout>
			<PageSpinner loading={isLoading}>
				<div className="flex flex-col h-full">
					<ErrorTag error={error} />

					<StoryForm data={story} form={form} />
					<div className="flex justify-center space-x-2">
						<Button type="primary" onClick={onSubmit} loading={isUpdating}>
							Edit Story
						</Button>
						<Button danger loading={isRemoving} onClick={onRemove}>
							Remove Story
						</Button>
					</div>
				</div>
			</PageSpinner>
		</Layout>
	)
}
