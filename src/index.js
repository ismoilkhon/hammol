import './index.css'
import App from './App'
import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { Products } from './pages/products'
import { ProductDetail } from './pages/produc-detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Products />} />
						<Route path=':id' element={<ProductDetail />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
)
