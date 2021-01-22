import React from 'react'
import { getError } from '../../utils/utils'
import { Alert } from 'antd'
import { isEmpty } from 'lodash'

export function ErrorTag({ error }) {
	return (
		!isEmpty(error) && (
			<Alert
				message={error?.message}
				description={
					getError(error) && (
						<ul>
							{getError(error)?.map((i) => (
								<li key={i}>{i}</li>
							))}
						</ul>
					)
				}
				type="error"
				showIcon
			/>
		)
	)
}
