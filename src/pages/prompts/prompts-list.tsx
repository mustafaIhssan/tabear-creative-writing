import React from 'react'
import { useTranslation } from 'react-i18next'
import { PromptsItem } from './prompts-item'

export function PromptsList({ data }: any) {
	const { t } = useTranslation()
	return (
		<div className="flex flex-col">
			{!data.length && t('No products yet.')}
			{/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type. */}
			{data.map((item) => (
				// @ts-expect-error ts-migrate(2786) FIXME: 'PromptsItem' cannot be used as a JSX component.
				<PromptsItem key={item.id} {...item} />
			))}
		</div>
	)
}
