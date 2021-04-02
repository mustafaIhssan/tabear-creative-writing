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
import { SingupPage } from './pages/signup'
import { MainPage } from './pages/main'
import { NotFound } from './pages/NotFound'
import { StoriesPage } from './pages/stories'
import { PromptsViewPage } from './pages/prompt/view'
import { PromptEditPage } from './pages/prompt/edit'
import { PromptsNewPage } from './pages/prompt/new'
import { StoryPage } from './pages/story/view'
import { StoryEditPage } from './pages/story/edit'
import { StoryNewPage } from './pages/story/new'

export function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route path="/public">public Page</Route>
				<Route exact path="/singup" component={SingupPage} />
				<Route exact path="/login" component={LoginPage} />

				<PrivateRoute exact path="/" component={MainPage} />

				<PrivateRoute path="/prompts" component={Prompts} />
				<PrivateRoute path="/story" component={Story} />

				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

function Prompts() {
	return (
		<Switch>
			<Route exact path="/prompts/new" component={PromptsNewPage} />
			<Route path="/prompts/:id/update" component={PromptEditPage} />
			<Route path="/prompts/:id" component={PromptsViewPage} />
			<Route exact path="/prompts" component={PromptsPage} />
		</Switch>
	)
}

function Story() {
	return (
		<Switch>
			<Route exact path="/story/:promptId/new" component={StoryNewPage} />
			<Route path="/story/:id/update" component={StoryEditPage} />
			<Route path="/story/:id" component={StoryPage} />
			<Route exact path="/story" component={StoriesPage} />
		</Switch>
	)
}

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({
	path,
	exact,
	render,
	component: RenderedComponent,
}: any) {
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
