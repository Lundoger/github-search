import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"
import Nav from "./components/Nav"

const App = () => {
	return (
		<>
			<Nav />
			<main className="page">
				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="/favorites" element={<FavoritesPage/>} />
				</Routes>
			</main>
		</>
	)
}

export default App