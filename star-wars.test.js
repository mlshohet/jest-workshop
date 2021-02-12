const fetch = require('node-fetch');
const swapi = require('./star-wars');

it('calls swapi to get people', () => { //use done for async callbacks
	expect.assertions(1); //check if assertions are actually used in async
	return swapi.getPeopleAA(fetch)
		.then(data => {
			expect(data.count).toEqual(82);
		});
});


it('calls swapi to get people with Promise', () => {
	expect.assertions(2);
	return swapi.getPeoplePromise(fetch)
		.then(data => {
			expect(data.count).toEqual(82);
			expect(data.results.length).toBeGreaterThan(5)
		});
});

// Mock of the API database.

it('getPeople resturns count and results', () => {
	const mockFetch = jest.fn()  // fn = function
		.mockReturnValue(Promise.resolve({
			json: () => Promise.resolve({
				count: 82,
				results: [0,1,2,3,4,5]
			})
		}))

		expect.assertions(4);
		return swapi.getPeoplePromise(mockFetch)
			.then(data => {
				expect(mockFetch.mock.calls.length).toBe(1);
				expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
				expect(data.count).toEqual(82);
				expect(data.results.length).toBeGreaterThan(5)
			});
});






