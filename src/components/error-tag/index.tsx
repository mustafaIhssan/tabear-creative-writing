import { Alert } from 'antd'
import { isEmpty } from 'lodash'

import { getError } from '../../utils/utils'

export function ErrorTag({ error }: any) {
	return !isEmpty(error) ? (
		<Alert
			message={error?.message}
			description={
				getError(error) && (
					<ul>
						{getError(error)?.map((i: any) => (
							<li key={i}>{i}</li>
						))}
					</ul>
				)
			}
			type="error"
			showIcon
		/>
	) : (
		<div />
	)
}
