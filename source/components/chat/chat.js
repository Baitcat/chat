export default class Chat {
	constructor({
		el,
		data = { messages: [] },
	}) {
		this.el = el;
		this.data = data;
	}

	render() {
		this.el.innerHTML = this.template(this.data);
	}

    addMessage(message) {
        this.data.messages.push(message);
        
        const messageHTML = this.messageTemplate(message);
        const chatBox = this.el.querySelector('.chat__box');
        chatBox.innerHTML += messageHTML;
    }

	template(data) {
		return `
        <div class="chat">
            <div class="chat__container">
                <div class="header">
                    <h2>You are logged in as ${data.user.name}</h2>
                </div>
                <div class="chat__box">
                    ${this.messagesTemplate(data)}
                </div>
            </div>
        </div>
        `;
	}

	messagesTemplate(data) {
		return data.messages.map((message) => {
            return this.messageTemplate(message);
        }).join('');
    }
    
    messageTemplate(message) {
		return `
            <div class="message-box left-img">
                <div class="picture">
                    <img src="https://unsplash.it/200/200/?random=">
                    <span class="time">21:30</>
                </div>
                <div class="message">
                    <span>${message.name}</span>
                    <p>${message.text}</p>
                </div>
            </div>
        `;
	}
}