(function () {
	var domReadyPromise = window['promisifiedDomEvents'].ready;
	var domLoadedPromise = window['promisifiedDomEvents'].loaded;

	var log = (function () {
		var output;
		return function (message) {
			if (!output) {
				output = document.querySelector('#output');
			}
			var messageDiv = document.createElement('div');
			messageDiv.innerHTML = message;
			output.appendChild(messageDiv);
		};
	})();

	domReadyPromise.then(log.bind(null, 'DOM is ready'));
	domLoadedPromise.then(log.bind(null, 'window is loaded'));

	// some delayed scripts
	setTimeout(function () {
		domReadyPromise.then(log.bind(null, '(delayed) DOM is ready'));
		domLoadedPromise.then(log.bind(null, '(delayed) window is loaded'));
	}, 3000);
})();
