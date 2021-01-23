import { useState } from 'react'
import { useInterval } from '../use-interval'

const DEFAULT_OPTIONS = {
	delayBetweenCharacters: 120,
	delayBetweenWords: 1200,
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'words' implicitly has an 'any' type.
export function useTyper(words, enabled = true, options) {
	const [charIndex, setCharIndex] = useState(0)
	const [wordIndex, setWordIndex] = useState(0)
	const [mode, setMode] = useState('TYPING')

	const populatedOptions = { ...DEFAULT_OPTIONS, ...options }

	// measure how many characters' worth of waiting you need to wait between words
	const delayInCharacters =
		populatedOptions.delayBetweenWords /
		populatedOptions.delayBetweenCharacters

	useInterval(
		() => {
			// disable the animation to save render cycles if it's not needed
			if (enabled && words && words.length) {
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
						(wordIndex +
							Math.ceil(Math.random() * (words.length - 1))) %
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

	if (words && words.length) {
		return words[wordIndex].substr(0, charIndex)
	}

	return ''
}
