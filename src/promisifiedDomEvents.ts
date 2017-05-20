const EVENT_DOM_READY:string = 'DOMContentLoaded';
const EVENT_WINDOW_LOADED:string = 'load';

export const ready:Promise<any> = new Promise((resolve):void => {
	const {readyState} = window.document;

	if (readyState === 'loading') {
		const readyHandler = () => {
			window.document.removeEventListener(EVENT_DOM_READY, readyHandler);
			resolve();
		};
		window.document.addEventListener(EVENT_DOM_READY, readyHandler);
	} else {
		resolve();
	}
});

export const loaded:Promise<any> = new Promise((resolve):void => {
	const {readyState} = window.document;

	if (readyState !== 'complete') {
		const loadHandler = () => {
			window.removeEventListener(EVENT_WINDOW_LOADED, loadHandler);
			resolve();
		};
		window.addEventListener(EVENT_WINDOW_LOADED, loadHandler);
	} else {
		resolve();
	}
});

window['promisifiedDomEvents'] = {ready, loaded};
