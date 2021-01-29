import React, { Suspense } from 'react'
import './styles/fonts.css'
import { AppRouter } from './app-router'
import { SecurityProvider } from './security'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { PageSpinner } from './components/page-spinner'

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
