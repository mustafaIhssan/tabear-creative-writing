import { useState } from 'react'

import { useInterval } from '../use-interval'

const DEFAULT_OPTIONS = {
	delayBetweenCharacters: 120,
	delayBetweenWords: 1200,
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export function useTyper(
	words: string | any[],
	enabled = true,
	options = {}
): any {
	const [charIndex, setCharIndex] = useState(0)
	const [wordIndex, setWordIndex] = useState(0)
	const [mode, setMode] = useState('TYPING')

	const populatedOptions = { ...DEFAULT_OPTIONS, ...options }

	// measure how many characters' worth of waiting you need to wait between words
	const delayInCharacters =
		populatedOptions.delayBetweenWords / populatedOptions.delayBetweenCharacters

	useInterval(
		() => {
			// disable the animation to save render cycles if it's not needed
			if (enabled && words && words.length > 0) {
				// wait extra characters between words to emulate a pause between words without extra logic
				// `charIndex > word.length` is not a problem for substr :)
				if (
					(charIndex - delayInCharacters < words[wordIndex].length &&
						mode === 'TYPING') ||
					(charIndex > 0 && mode === 'DELETING')
				) {
					const increment = mode === 'TYPING' ? 1 : -1
					setCharIndex(charIndex + increment)
				} else if (mode === 'TYPING') {
					// start deleting
					setMode('DELETING')
				} else {
					// Pick any word except the current one
					setWordIndex(
						(wordIndex + Math.ceil(Math.random() * (words.length - 1))) %
							words.length
					)
					setMode('TYPING')
				}
			}
		},
		mode === 'TYPING'
			? populatedOptions.delayBetweenCharacters
			: populatedOptions.delayBetweenCharacters / 3
	)

	if (words && words.length > 0) {
		return words[wordIndex].slice(0, Math.max(0, charIndex))
	}

	return ''
}
