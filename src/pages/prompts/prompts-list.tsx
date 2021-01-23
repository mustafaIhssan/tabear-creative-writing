import React from 'react'
import { useTranslation } from 'react-i18next'
import { PromptsItem } from './prompts-item'

export function PromptsList({ data }) {
	const { t } = useTranslation()
	return (
		<div className="flex flex-col">
			{!data.length && t('No products yet.')}
			{data.map((item) => (
				<PromptsItem key={item.id} {...item} />
			))}
		</div>
	)
}
