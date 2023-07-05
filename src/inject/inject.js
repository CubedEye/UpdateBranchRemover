
	var counter = 0;
	var readyStateCheckInterval = setInterval(function() {
		if(counter > 10) {
			clearInterval(readyStateCheckInterval);
		}

		if (document.readyState === "complete") {
			const element = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Update branch');
			if(element) {
				branchAction = element.closest(".branch-action-item");
				branchAction.parentElement.removeChild(branchAction);
				clearInterval(readyStateCheckInterval);
			}
				

		}
		counter++;
	}, 700);
