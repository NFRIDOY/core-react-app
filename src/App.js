import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ReactDefault from "./components/ReactDefault";

function App() {
	return (
		<>
			<Navbar />
			<div className="ReactDefaultS">
				{/* <div> */}
				<ReactDefault />
				{/* </div> */}
				{/* <div> */}
				<ReactDefault />
				{/* </div> */}
			</div>
		</>
	);
}

export default App;
