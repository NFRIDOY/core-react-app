import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
	let handleIncriment = () => {
		let newCount = count + 1;
		setCount(newCount);
	};
	return (
		<>
			<h1>Counter: {count}</h1>
			<button onMouseMove={() => setCount(count - 1)} type="button" className="btn btn-danger me-1">Decriment - </button>
			<button onMouseMove={handleIncriment} type="button" className='btn btn-warning ms-1' >Incriment + </button>
		</>
	);
}
