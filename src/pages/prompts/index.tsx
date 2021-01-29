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

	const prompts = data?.docs?.map((doc: any) => ({
		...doc.data(),
		id: doc.id,
	}))

	return (
		<Layout>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{isLoading ? <PageSpinner /> : <PromptsList data={prompts} />}
		</Layout>
	)
}
