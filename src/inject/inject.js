
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		const element = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Update branch');
		if(element) {
			element.parentElement.removeChild(element);
		}
			

	}
	}, 2000);
