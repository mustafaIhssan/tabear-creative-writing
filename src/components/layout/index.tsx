import { Header } from './header'

export function Layout({ children }: any) {
	return (
		<div className="flex h-screen flex-col">
			<div className="flex-shrink-0">
				<Header />
			</div>
			<div className="flex-grow flex justify-center">{children}</div>
		</div>
	)
}
