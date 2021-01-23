import React from 'react'
import { Layout } from '../../components/layout'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { PageSpinner } from '../../components/page-spinner'
import { PromptsList } from './prompts-list'

export function PromptsPage() {
	const [data, isLoading, error] = useCollection(
		firestore.collection('prompt')
	)

	// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'doc' implicitly has an 'any' type.
	const prompts = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))

	return (
		<Layout>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}

			{/* @ts-expect-error ts-migrate(2786) FIXME: 'PageSpinner' cannot be used as a JSX component. */}
			{isLoading ? <PageSpinner /> : <PromptsList data={prompts} />}
		</Layout>
	)
}
