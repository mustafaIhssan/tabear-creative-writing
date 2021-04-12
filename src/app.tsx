import './styles/fonts.css'

import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppRouter } from './app-router'
import { PageSpinner } from './components/page-spinner'
import { SecurityProvider } from './security'

export function App() {
	const queryClient = new QueryClient()

	return (
		<Suspense fallback={<PageSpinner />}>
			<SecurityProvider>
				<QueryClientProvider client={queryClient}>
					<AppRouter />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</SecurityProvider>
		</Suspense>
	)
}
