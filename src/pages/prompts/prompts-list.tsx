import React from 'react'
import { useTranslation } from 'react-i18next'
import { PromptsItem } from './prompts-item'

export function PromptsList({ data }: any) {
	const { t } = useTranslation()
	return (
		<div className="flex flex-col">
			{!data.length && t('No prompts yet.')}
			{data.map((item: any) => (
				<PromptsItem key={item.id} {...item} />
			))}
		</div>
	)
}
