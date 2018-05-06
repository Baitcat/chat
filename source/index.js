import App from './components/app/app.js'

const element = document.getElementById('application');

const application = new App({
    el: element,
    user:{
        name: 'Maksim'
    },
    data:{

    }
});

application.render();