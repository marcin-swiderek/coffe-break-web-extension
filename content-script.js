const replaceCursor = () => {
	document.body.style.cursor =
		"url(data:image/png;base64,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), auto";
};

const restoreCursor = () => {
	document.body.style.cursor = "auto";
};

const isElementChildOf = (child, parentSelector) => {
	const parent = document.querySelector(parentSelector);
	return parent?.contains(child);
};

const validateClick = (target) => {
	const targetInnerText = target.innerText.toLowerCase();
	if (targetInnerText !== "gotowe" && targetInnerText !== "done") {
		return false;
	}

	const issueDetailsSelector =
		'[data-testid^="issue.views.issue-base.context.status-and-approvals-wrapper.status-and-approval"]';
	const popupSelectSelector = '[id$="popup-select"]';

	return (
		isElementChildOf(target, issueDetailsSelector) &&
		isElementChildOf(target, popupSelectSelector)
	);
};

const handleClick = (e) => {
	if (!validateClick(e.target)) {
		return;
	}

	const childIssuesContainerSelector = "[data-testid$=issues-container]";
	const childIssuesContainer = document.querySelector(
		childIssuesContainerSelector
	);

	const issuesSelector = '[data-test-id^="issue.fields.status.common"]';
	const issues = childIssuesContainer.querySelectorAll(issuesSelector);

	const willPOBeAngry = Array.from(issues).some((issueEl) => {
		const innerText = issueEl.innerText.toLowerCase();
		return innerText !== "gotowe" && innerText !== "done";
	});

	if (willPOBeAngry) {
		alert("PO is watching ＼`•̀益•́´／");
		replaceCursor();
		setTimeout(() => {
			restoreCursor();
		}, 3000);
	} else {
		console.log("PO Approves 💪😎");
	}
};

document.addEventListener("pointerdown", handleClick);
