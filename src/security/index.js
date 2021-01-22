import { createContext, useEffect, useState, useContext } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { auth } from '../firebase'

const LOCAL_STORAGE_USR = 'userData'
const SECURITY_CONTEXT_DEFAULT = {
	login: () => undefined,
	logout: () => undefined,
	user: {},
	accessToken: null,
	isAuthenticated: false,
}
const SecurityContext = createContext(SECURITY_CONTEXT_DEFAULT)

export const useAuth = () => useContext(SecurityContext)

export const SecurityProvider = ({ children }) => {
	const [user, setUser] = useLocalStorageState(LOCAL_STORAGE_USR, {})
	const [loading, setLoading] = useState(false)
	const [isReady, setIsReady] = useState(false)

	async function singup({ email, password }) {
		setLoading(true)
		try {
			const newUser = await auth.createUserWithEmailAndPassword(
				email,
				password
			)

			return { isSuccess: true, data: newUser }
		} catch (e) {
			console.log(e)
			setLoading(false)
			return { isSuccess: false, data: e }
		}
	}

	async function login({ email, password }) {
		try {
			const newUser = await auth.signInWithEmailAndPassword(
				email,
				password
			)

			return { isSuccess: true, data: newUser }
		} catch (e) {
			console.log(e)
			return { isSuccess: false, data: e }
		}
	}

	function logout() {
		return auth.signOut()
	}

	useEffect(() => {
		setLoading(true)
		// eslint-disable-next-line @wordpress/no-unused-vars-before-return
		const unsubscribe = auth.onAuthStateChanged((newUser) => {
			setUser(newUser)
			setIsReady(true)
		})

		// setIsAuthenticated(true)
		setLoading(false)

		return unsubscribe
	}, [])

	// if (!isReady) {
	// 	return null
	// }

	return (
		<SecurityContext.Provider
			value={{
				user,
				isAuthenticated: !!user,
				singup,
				loading,
				login,
				logout,
			}}
		>
			{children}
		</SecurityContext.Provider>
	)
}
