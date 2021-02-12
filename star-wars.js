const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
	return fetch('https://swapi.dev/api/people')
		.then(res => res.json())
		.then(data => {
			return {
				count: data.count,
				results: data.results
			}
		})
		.catch(err => console.log(err));
}

const getPeopleAA = async (fetch) => {
	const getRequest = await fetch('https://swapi.dev/api/people');
	const data = await getRequest.json();
	return {
		count: data.count,
		results: data.results
	}
};

module.exports = {
	getPeoplePromise,
	getPeopleAA
}