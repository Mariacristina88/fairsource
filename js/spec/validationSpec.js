beforeEach(function() {
	
});

describe( "First Test", function () {
    it("Does a silly test", function() { 
     expect(1).toEqual(1);
    });
});

describe("The validation for the contact form", function() {
  it("validate", function() {
    expect(false).toBe(false);
  });
});

// create element
// showError = function(elementId, text

// spyOn(document, 'getElemementById').and.return({
// 	style {
// 		display : 'inline'
// 	}
// })


describe("Validation of form fields", function() {

	describe("String empty", function() {
		it("Should return false", function() {
			var validation = module.stringNotEmpty('');
			expect(validation).toBe(false);
		});
	});

	describe("String not empty", function() {
		it("Should return true", function() {
			var validation = module.stringNotEmpty('name');
			expect(validation).toBe(true);
		})
	});

	describe("Valid email", function() {
		it("Should return true", function() {
			var emailValidation = module.validateEmail('email@email.com');
			expect(emailValidation).toBe(true);
		})
	});

	describe("Not valid email", function() {
		it("Should return false", function() {
			var emailValidation = module.validateEmail('email');
			expect(emailValidation).toBe(false);
		})
	});
}); 


describe( "Show error", function () {
    it("It changes display to block at the p tag on the form", function() { 
    	var el = document.createElement('div');
    	el.id = 'testme';
    	el.style.display = 'wibble';
    	document.querySelector('body').appendChild(el);
	    module.showError('testme', 'I got tested!');
	    var expr = (el.style.display === 'block');
	    expect(expr).toBe(true);
	    expect(el.innerHTML).toBe('I got tested!');
    });
});
