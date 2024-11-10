import Service from '../services/Service.js'

class AddParkCard {
	constructor(refresh) {
		this.createMode = false
		this.addParkColumn = this.createAddParkColumn()
		this.refresh = refresh
	}

	createAddParkColumn() {
		const column = document.createElement('div')
		column.classList.add('main__column')
		column.appendChild(this.renderAddParkComponent())
		return column
	}

	renderAddParkComponent() {
		const addParkArticle = document.createElement('article')
		addParkArticle.classList.add('main__park', 'park', 'park__add')

		if (!this.createMode) {
			const addParkButton = document.createElement('div')
			addParkButton.classList.add('park__add-btn')
			addParkButton.textContent = '+'

			addParkButton.addEventListener('click', () => {
				this.createMode = true
				addParkArticle.innerHTML = '' // Clear existing content
				addParkArticle.appendChild(this.createForm())
			})

			addParkArticle.appendChild(addParkButton)
		} else {
			addParkArticle.appendChild(this.createForm())
		}

		return addParkArticle
	}

	createForm() {
		const form = document.createElement('form')
		form.classList.add('main__column')

		const imageUrlBlock = this.createInputBlock('Image URL:', 'text', 'imageUrl')
		const nameBlock = this.createInputBlock('Name:', 'text', 'name')
		const addressBlock = this.createInputBlock('Address:', 'text', 'address')
		const distanceBlock = this.createInputBlock('Cycling Distance:', 'number', 'cyclingDistance')
		const priceBlock = this.createInputBlock('Price:', 'number', 'price')

		const submitButton = document.createElement('button')
		submitButton.type = 'submit'
		submitButton.textContent = 'Add Park'

		form.addEventListener('submit', (event) => {
			event.preventDefault()
			this.handleSubmit({
				imgUrl: imageUrlBlock.input.value,
				name: nameBlock.input.value,
				address: addressBlock.input.value,
				cyclingDistance: parseFloat(distanceBlock.input.value),
				price: parseFloat(priceBlock.input.value),
			})
		})

		form.appendChild(imageUrlBlock.container)
		form.appendChild(nameBlock.container)
		form.appendChild(addressBlock.container)
		form.appendChild(distanceBlock.container)
		form.appendChild(priceBlock.container)
		form.appendChild(submitButton)

		return form
	}

	createInputBlock(labelText, inputType, name) {
		const container = document.createElement('div')
		const label = document.createElement('label')
		label.textContent = labelText
		const input = document.createElement('input')
		input.type = inputType
		input.name = name
		input.classList.add('empty_input')

		container.appendChild(label)
		container.appendChild(input)

		return { container, input }
	}

	handleSubmit(newParkData) {
		console.log('New Park Created:', newParkData)

		for (let [key, value] of Object.entries(newParkData)) {
			if (typeof value === 'string' && value.trim() === '') {
				alert(`Error: ${key} cannot be empty.`)
				return
			}
			if (typeof value === 'number' && (isNaN(value) || value <= 0)) {
				alert(`Error: ${key} must be a positive number.`)
				return
			}
		}

		this.createMode = false
		this.addParkColumn.innerHTML = '' // Clear the column
		this.addParkColumn.appendChild(this.renderAddParkComponent())

		Service.createPark(newParkData, ((_, error) => {
			if (error) {
				console.log(error)
			}
			this.refresh()
		}))
	}

	render() {
		return this.addParkColumn
	}
}

export default AddParkCard
