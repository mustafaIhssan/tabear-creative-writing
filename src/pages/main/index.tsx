import { useFetch } from '../../api'
import { Layout } from '../../components/layout'
import { PageSpinner } from '../../components/page-spinner'
import { UserStory } from '../../components/user-story'
import { PromptsItem } from '../prompts/prompts-item'
// const Button = styled.button(xw`
//   bg-indigo-600
//   hover:bg-indigo-500
//   focus[outline-none border-indigo-700 ring]
//   active:bg-indigo-700
//   transition duration-150 ease-in-out
//   relative flex justify-center
//   px-4 py-2 text-sm
//   font-medium leading-5 text-white
//   rounded-md w-64 mt-5
// `)

export function MainPage() {
	const { isLoading: isStoryLoading, data: stories } = useFetch({
		url: `/stories`,
	})

	const { isLoading: isPromptLoading, data: prompts } = useFetch({
		url: `/prompts`,
	})

	const isLoading = isStoryLoading && isPromptLoading

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
						{prompts?.map((item: any) => (
							<PromptsItem key={item.id} {...item} />
						))}
					</div>
				</div>
			</PageSpinner>
		</Layout>
	)
}
