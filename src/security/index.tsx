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

// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
export const SecurityProvider = ({ children }) => {
	const [user, setUser] = useLocalStorageState(LOCAL_STORAGE_USR, {})
	const [loading, setLoading] = useState(false)
	const [isReady, setIsReady] = useState(false)

	// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'email' implicitly has an 'any' ty... Remove this comment to see the full error message
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

	// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'email' implicitly has an 'any' ty... Remove this comment to see the full error message
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
			// @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'User | null' is not assignable t... Remove this comment to see the full error message
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
				// @ts-expect-error ts-migrate(2322) FIXME: Type '({ email, password }: { email: any; password... Remove this comment to see the full error message
				login,
				// @ts-expect-error ts-migrate(2322) FIXME: Type '() => Promise<void>' is not assignable to ty... Remove this comment to see the full error message
				logout,
			}}
		>
			{children}
		</SecurityContext.Provider>
	)
}
