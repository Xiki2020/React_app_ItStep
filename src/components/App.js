import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from "./NavBar";
import AppRouter from "./AppRouter";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<AppRouter />
			</BrowserRouter>
		</div>
	);
};

export default App;
