import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
	return (
    <div className='grid-container'>
    <BrowserRouter>
			<header>
				<Link to='/'>Fashion Trend</Link>
				<Link to='/admin'>Admin</Link>
			</header>
			<main>
			Product list
			</main>
      <footer>All right is reserved.</footer>
      </BrowserRouter>
		</div>
	);
}

export default App;
