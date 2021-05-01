// import { Button, Form } from 'antd'
// import { nanoid } from 'nanoid'
// import { useState } from 'react'
// import { useDocument } from 'react-firebase-hooks/firestore'
// import { useTranslation } from 'react-i18next'
// import { useHistory, useParams } from 'react-router-dom'
//
// import { Layout } from '../../../components/layout'
// import { PageSpinner } from '../../../components/page-spinner'
// import { StoryForm } from '../../../components/story-form'
// import { firestore } from '../../../firebase'

export function StoryNewPage() {
	return <div>2</div>
	// const { t } = useTranslation()
	// const { promptId }: any = useParams()
	// const history = useHistory()
	// const [form] = Form.useForm()
	//
	// const [promptSnapShot, isLoading] = useDocument(
	// 	firestore.doc(`prompt/${promptId}`)
	// )
	// const prompt = { ...promptSnapShot?.data(), id: promptSnapShot?.id }
	//
	// const [isSubmitting, setIsSubmitting] = useState(false)
	//
	// const onSubmit = async () => {
	// 	setIsSubmitting(true)
	// 	const values = await form.validateFields()
	//
	// 	values.user = '1234567'
	// 	values.prompt = prompt.id
	// 	values.score = 0
	// 	console.log(values)
	//
	// 	const res = await firestore
	// 		.collection('story')
	// 		.doc(nanoid())
	// 		.set(values)
	//
	// 	setIsSubmitting(false)
	// 	history.replace({ pathname: '/story' })
	// }
	//
	// return (
	// 	<Layout>
	// 		<PageSpinner loading={isLoading}>
	// 			<div className="flex flex-col h-full">
	// 				{/*<ErrorTag error={error} />*/}
	//
	// 				<ul className="text-center">
	// 					<li>Language: {prompt.language}</li>
	// 					<li className="text-xl my-6">{prompt.content}</li>
	// 					<div className="space-x-2 m-5">
	// 						{prompt.tags?.map((i: any) => (
	// 							<span
	// 								className="p-2 bg-blue-200"
	// 								key={prompt.id + i}
	// 							>
	// 								{i}
	// 							</span>
	// 						))}
	// 					</div>
	// 				</ul>
	//
	// 				<StoryForm form={form} />
	//
	// 				<div className="flex justify-center space-x-2">
	// 					<Button
	// 						type="primary"
	// 						onClick={onSubmit}
	// 						loading={isSubmitting}
	// 					>
	// 						{t('prompt.button.add')}
	// 					</Button>
	// 				</div>
	// 			</div>
	// 		</PageSpinner>
	// 	</Layout>
	// )
}
