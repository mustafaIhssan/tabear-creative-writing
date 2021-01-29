import React from 'react'
import { Layout } from '../../components/layout'
import { PageSpinner } from '../../components/page-spinner'
import { UserStory } from '../../components/user-story'
import { useStory } from '../../api/story'
import { usePrompt } from '../../api/prompt'
import { PromptsList } from '../prompts/prompts-list'

export function MainPage() {
	const [stories, isStoryLoading] = useStory()
	const [prompts, isPromptLoading] = usePrompt()

	const isLoading = isStoryLoading || isPromptLoading

	return (
		<Layout>
			<PageSpinner loading={isLoading}>
				<div className="flex">
					<div className="flex-1">
						<h1>Latest Stories</h1>
						{stories?.map((i: any) => (
							<UserStory key={i.id} story={i} />
						))}
					</div>
					<div className="flex-1">
						<h1>Latest Prompts</h1>
						<PromptsList data={prompts} />
					</div>
				</div>
			</PageSpinner>
		</Layout>
	)
}
