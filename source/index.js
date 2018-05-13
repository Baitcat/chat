import App from './components/app/app.js'

const element = document.getElementsByClassName('app')[0];

const application = new App({
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
});

application.render();