import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search } from './views/Search'
import { Product } from './views/Product'

function App () {

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/items/' element={<Search />}/>
				<Route path='/items/:id' element={<Product />}/>	
			</Routes>
		</BrowserRouter>
	)
}

export default App
