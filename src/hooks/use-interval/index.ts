import { useEffect, useRef } from 'react'

export function useInterval(callback: any, delay: any) {
	const savedCallback = useRef(callback)

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		if (delay === null || delay === false) {
			return
		}
		const tick = () => void savedCallback.current()
		const id = setInterval(tick, delay)
		return () => clearInterval(id)
	}, [delay])
}
