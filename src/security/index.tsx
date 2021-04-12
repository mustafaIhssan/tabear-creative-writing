import { createContext, useContext, useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

import { auth } from '../firebase'

const LOCAL_STORAGE_USR = 'userData'
const SECURITY_CONTEXT_DEFAULT = {
	login: () => 0,
	logout: () => 0,
	user: {},
	accessToken: undefined,
	isAuthenticated: false,
}
const SecurityContext = createContext(SECURITY_CONTEXT_DEFAULT)

export const useAuth = () => useContext(SecurityContext)

export const SecurityProvider = ({ children }: any) => {
	const [user, setUser] = useLocalStorageState(LOCAL_STORAGE_USR, {})
	const [loading, setLoading] = useState(false)

	async function singup({ email, password }: any) {
		setLoading(true)
		try {
			const newUser = await auth.createUserWithEmailAndPassword(email, password)

			return { isSuccess: true, data: newUser }
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error)
			setLoading(false)
			return { isSuccess: false, data: error }
		}
	}

	async function login({ email, password }: any) {
		try {
			const newUser = await auth.signInWithEmailAndPassword(email, password)

			return { isSuccess: true, data: newUser }
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error)
			return { isSuccess: false, data: error }
		}
	}

	// eslint-disable-next-line unicorn/consistent-function-scoping
	function logout() {
		return auth.signOut()
	}

	useEffect(() => {
		setLoading(true)
		const unsubscribe = auth.onAuthStateChanged((newUser) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			setUser(newUser)
		})

		setLoading(false)
		return unsubscribe
	}, [])

	return (
		<SecurityContext.Provider
			value={{
				user,
				isAuthenticated: !!user,
				singup,
				loading,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				login,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				logout,
			}}
		>
			{children}
		</SecurityContext.Provider>
	)
}
