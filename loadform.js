async function configLoad() {
	let environmentInput = $('#URIEnvironment');
	let opFirst = document.createElement('option');
	alert(environmentInput.val());
	alert(jsonSux.Environment.length);
	environmentInput.append(opFirst);