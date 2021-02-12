const googleSearch = require('./script');

dbMock = [
	'dog.com',
	'cheesepuff.com',
	'disney.com',
	'dogpictures.com'
];

describe('googleSearch', () => {
	it('this is a test', () => {
		expect('hello').toBe('hello');
		googleSearch('test', dbMock);
	});

	it('is searching Google', () => {
		expect(googleSearch('test', dbMock))
			.toEqual([]);
		expect(googleSearch('dog', dbMock))
			.toEqual(['dog.com', 'dogpictures.com']);
	});

	it('works with undefined and null input', () => {
		expect(googleSearch(undefined, dbMock))
			.toEqual([]);
	});

	it('does not return more than 3 matches', () => {
		expect(googleSearch('.com', dbMock).length)
			.toEqual(3);
	});
});









