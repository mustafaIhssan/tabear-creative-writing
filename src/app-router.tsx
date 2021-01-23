import React from 'react'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'

import { useAuth } from './security'
import { LoginPage } from './pages/login'
import { PromptsPage } from './pages/prompts'
// @ts-expect-error ts-migrate(2305) FIXME: Module '"./pages/prompts-new"' has no exported mem... Remove this comment to see the full error message
import { ProductNewPage, PromptsNewPage } from './pages/prompts-new'
import { ProductEditPage } from './pages/product-edit'
import { PromptsViewPage } from './pages/prompt-view'
import { SingupPage } from './pages/signup'
import { MainPage } from './pages/main'
import { NotFound } from './pages/NotFound'
import { StoryPage } from './pages/story'

export function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route path="/public">public Page</Route>
				<Route exact path="/singup" component={SingupPage} />
				<Route exact path="/login" component={LoginPage} />

				{/* @ts-expect-error ts-migrate(2741) FIXME: Property 'render' is missing in type '{ exact: tru... Remove this comment to see the full error message */}
				<PrivateRoute exact path="/" component={MainPage} />
				{/* @ts-expect-error ts-migrate(2741) FIXME: Property 'render' is missing in type '{ exact: tru... Remove this comment to see the full error message */}
				<PrivateRoute
					exact
					path="/prompts/new"
					component={PromptsNewPage}
				/>
				{/* @ts-expect-error ts-migrate(2739) FIXME: Type '{ path: string; component: () => Element; }'... Remove this comment to see the full error message */}
				<PrivateRoute path="/prompts/:id" component={PromptsViewPage} />
				{/* @ts-expect-error ts-migrate(2739) FIXME: Type '{ path: string; component: () => Element; }'... Remove this comment to see the full error message */}
				<PrivateRoute path="/story/:id" component={StoryPage} />
				{/*<PrivateRoute*/}
				{/*	path="/products/:id/edit"*/}
				{/*	component={ProductEditPage}*/}
				{/*/>*/}
				{/* @ts-expect-error ts-migrate(2741) FIXME: Property 'render' is missing in type '{ exact: tru... Remove this comment to see the full error message */}
				<PrivateRoute exact path="/prompts" component={PromptsPage} />
				{/*<Route exact path="/">*/}
				{/*	<Redirect to={{ pathname: '/private' }} />*/}
				{/*</Route>*/}
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'path' implicitly has an 'any' typ... Remove this comment to see the full error message
function PrivateRoute({ path, exact, render, component: RenderedComponent }) {
	const { isAuthenticated } = useAuth()

	return (
		<Route
			path={path}
			exact={exact}
			render={({ location }) => {
				if (!isAuthenticated) {
					return (
						<Redirect
							to={{
								pathname: '/login',
								state: { from: location },
							}}
						/>
					)
				}

				if (render) {
					return render({ location })
				}

				return <RenderedComponent />
			}}
		/>
	)
}
