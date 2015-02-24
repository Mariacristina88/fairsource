(function (window, document, undefined) {

'use strict';

var form_tag = document.getElementsByClassName('check'), i,
	validationError = false;

var showError = function(elementId, text){
	var errorElement = document.getElementById(elementId);
	errorElement.innerHTML = text;
	if (text && text !== '') {
		errorElement.style.display = 'block';  // if there is the error text inside <p>, than show it.
	}
	else {
		errorElement.style.display = 'none'; // if <p> is empty, don't show <p>.
	}
};


var validate = function(){
	var name = document.contactForm.fname.value;
	var email = document.contactForm.femail.value;
	var subject = document.contactForm.fsub.value;
	var textarea = document.contactForm.fmessage.value;
	var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	var errorCount = 0;

	if(name === '') {
		errorCount++;
		showError('error-name', 'Please enter your name.');

	} else {
		showError('error-name');		
	}

	if (email === '' || !emailRegEx.test(email)) {
		errorCount++;
		showError('error-email', 'Please enter your email.');
		
	} else {
		showError('error-email');
	}

	if (subject === '') {
		errorCount++;
		showError('error-subject', 'Please enter a subject.');
	} else {
		showError('error-subject');
	}

	if (textarea === '') {
		errorCount++;
		showError('error-message', 'Please enter a message.');
	} else {
		showError('error-message');
	}
	
	console.log(errorCount);
	if(errorCount > 0 && validationError === false) {

		validationError = true;

		for (i = 0; i < form_tag.length; i++) {
			form_tag[i].addEventListener('keyup', validate);
		}
	} else if(errorCount === 0) {
		console.log('Validation succesful');
		validationError = false;
		return(errorCount === 0);
	}
};

document.getElementById('submit').addEventListener('click', function() {
	validate();
});


})(window, document);
