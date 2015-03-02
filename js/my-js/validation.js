
var module = (function (window, document, undefined) {

'use strict';

var form_tag = document.getElementsByClassName('check'), i,
	validationError = false;

var showError = function(errorElement, text){
	//var errorElement = document.getElementById(elementId);
	
	errorElement.innerHTML = text;
	if (text && text !== '') {
		errorElement.style.display = 'block';  /** if there is the error text inside <p>, than show it. **/
	}
	else {
		errorElement.style.display = 'none'; // if <p> is empty, don't show <p>.
	}
};

var stringNotEmpty = function(string) {
	if (string == '') {
		return false;
	} 
	return true;
};

var validateEmail = function(email) {
	var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailRegEx.test(email)) {
		return true;
	} return false;
};


var validate = function(){
	var name = document.contactForm.fname;
	var email = document.contactForm.femail;
	var subject = document.contactForm.fsub;
	var message = document.contactForm.fmessage;
	var fields = ['fname', 'femail', 'fsub', 'fmessage'];

	
	for (var i=0; i<fields.length; i++) {
		
		var field = document.contactForm[fields[i]];
		console.log(field.value);
		if(!stringNotEmpty(field.value)) {
		errorCount++;
		showError(document.contactForm[fields[i]], 'Please enter your' + fields[i]);
		}
	}

	var errorCount = 0;
/*
	if(!stringNotEmpty(name)) {
		errorCount++;
		showError('error-name');

	} 
			
	

	if (!stringNotEmpty(email) || !validateEmail(email)) {
		errorCount++;
		showError('error-email', 'Please enter your email.');
		
	} 
		
	

	if (!stringNotEmpty(subject)) {
		errorCount++;
		showError('error-subject', 'Please enter a subject.');
	} 

	if (!stringNotEmpty(message)) {
		errorCount++;
		showError('error-message', 'Please enter a message.');
	} 
	

*/	
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

return {
	showError : showError,
	validate : validate,
	stringNotEmpty : stringNotEmpty,
	validateEmail : validateEmail
};

})(window, document);
