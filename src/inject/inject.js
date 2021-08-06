
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		const element = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Update branch');
		if(element) {
			element.parentElement.removeChild(element);
		}
			

	}
	}, 700);
