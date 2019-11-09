const assert = this.chai ? this.chai.assert : require("assert");

const { loaded, ready } = window.promisifiedDomEvents;

describe('promisifiedDomEvents', () => {
	it('"ready" should be a promise', () => {
		assert.instanceOf(
			ready, Promise, 'window.promisifiedDomEvents.ready is an instance of Promise'
			);
		});
		it('"loaded" should be a promise', () => {
			assert.instanceOf(
				loaded, Promise, 'window.promisifiedDomEvents.loaded is an instance of Promise'
			);
		});

	it('"ready" should work properly', async () => {
		await ready;
		assert.notEqual(
			window.document.readyState, 'loading', 'document is ready'
		);
	});
	it('"loaded" should work properly', async () => {
		await loaded;
		assert.equal(
			window.document.readyState, 'complete', 'document is loaded'
		);
	});
});
