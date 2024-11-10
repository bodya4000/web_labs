import Service from '../services/Service.js'
import InputField from './InputField.js'

class ParkCardComponent {
	constructor(park, refreshParks) {
		this.park = park
		this.editMode = false
		this.form = this.createForm()
		this.refreshParks = refreshParks
	}

	createForm() {
		const form = document.createElement('form')
		form.classList.add('main__column')

		const article = document.createElement('article')
		article.classList.add('main__park', 'park')

		const parkImageDiv = this.createParkImageDiv()
		const parkContentDiv = this.createParkContentDiv()
		const buttonsContainer = this.createButtonsContainer()

		article.appendChild(parkImageDiv)
		article.appendChild(parkContentDiv)
		article.appendChild(buttonsContainer)
		form.appendChild(article)

		return form
	}

	createParkImageDiv() {
		const div = document.createElement('div')
		div.classList.add('park__image')

		const img = document.createElement('img')

		img.src = this.park.imgUrl
		img.alt = this.park.name

		div.appendChild(img)
		return div
	}

	createParkContentDiv() {
		const div = document.createElement('div')
		div.classList.add('park__content')

		const parkNameField = new InputField('Name:', this.park.name, 'name')
		const parkAddressField = new InputField('Address:', this.park.address, 'address')
		const parkCyclingDistanceField = new InputField('Cycling distance:', this.park.cyclingDistance, 'cyclingDistance')
		const parkPriceField = new InputField('Price:', this.park.price, 'price')

		div.appendChild(parkNameField.container)
		div.appendChild(parkAddressField.container)
		div.appendChild(parkCyclingDistanceField.container)
		div.appendChild(parkPriceField.container)

		this.inputs = [parkNameField, parkAddressField, parkCyclingDistanceField, parkPriceField]
		return div
	}

	createButtonsContainer() {
		const container = document.createElement('div')
		container.classList.add('buttons-container')

		const parkEdit = document.createElement('button')
		parkEdit.type = 'button'
		parkEdit.classList.add('park__btn')
		parkEdit.textContent = 'Edit'
		parkEdit.addEventListener('click', (event) => this.toggleEdit(event))

		const parkCancel = document.createElement('button')
		parkCancel.type = 'button'
		parkCancel.classList.add('park__btn', 'park__cancel')
		parkCancel.textContent = 'Cancel'
		parkCancel.addEventListener('click', (event) => this.cancelEdit(event))

		const parkDelete = document.createElement('button')
		parkDelete.type = 'button'
		parkDelete.classList.add('park__btn', "park__delete")
		parkDelete.textContent = 'delete'
		parkDelete.addEventListener('click', (event) => this.deletePark(event))

		this.editButton = parkEdit
		this.cancelButton = parkCancel
		this.parkDelete = parkDelete

		container.appendChild(parkEdit)
		container.appendChild(parkCancel)
		container.appendChild(parkDelete)


		return container
	}

	toggleEdit(event) {
		event.preventDefault()
		if (this.editMode) {
			this.updateParkData()
		}
		this.editMode = !this.editMode
		this.updateButtonStates()
		this.toggleInputs()
	}

	updateParkData() {
		const updatedData = {}

		const initialData = {
			name: this.park.name,
			address: this.park.address,
			cyclingDistance: this.park.cyclingDistance,
			price: this.park.price,
		}

		if (this.inputs[0].getInput().value !== initialData.name) {
			updatedData.name = this.inputs[0].getInput().value
		}
		if (this.inputs[1].getInput().value !== initialData.address) {
			updatedData.address = this.inputs[1].getInput().value
		}
		const newCyclingDistance = parseFloat(this.inputs[2].getInput().value)
		if (!isNaN(newCyclingDistance) && newCyclingDistance !== initialData.cyclingDistance) {
			updatedData.cyclingDistance = newCyclingDistance
		}
		const newPrice = parseFloat(this.inputs[3].getInput().value)
		if (!isNaN(newPrice) && newPrice !== initialData.price) {
			updatedData.price = newPrice
		}



		if (Object.keys(updatedData).length === 0) {
			alert('No fields were changed.')
			return
		}

		for (let [key, value] of Object.entries(updatedData)) {
			if (typeof value === 'string' && value.trim() === '') {
				alert(`Error: ${key} cannot be empty.`)
				return
			}
			if (typeof value === 'number' && (isNaN(value) || value <= 0)) {
				alert(`Error: ${key} must be a positive number.`)
				return
			}
		}

		Service.updatePark(this.park.id, updatedData, ((data, error) => {
			if (error) {
				console.log(error)
			}
			this.refreshParks()
		}))
	}


	cancelEdit(event) {
		event.preventDefault()
		this.inputs.forEach((input, index) => {
			input.setValue(Object.values(this.park)[index + 1])
		})

		this.editMode = false
		this.updateButtonStates()
		this.toggleInputs()
	}

	deletePark(event) {
		event.preventDefault()
		Service.deleteParkById(this.park.id, ((data, error) => {
			if (error) {
				console.log(error)
			}
			this.refreshParks()
		}))
	}

	updateButtonStates() {
		if (!this.editMode) {
			this.editButton.textContent = 'Edit'
			this.cancelButton.style.display = 'none'
		} else {
			this.editButton.textContent = 'Update'
			this.cancelButton.style.display = 'inline'
		}
	}

	toggleInputs() {
		this.inputs.forEach(input => {
			input.toggleDisabled(!this.editMode)
		})
	}

	render() {
		return this.form
	}
}

export default ParkCardComponent
