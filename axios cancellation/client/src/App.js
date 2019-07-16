import React from 'react';
import * as axiosMethods from './axios';

function App() {
	const send = () => {
		for (let i = 0; i < 5; i += 1) {
			// console.log('i:', i);
			axiosMethods.send(i);
		}
	};

	return (
		<div>
			<button onClick={send}>Отправить запрос</button>
			<button onClick={axiosMethods.cancel}>Отменить запрос</button>
		</div>
	);
}

export default App;
