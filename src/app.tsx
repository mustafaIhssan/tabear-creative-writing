import React, { Suspense } from 'react'
import { AppRouter } from './app-router'
import { SecurityProvider } from './security'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { PageSpinner } from './components/page-spinner'

export function App() {
	const queryClient = new QueryClient()

	return (
		// @ts-expect-error ts-migrate(2786) FIXME: 'PageSpinner' cannot be used as a JSX component.
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
