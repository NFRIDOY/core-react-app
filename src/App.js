import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ReactDefault from "./components/ReactDefault";
// import CardDark from "./components/CardDark";
// import Card from "./components/card";
import Card1 from "./components/Cardx";


function App() {
	return (
		<>
			<Navbar />
			<div className="ReactDefaultS">
				<ReactDefault />
				<ReactDefault />
			</div>
			<div>
				<h1>Do Some Practice</h1>
				<p>Let's Sum some Numbers, 2 + 3 = {2 + 3}</p>
			</div>
			{/* <CardDark  /> */}
			<div className="d-flex">
				<Card1 />
				<Card1 />
			</div>
		</>
	);
}

export default App;


