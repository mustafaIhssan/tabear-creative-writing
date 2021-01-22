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
import { ProductNewPage } from './pages/product-new'
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

				<PrivateRoute exact path="/" component={MainPage} />
				{/*<PrivateRoute path="/products/new" component={ProductNewPage} />*/}
				<PrivateRoute path="/prompts/:id" component={PromptsViewPage} />
				<PrivateRoute path="/story/:id" component={StoryPage} />
				{/*<PrivateRoute*/}
				{/*	path="/products/:id/edit"*/}
				{/*	component={ProductEditPage}*/}
				{/*/>*/}
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
