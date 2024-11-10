class InputField {
	constructor(labelText, value, name) {
		this.labelText = labelText
		this.value = value
		this.name = name
		this.container = this.createContainer()
	}

	createContainer() {
		const container = document.createElement('div')
		container.classList.add('input_container')


		const label = document.createElement('label')
		label.textContent = this.labelText
		label.style.fontSize = '1.2rem' // Налаштовуємо розмір тексту

		const input = document.createElement('input')
		input.classList.add('empty_input')
		input.name = this.name
		input.disabled = true
		input.value = this.value
		input.style.width = `${this.value.length + 2}ch` // Додаємо додатковий простір
		input.style.fontSize = '1rem' // Інший розмір тексту для input
		input.style.padding = '0.5rem' // Робимо поле введення більш читабельним

		container.style.display = 'flex'
		container.style.alignItems = 'center'
		container.style.gap = '1rem' // Проміжок між текстом та input

		container.appendChild(label)
		container.appendChild(input)

		this.inputElement = input
		return container
	}

	getInput() {
		return this.inputElement
	}

	setValue(newValue) {
		this.inputElement.value = newValue
	}

	toggleDisabled(disabled) {
		this.inputElement.disabled = disabled
	}
}

export default InputField
