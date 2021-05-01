import { Layout } from '../../components/layout'
import { Prompts } from './prompts'
import { Stories } from './stories'

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
	return (
		<Layout>
			<div className="flex">
				<Stories />
				<Prompts />
			</div>
		</Layout>
	)
}
