export default class Field {
	constructor({
		el,
		props,
	}) {
        this.el = el;
        this.props = props;
        this.init();
	}

    init() {
        this.el.addEventListener(
            'submit', 
            this.onSubmit.bind(this)
        );
    }

    onSubmit(evt) {
        evt.preventDefault();
        const form = evt.target;
        const message = form.elements['message'].value;
        form.reset();

        this.props.onSubmit(message);
    }

	render() {
		this.el.innerHTML = `
		   <form>
			   <textarea name="message" placeholder="Введите сообщение..."></textarea>
			   <input type="submit" value="Отправить">
			</form>
        `;
	}
}