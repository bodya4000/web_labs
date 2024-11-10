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

function clearFilterInputs() {
	searchInput.value = ''
}