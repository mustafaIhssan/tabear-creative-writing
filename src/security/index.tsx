import decode from 'jwt-decode'
import { attempt, isError } from 'lodash'
import { createContext, useContext, useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

import { handelRequests } from '../api/api-wrapper'
import { SERVER_URL } from '../config.json'

const LOCAL_STORAGE_KEY = 'accessToken'
const LOCAL_STORAGE_USR = 'userData'

const SECURITY_CONTEXT_DEFAULT = {
	login: () => 0,
	logout: () => 0,
	user: {},
	accessToken: '',
	isAuthenticated: false,
}
const SecurityContext = createContext(SECURITY_CONTEXT_DEFAULT)

export const useAuth = () => useContext(SecurityContext)

export const SecurityProvider = ({ children }: any) => {
	const [isReady, setIsReady] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [user, setUser] = useLocalStorageState(LOCAL_STORAGE_USR, {})
	const [accessToken, setAccessToken] = useLocalStorageState(
		LOCAL_STORAGE_KEY,
		''
	)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const token = attempt(() => decode(accessToken))
		let newIsAuthenticated = false

		if (!isError(token)) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const expiresAt = token.exp * 1000
			newIsAuthenticated = Date.now() < expiresAt
		}
		setIsAuthenticated(newIsAuthenticated)
		setIsReady(true)
	}, [accessToken])

	async function login(userInfo: Record<string, unknown>) {
		setIsLoading(true)
		try {
			const data = await handelRequests({
				method: 'POST',
				url: `${SERVER_URL}/auth/local`,
				data: userInfo,
			})

			setIsLoading(false)
			if (!data.jwt) {
				return { isSuccess: false, data }
			}

			setAccessToken(data.jwt)
			setUser(data.user)

			return { isSuccess: true, data }
		} catch (error) {
			setIsLoading(false)
			return { isSuccess: false, data: error }
		}
	}

	async function singup(userInfo: Record<string, unknown>) {
		userInfo.username = userInfo.email

		setIsLoading(true)
		try {
			const data = await handelRequests({
				method: 'POST',
				url: `${SERVER_URL}/auth/local/register`,
				data: userInfo,
			})

			setIsLoading(false)
			if (!data.jwt) {
				return { isSuccess: false, data }
			}

			setAccessToken(data.jwt)
			setUser(data.user)

			return { isSuccess: true, data }
		} catch (error) {
			setIsLoading(false)
			return { isSuccess: false, data: error }
		}
	}

	function logout() {
		setIsAuthenticated(false)
		setAccessToken('')
		setUser({})
		localStorage.removeItem('accessToken')
		localStorage.clear()
	}

	if (!isReady) {
		return null
	}

	return (
		<SecurityContext.Provider
			value={{
				user,
				isAuthenticated,
				accessToken,
				isLoading,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				login,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				logout,
				singup,
			}}
		>
			{children}
		</SecurityContext.Provider>
	)
}
