let parks = [
	{
		id: 1,
		name: 'New York Central Park',
		address: 'New York, NY 10024',
		cyclingDistance: 5,
		price: 15,
		image:
			'https://image.newyorkcity.ca/wp-content/uploads/2013/02/Central-Park.jpg',
	},
	{
		id: 2,
		name: 'Golden Gate Park',
		address: 'San Francisco, CA 94122',
		cyclingDistance: 6,
		price: 4,
		image:
			'https://images.ctfassets.net/cex3swddvjuk/4kHOesQ4sub6T72IKBdAYx/13ac4f32cc72d13c15f85fa09c19267b/Golden_Gate_Park_Wheel_Render.jpg',
	},
	{
		id: 3,
		name: 'Grant Park',
		address: 'Chicago, IL 60605',
		cyclingDistance: 4,
		price: 1000,
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OqdtE8J0hpkztjHfgtqIkocPv56QbjT1-A&s',
	},
]

let parksState = [...parks]

let sortMode = 'name'
let editMode = false
let createMode = false

const mainParksContainer = document.querySelector('.main__parks')
const searchInput = document.getElementById('search-input')

function ParkCardComponent(park) {
	const form = document.createElement('form')
	form.classList.add('main__column')

	const article = document.createElement('article')
	article.classList.add('main__park', 'park')

	const parkImageDiv = document.createElement('div')
	parkImageDiv.classList.add('park__image')

	const parkImage = document.createElement('img')
	parkImage.src = park.image
	parkImage.alt = park.name

	const parkContentDiv = document.createElement('div')
	parkContentDiv.classList.add('park__content')

	const parkName = document.createElement('div')
	parkName.classList.add('park__name')
	const parkNameContent = document.createElement('label')
	parkNameContent.textContent = 'Name:'
	const parkNameValue = document.createElement('input')
	parkNameValue.classList.add('empty_input')
	parkNameValue.name = 'name'
	parkNameValue.disabled = true
	parkNameValue.value = park.name
	parkNameValue.style.width = `${park.name.length + 1}ch`

	parkName.appendChild(parkNameContent)
	parkName.appendChild(parkNameValue)

	const parkAddress = document.createElement('div')
	parkAddress.classList.add('park__address')
	const parkAddressContent = document.createElement('label')
	parkAddressContent.textContent = 'Address:'
	const parkAddressValue = document.createElement('input')
	parkAddressValue.classList.add('empty_input')
	parkAddressValue.name = 'address'
	parkAddressValue.disabled = true
	parkAddressValue.value = park.address
	parkAddressValue.style.width = `${park.address.length + 1}ch`

	parkAddress.appendChild(parkAddressContent)
	parkAddress.appendChild(parkAddressValue)

	const parkCyclingDistance = document.createElement('div')
	parkCyclingDistance.classList.add('park__cycling_road_distance')
	const parkCyclingContent = document.createElement('label')
	parkCyclingContent.textContent = 'Cycling distance:'
	const parkCyclingValue = document.createElement('input')
	parkCyclingValue.classList.add('empty_input')
	parkCyclingValue.name = 'cyclingDistance'
	parkCyclingValue.disabled = true
	parkCyclingValue.value = park.cyclingDistance

	parkCyclingDistance.appendChild(parkCyclingContent)
	parkCyclingDistance.appendChild(parkCyclingValue)

	const parkPrice = document.createElement('div')
	parkPrice.classList.add('park__price')
	const parkPriceContent = document.createElement('label')
	parkPriceContent.textContent = 'Price:'
	const parkPriceValue = document.createElement('input')
	parkPriceValue.classList.add('empty_input')
	parkPriceValue.name = 'price'
	parkPriceValue.disabled = true
	parkPriceValue.value = park.price

	parkPrice.appendChild(parkPriceContent)
	parkPrice.appendChild(parkPriceValue)

	const buttonsContainer = document.createElement('div')
	buttonsContainer.classList.add('buttons-container')

	const parkEdit = document.createElement('button')
	parkEdit.type = 'button'
	parkEdit.classList.add('park__btn')
	let editMode = false

	const parkCancel = document.createElement('button')
	parkCancel.type = 'button'
	parkCancel.classList.add('park__btn', 'park__cancel')
	parkCancel.textContent = 'Cancel'
	parkCancel.style.display = 'none'

	const initialData = {
		name: park.name,
		address: park.address,
		cyclingDistance: park.cyclingDistance,
		price: park.price,
	}

	updateEditMode()

	parkEdit.addEventListener('click', event => {
		event.preventDefault()
		if (editMode) {
			const updatedData = {
				id: park.id,
				name: parkNameValue.value,
				address: parkAddressValue.value,
				cyclingDistance: parseFloat(parkCyclingValue.value),
				price: parseFloat(parkPriceValue.value),
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
			clearFilterInputs()
			parks = parks.map(p => p.id === park.id ? { ...p, ...updatedData } : p)
			parksState = [...parks]

			console.log(`Park data updated for park ID ${park.id}:`, updatedData)
			drawCards(parksState)
		}
		editMode = !editMode
		updateEditMode()
		toggleInputs()
	})



	parkCancel.addEventListener('click', event => {
		event.preventDefault()
		parkNameValue.value = initialData.name
		parkAddressValue.value = initialData.address
		parkCyclingValue.value = initialData.cyclingDistance
		parkPriceValue.value = initialData.price

		editMode = false
		updateEditMode()
		toggleInputs()
	})

	function updateEditMode() {
		if (!editMode) {
			parkEdit.className = 'park__btn park__edit'
			parkEdit.textContent = 'Edit'
			parkCancel.style.display = 'none'
		} else {
			parkEdit.className = 'park__btn park__update'
			parkEdit.textContent = 'Update'
			parkCancel.style.display = 'inline'
		}
	}

	function toggleInputs() {
		parkNameValue.disabled = !editMode
		parkAddressValue.disabled = !editMode
		parkCyclingValue.disabled = !editMode
		parkPriceValue.disabled = !editMode
	}

	parkImageDiv.appendChild(parkImage)
	parkContentDiv.appendChild(parkName)
	parkContentDiv.appendChild(parkAddress)
	parkContentDiv.appendChild(parkCyclingDistance)
	parkContentDiv.appendChild(parkPrice)

	buttonsContainer.appendChild(parkEdit)
	buttonsContainer.appendChild(parkCancel)

	article.appendChild(parkImageDiv)
	article.appendChild(parkContentDiv)
	article.appendChild(buttonsContainer)

	form.appendChild(article)

	return form
}

function AddParkCardComponent() {
	let createMode = false

	const addParkColumn = document.createElement('div')
	addParkColumn.classList.add('main__column')

	const addParkArticle = document.createElement('article')
	addParkArticle.classList.add('main__park', 'park', 'park__add')

	function renderAddParkComponent() {
		addParkArticle.innerHTML = ''

		if (!createMode) {
			const addParkButton = document.createElement('div')
			addParkButton.classList.add('park__add-btn')
			addParkButton.textContent = '+'

			addParkButton.addEventListener('click', () => {
				createMode = true
				renderAddParkComponent()
			})

			addParkArticle.appendChild(addParkButton)
		} else {
			const form = document.createElement('form')
			form.classList.add('main__column')

			const imageUrlBlock = document.createElement('div')
			const imageUrlLabel = document.createElement('label')
			imageUrlLabel.textContent = 'Image URL:'
			const imageUrlInput = document.createElement('input')
			imageUrlInput.type = 'text'
			imageUrlInput.name = 'imageUrl'
			imageUrlBlock.appendChild(imageUrlLabel)
			imageUrlBlock.appendChild(imageUrlInput)

			const nameBlock = document.createElement('div')
			const nameLabel = document.createElement('label')
			nameLabel.textContent = 'Name:'
			const nameInput = document.createElement('input')
			nameInput.type = 'text'
			nameInput.name = 'name'
			nameBlock.appendChild(nameLabel)
			nameBlock.appendChild(nameInput)

			const addressBlock = document.createElement('div')
			const addressLabel = document.createElement('label')
			addressLabel.textContent = 'Address:'
			const addressInput = document.createElement('input')
			addressInput.type = 'text'
			addressInput.name = 'address'
			addressBlock.appendChild(addressLabel)
			addressBlock.appendChild(addressInput)

			const distanceBlock = document.createElement('div')
			const distanceLabel = document.createElement('label')
			distanceLabel.textContent = 'Cycling Distance:'
			const distanceInput = document.createElement('input')
			distanceInput.type = 'number'
			distanceInput.name = 'cyclingDistance'
			distanceBlock.appendChild(distanceLabel)
			distanceBlock.appendChild(distanceInput)

			const priceBlock = document.createElement('div')
			const priceLabel = document.createElement('label')
			priceLabel.textContent = 'Price:'
			const priceInput = document.createElement('input')
			priceInput.type = 'number'
			priceInput.name = 'price'
			priceBlock.appendChild(priceLabel)
			priceBlock.appendChild(priceInput)

			const submitButton = document.createElement('button')
			submitButton.type = 'submit'
			submitButton.textContent = 'Add Park'

			form.addEventListener('submit', event => {
				event.preventDefault()
				clearFilterInputs()
				const newParkData = {
					imageUrl: imageUrlInput.value,
					name: nameInput.value,
					address: addressInput.value,
					cyclingDistance: parseFloat(distanceInput.value),
					price: parseFloat(priceInput.value),
				}

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

				console.log('New Park Created:', newParkData)
				parks = [...parks, newParkData]
				parksState = [...parks]
				createMode = false
				renderAddParkComponent()
				drawCards(parksState)
			})

			form.appendChild(imageUrlBlock)
			form.appendChild(nameBlock)
			form.appendChild(addressBlock)
			form.appendChild(distanceBlock)
			form.appendChild(priceBlock)
			form.appendChild(submitButton)

			addParkArticle.appendChild(form)
		}
	}

	renderAddParkComponent()

	addParkColumn.appendChild(addParkArticle)
	return addParkColumn
}

function drawCards(cards, sortMode = 'name') {
	switch (sortMode) {
		case 'name':
			sortByName(cards)
			break
		case 'price':
			sortByPrice(cards)
			break
		default:
			sortByName(cards)
			break
	}

	mainParksContainer.innerHTML = ''
	cards.forEach(card => {
		const cardElement = ParkCardComponent(card)
		mainParksContainer.appendChild(cardElement)
	})

	mainParksContainer.appendChild(AddParkCardComponent())
}

function sortByName(parks) {
	return parks.sort((o1, o2) => o1.name.localeCompare(o2.name))
}

function sortByPrice(parks) {
	return parks.sort((o1, o2) => o2.price - o1.price)
}

function sort() {
	sortMode = sortMode === 'name' ? 'price' : 'name'
	drawCards(parksState, sortMode)
}

function total() {
	const totalValue = parksState.reduce(
		(accumulator, park) => accumulator + park.price,
		0
	)
	alert(totalValue)
}

function filterParks() {
	const searchValue = searchInput.value.toLowerCase().trim()
	parksState = parks.filter(
		park =>
			park.name.toLowerCase().includes(searchValue) ||
			park.address.toLowerCase().includes(searchValue)
	)
	drawCards(parksState, sortMode)
}

searchInput.addEventListener('input', filterParks)

function clearFilterInputs() {
	searchInput.value = ''
}


drawCards(parks, sortMode)
