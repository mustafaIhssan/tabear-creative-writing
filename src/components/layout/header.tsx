import React from 'react'
import { Logo } from '../logo'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button, Space } from 'antd'
import { useAuth } from '../../security'
import { useTyper } from '../../hooks/use-typer'

export function Header() {
	const { t } = useTranslation()
	const { isAuthenticated, logout } = useAuth()

	const siteSubtitle = [
		t('The local bakery'),
		t('The new fashion'),
		t('Delicious sweets'),
	]

	// @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
	const subTitle = useTyper(siteSubtitle, true)

	return (
		<div className="sticky top-0 z-10 flex w-full items-center justify-between px-6 h-16 bg-white border-b border-gray-200">
			<Space className="flex items-center">
				{/* @ts-expect-error ts-migrate(2786) FIXME: 'Logo' cannot be used as a JSX component. */}
				<Logo />
				<span className="text-gray-400">{subTitle}</span>
			</Space>
			<div className="flex items-center">
				<div className="hidden md:block md:flex md:justify-between md:bg-transparent space-x-2">
					{isAuthenticated ? (
						<>
							<Button onClick={logout} type="primary">
								{t('system.logout')}
							</Button>
							<Link key="add-product" to="/prompts/new">
								<Button type="primary">
									{t('prompt.add')}
								</Button>
							</Link>
						</>
					) : (
						<>
							<Link key="sing-up" to="/singup">
								<Button type="primary">
									{t('system.signup')}
								</Button>
							</Link>
							<Link key="sign-in" to="/login">
								<Button>{t('system.signin')}</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
