import React from 'react'
import { Layout } from '../../components/layout'
import { PageSpinner } from '../../components/page-spinner'
import { UserStory } from '../../components/user-story'
import { useStory } from '../../api/story'
import { usePrompt } from '../../api/prompt'
import { PromptsItem } from '../prompts/prompts-item'

export function MainPage() {
	const [stories, isStoryLoading] = useStory()
	console.log(stories)
	// const [prompts, isPromptLoading] = usePrompt()

	// const isLoading = isStoryLoading && isPromptLoading

	const isLoading = false
	return (
		<Layout>
			<PageSpinner loading={isLoading}>
				<div className="flex">
					{/*<div className="flex-1">*/}
					{/*	<h1>Latest Stories</h1>*/}
					{/*	{[{ id: 123 }].map((i: any) => (*/}
					{/*		<UserStory key={i.id} story={i} />*/}
					{/*	))}*/}
					{/*</div>*/}
					{/*<div className="flex-1">*/}
					{/*	<h1>Latest Prompts</h1>*/}
					{/*	{prompts.map((item: any) => (*/}
					{/*		<PromptsItem key={item.id} {...item} />*/}
					{/*	))}*/}
					{/*</div>*/}
				</div>
			</PageSpinner>
		</Layout>
	)
}
