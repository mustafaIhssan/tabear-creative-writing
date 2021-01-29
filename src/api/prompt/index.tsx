import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'

interface useStoryProps {
	where?: {
		id: string
		field: string
	}
}
export function usePrompt(props?: useStoryProps) {
	const [_prompts, isPromptsLoading] = useCollection(
		firestore.collection('prompt')
	)

	const prompts = _prompts?.docs?.map((doc: any) => ({
		...doc.data(),
		id: doc.id,
	}))

	return [prompts, isPromptsLoading]
}
