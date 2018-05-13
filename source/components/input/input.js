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

    template(data) {
        return `
            <form>
                <textarea name="message" placeholder="Введите текст"></textarea>
                <input type="submit" value="Отправить">
            </form>
        `
    }

	render() {
		this.el.innerHTML = this.template(this.data);
	}
}