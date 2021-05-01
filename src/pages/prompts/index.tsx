import { useCollection } from 'react-firebase-hooks/firestore'

import { Layout } from '../../components/layout'
import { PageSpinner } from '../../components/page-spinner'
import { firestore } from '../../firebase'
import { PromptsList } from './prompts-list'

export function PromptsPage() {
	const [data, isLoading, error] = useCollection(firestore.collection('prompt'))

	const prompts = data?.docs?.map((doc: any) => ({
		...doc.data(),
		id: doc.id,
	}))

	return (
		<Layout>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			<PageSpinner loading={isLoading}>
				<PromptsList data={prompts} />
			</PageSpinner>
		</Layout>
	)
}
