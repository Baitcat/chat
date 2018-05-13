import App from './components/app/app.js'

const element = document.getElementsByClassName('app')[0];

const store = {
    el: element,
	data: {
		user: {
			name: 'Король ночи'
		},
		messages: [
			{
				name: 'Джон Сноу',
				text: 'Привет! Теперь я король севера'
			},
			{
				name: 'Король ночи',
				text: 'Прости, но это мой чат и тут все по-другому'
			},
			{
				name: 'Джон Сноу',
				text: '.....'
			}
		]
	}
}

fetch('https://js-code-chat.firebaseio.com/messages.json')
.then((response) => {
	return response.json(); 
})
.then((body) => {
	body = body || {};
	store.data.messages = Object.values(body);
	return store;
})
.then((data) => {
	const application = new App(data);
	application.render();
})