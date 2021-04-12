import firebase from 'firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { usePrompt } from '../prompt'

interface useStoryProps {
	where?: {
		id: string
		field: string
	}
}
export function useStory(props?: useStoryProps) {
	const [_stories, isPrimaryLoading] = useCollection(
		props?.where
			? firestore
					.collection('story')
					.where(props.where.field, '==', props.where.id)
			: firestore.collection('story')
	)

	console.log(_stories, isPrimaryLoading)

	const [_prompts, isPromptsLoading] = useCollection(
		firestore.collection('prompt')
	)

	const prompts = _prompts?.docs?.map((doc: any) => ({
		...doc.data(),
		id: doc.id,
	}))

	const stories =
		_stories?.docs?.map((doc: any) => {
			const data = doc.data()
			return {
				...data,
				prompt: prompts?.find((i: any) => i.id === data.prompt),
				id: doc.id,
			}
		}) || []

	return [stories, isPrimaryLoading || isPromptsLoading] as const
}

export function useStoryById(id: string) {
	const [storySnapShot, isLoading] = useDocument(firestore.doc(`story/${id}`))

	const story = { ...storySnapShot?.data(), id: storySnapShot?.id }

	// const [prompts, isPromptLoading] = usePrompt()
	//
	// story.prompt = prompts?.find((i: any) => i.id === story.prompt)

	// return [story, isLoading || isPromptLoading]
	return []
}
