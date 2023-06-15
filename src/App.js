import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ReactDefault from "./components/ReactDefault";
import CardDark from "./components/CardDark";

function App() {
	return (
		<>
			<Navbar />
			{/* <div className="ReactDefaultS">
				<ReactDefault />
				<ReactDefault />
			</div> */}
			<div>
				<h1>Do Some Practice</h1>
				<p>Let's Sum some Numbers, 2 + 3 = {2 + 3}</p>
			</div>
			<CardDark  />
		</>
	);
}

export default App;


