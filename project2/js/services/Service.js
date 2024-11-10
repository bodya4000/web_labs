class Service {
	static BASE_URL = "http://localhost:9000/api/";
	static BASE_HEADERS = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	static async request(endpoint, method = "GET", body = null) {
		const url = this.BASE_URL + endpoint

		const options = {
			method: method.toUpperCase(),
			...this.BASE_HEADERS
		}

		if (body && method.toUpperCase() !== 'GET') {
			options.body = JSON.stringify(body)
			console.log(options.body)
		}

		try {
			const response = await fetch(url, options)
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			return await response.json()
		} catch (error) {
			console.error('Error during fetch:', error)
			throw error
		}
	}

	static getParks(sort, filterText, callback) {
		let url = "parks"
		let params = []

		if (sort) {
			params.push(`sort=${encodeURIComponent(sort)}`)
		}

		if (filterText) {
			params.push(`filterText=${encodeURIComponent(filterText)}`)
		}

		if (params.length > 0) {
			url += `?${params.join('&')}`
		}

		this.request(url)
			.then(data => callback(data, null))
			.catch(error => callback(null, error))
	}


	static getParksSortedByName(callback) {
		this.request("parks/sort/name")
			.then(data => callback(data, null))
			.catch(error => callback(null, error))
	}

	static getParksSortedByPrice(callback) {
		this.request("parks/sort/price")
			.then(data => callback(data, null))
			.catch(error => callback(null, error))
	}

	static createPark(body, callback) {
		this.request(`parks`, "post", body)
			.then(data => callback(data, null))
			.catch(error => callback(null, error))
	}
	static updatePark(id, body, callback) {
		this.request(`parks/${id}`, "put", body)
			.then(data => callback(data, null))
			.catch(error => callback(null, error))
	}

	static deleteParkById(id, callback) {
		this.request(`parks/${id}`, "delete")
			.then(data => callback(data, null))
			.catch(error => callback(null, error))
	}
}

export default Service
