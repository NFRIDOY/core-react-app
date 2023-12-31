import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ReactDefault from "./components/ReactDefault";
// import CardDark from "./components/CardDark";
// import Card from "./components/card";
import MathInHtml from "./components/MathInHtml";
import Card1 from "./components/Cardx";
import Card2 from "./components/Cardx";
import Products from "./components/Products";
import Persons from "./components/Persons";
import Counter from "./components/Counter";
import Users from "./components/Users";
import Cars from "./components/Cars";

function App() {
	const players = [
		{ name: 'Ridoy' , roles: 'Best Bowler And Finisher'    },
		{ name: 'Rakib' , roles: 'Best Bowler And Hard Hitter' },
		{ name: 'Afjal' , roles: 'Best Batsman'                },
		{ name: 'Emon'  , roles: 'Best Batsman'                },
		{ name: 'Minhaj', roles: 'Best Alrounder'              },
		{ name: 'Imran' , roles: 'Best Alrounder'              },
		{ name: 'Evan'  , roles: 'Best Batsman'                }
	];
	const productList = [
		{ name: 'Aam', price: '$6.99' },
		{ name: 'Jam', price: '$6.99' },
		{ name: 'Kathal', price: '$6.99' },
		{ name: 'Lichu', price: '$6.99' },
		{ name: 'Dragon', price: '$6.99' },
		{ name: 'Banana', price: '$6.99' },
		{ name: 'Anarosh', price: '$1.99' }
	];
	const carList = [
		{ name: 'BMW', price: '$6000.99' },
		{ name: 'Porche', price: '$6000.99' },
		{ name: 'Lamborgini', price: '$6000.99' },
		{ name: 'Farrari', price: '$6000.99' },
		{ name: 'a', price: '$6000.99' },
		{ name: 'b', price: '$6000.99' },
		{ name: 'c', price: '$6000.99' }
	];
	const playerName = players.map(player => player.name);
	console.log(playerName);
	// let person = [];
	// fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(data => showPerson(data))
	// console.log(data); 
	// function showPerson(data) {
	// 	// console.log(data);
	// 	// data.map(dt => dt.name)
	// 	let person = data;
	// 	// console.log(person);
	// 	person.map(pr => console.log(pr.name));
	// 	return person;
	// }
	// let person = showPerson();
	// console.log(person);
	return (
		<>
			<Navbar />
			<div className="App">
				<header className="App-header">
					<main>
						{
							carList.map((car) => {
								<Cars carObj={car} />
								// console.log(car);
							})
						}
						<Users/>
						<Counter/>
						{/* <MathInHtml/> */}
						{/* <CardDark  /> */}
						<div>
							{/* <Products product={productList[0]} />
							<Products product={productList[1]} /> */}
							{/* <ul>
								{
									// productList.map(product => <li>{product.name}</li>)
									players.map(ply => <div>{ply.name}</div>)
								}
							</ul> */}

							{
								productList.map(pd =>
									
										<Products product={pd} />

										
									
									)
							}
							{/* {
								person.map(ps =>
									<Persons person={ps} />
								)
							} */}

						</div>
						<div className="">
							<Card1 title="Shakib" text="Best Cricketer" />
							<Card1 title={players[0].name} text={players[0].roles} />
							<Card1 title={players[1].name} text={players[1].roles} />
							<Card1 title={players[2].name} text={players[2].roles} />
							<Card1 title={players[3].name} text={players[3].roles} />
							<Card1 title={players[4].name} text={players[4].roles} />
							<Card1 title={players[5].name} text={players[5].roles} />
							<Card2 />
						</div>
					</main>
				</header>
			</div>
		</>
	);
}
// function Counter() {
// 	const [count, setCount] = useState(0);
// 	let handleIncriment = () => {
// 		let newCount = count + 1;
// 		setCount(newCount);
// 	};
// 	return (
// 		<>
// 			<h1>Counter: {count}</h1>
// 			<button onMouseMove={() => setCount(count - 1)} type="button" className="btn btn-danger me-1">Decriment - </button>
// 			<button onMouseMove={handleIncriment} type="button" className='btn btn-warning ms-1' >Incriment + </button>
// 		</>
// 	);
// }

export default App;
