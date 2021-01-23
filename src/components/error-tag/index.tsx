import React from 'react'
import { getError } from '../../utils/utils'
import { Alert } from 'antd'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import { isEmpty } from 'lodash'

export function ErrorTag({ error }: any) {
	return (
		!isEmpty(error) && (
			<Alert
				message={error?.message}
				description={
					getError(error) && (
						<ul>
							{getError(error)?.map((i) => (
								// @ts-expect-error ts-migrate(2322) FIXME: Type 'unknown' is not assignable to type 'string |... Remove this comment to see the full error message
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
