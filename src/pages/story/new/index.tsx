import React, { useState } from 'react'
import { Layout } from '../../../components/layout'
import { useHistory, useParams } from 'react-router-dom'

import { Button, Form } from 'antd'
import { useTranslation } from 'react-i18next'
import { StoryForm } from '../../../components/story-form'
import { firestore } from '../../../firebase'
import { nanoid } from 'nanoid'
import { useDocument } from 'react-firebase-hooks/firestore'
import { PageSpinner } from '../../../components/page-spinner'

export function StoryNewPage() {
	const { promptId }: any = useParams()
	const { t } = useTranslation()
	const history = useHistory()
	const [form] = Form.useForm()

	const [promptSnapShot, isLoading] = useDocument(
		firestore.doc(`prompt/${promptId}`)
	)
	const prompt = { ...promptSnapShot?.data(), id: promptSnapShot?.id }

	const [isSubmitting, setIsSubmitting] = useState(false)

	const onSubmit = async () => {
		setIsSubmitting(true)
		const values = await form.validateFields()

		values.user = '1234567'
		values.prompt = prompt.id
		console.log(values)

		const res = await firestore
			.collection('story')
			.doc(nanoid())
			.set(values)

		setIsSubmitting(false)
		history.replace({ pathname: '/story' })
	}

	return (
		<Layout>
			<div className="w-full max-w-3xl">
				{/*<ErrorTag error={error} />*/}

				<PageSpinner loading={isLoading}>
					<ul className="text-center">
						<li>Language: {prompt.language}</li>
						<li className="text-xl my-6">{prompt.content}</li>
						<div className="space-x-2 m-5">
							{prompt.tags?.map((i: any) => (
								<span
									className="p-2 bg-blue-200"
									key={prompt.id + i}
								>
									{i}
								</span>
							))}
						</div>
					</ul>
				</PageSpinner>

				<StoryForm form={form} />

				<div className="flex justify-center space-x-2">
					<Button
						type="primary"
						onClick={onSubmit}
						loading={isSubmitting}
					>
						{t('prompt.button.add')}
					</Button>
				</div>
			</div>
		</Layout>
	)
}
