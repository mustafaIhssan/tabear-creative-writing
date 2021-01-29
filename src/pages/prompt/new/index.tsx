import React, { useState } from 'react'
import { Layout } from '../../../components/layout'
import { PromptsForm } from '../../../components/prompts-form'
import { useHistory } from 'react-router-dom'

import { Button, Form } from 'antd'
import { useTranslation } from 'react-i18next'

export function PromptsNewPage() {
	const { t } = useTranslation()
	const history = useHistory()
	const [form] = Form.useForm()

	const [isLoading, setIsLoading] = useState(false)

	const onSubmit = async () => {
		setIsLoading(true)
		const values = await form.validateFields()
		console.log(values)

		// const res = await firestore
		// 	.collection('prompt')
		// 	.doc(nanoid())
		// 	.set(values)

		// history.replace({ pathname: '/prompts' })
		// mutate(values, {
		// 	onSuccess: (newData) => {
		// 		queryClient.setQueryData(
		// 			`${storeBaseApi}/products`,
		// 			(oldData = []) => [...oldData, newData]
		// 		)
		// 	},
		// })
		setIsLoading(false)
	}

	return (
		<Layout>
			<div className="w-full max-w-3xl">
				{/*<ErrorTag error={error} />*/}

				<PromptsForm form={form} />

				<div className="flex justify-center space-x-2">
					<Button
						type="primary"
						onClick={onSubmit}
						loading={isLoading}
					>
						{t('prompt.button.add')}
					</Button>
				</div>
			</div>
		</Layout>
	)
}
