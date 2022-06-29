import './App.css'
import { Outlet } from 'react-router-dom'
import { Navigation } from './components/navigation'

export default function App() {
	return (
		<div className='app'>
			<Navigation/>
			<div className='body'>
				<Outlet />
			</div>
		</div>
	)
}
