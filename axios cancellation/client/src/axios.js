import axios from 'axios';

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

export const send = i => {
	console.log('in axios send:', i);
	axios({
		method: 'get',
		url: 'http://localhost:5000/',
		cancelToken: source.token,
	})
		.then(responce => {
			console.log('responce:', responce.data);
		})
		.catch(error => {
			if (axios.isCancel()) {
				console.log('Отмена запроса:', error.message);
			} else {
				console.log('Непредвиденная ошибка сервера:', error.message);
			}
		});
};

export const cancel = () => {
	console.log('in axios cancel');
	source.cancel('Operation canceled by the user.');
	source = CancelToken.source();
};
