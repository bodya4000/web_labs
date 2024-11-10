import AddParkCardComponent from './components/AddCard.js'
import ParkCardComponent from './components/ParkСard.js'
import Service from './services/Service.js'

let parks = []
let parksState = [...parks]

let sortMode = 'name'
let filterText = ''
let editMode = false
let createMode = false

const mainParksContainer = document.querySelector('.main__parks')

function drawCards(cards) {
	const mainParksContainer = document.querySelector('.main__parks')
	mainParksContainer.innerHTML = ''
	cards.forEach(card => {
		const cardElement = new ParkCardComponent(card, refreshPparks).render()
		mainParksContainer.appendChild(cardElement)
	})
	mainParksContainer.appendChild(new AddParkCardComponent(refreshPparks).render())
}

function refreshParks() {
	Service.getParks(sortMode, filterText, (data, error) => {
		if (error) {
			return
		}
		parks = data
		parksState = [...parks]
		drawCards(parksState)
	})
}

function total() {
	const totalPrice = parksState.reduce((accum, park) => accum + park.price, 0)
	alert(`Total price: ${totalPrice}`)
}

function sortParks() {
	Service.getParks(sortMode, filterText, (data, error) => {
		if (error) {
			return
		}
		parks = data
		parksState = [...parks]
		drawCards(parksState)
	})
}

function toggleSortMode() {
	sortMode = sortMode === 'name' ? 'price' : 'name'
	sortParks()
}

function filterParks() {
	const query = searchInput.value.toLowerCase().trim()
	filterText = query
	const filteredParks = parksState.filter(park =>
		park.name.toLowerCase().includes(query) ||
		park.address.toLowerCase().includes(query)
	)
	drawCards(filteredParks)
}

const searchInput = document.getElementById("search_input")
searchInput.addEventListener("input", filterParks)

window.sort = toggleSortMode
window.total = total

refreshParks()
