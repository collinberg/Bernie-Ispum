/*============
* 
* Main Javascript for Tulsa Ipsum
*
* =================*/
var slideNumber = $('#rangeLabel');
var rangeSlide = $('#Number');
var repeaterNum = rangeSlide.val();
var outputContainer = $('#content');

//Set the Text of the label on Load
slideNumber.text(rangeSlide.val() );



// Allow User to Select Number, Max of 5. Possibly on a slider unit
function labelUpdate(){
	var updated = rangeSlide.val();
	slideNumber.text(updated);
	repeaterNum = updated;
}

$("input[type=range]").mousemove(labelUpdate);

// Submit will generate the Text in an area, and another button will copy that area to clipboard

// Create a Sample Paragraph of Tulsa Ipsum
var ipsum = Array(
	'We, not me',
	'It’s Time to Make College Tuition Free and Debt Free',
	'Enough with the Damn Emails',
	'Nobody working 40 hours a week should live in poverity',
	'A living wage will',
	'America now has more wealth and income inequality than any major developed country on earth.',
	'Take on Wall Street',
	'Citizens United',
	'Peope',
	'Country',
	'Let my People Go',
	'Feel the Bern',
	'democratic socialism',
	'Paid for by Bernie, not the billionaires',
	'Are you ready?',
	'Rebuild America Act',
	'We expect that our tap water is clean',
	'When it comes to the rights of women, we cannot go backwards. We have got to go forward.',
	'we will ensure that is a war they are going to lose.',
	'It will not be as high as 90%',
	'Look out for North Korea!'
	);
// Allow User to Select if they want a Header, Sentance, or Paragraph 

$('button').click(function() {

	//Remove any paragraph elements if they are in the area
	$('#content p').remove();
	var outputText = '';
	console.log(repeaterNum);
	for(var i = 1; i <= repeaterNum; i++) {
		//start by wrapping everything in a <p> tag
		
		outputText += '<p>';
		outputText += i;
		outputText += '</p>';

	};
	outputContainer.append(outputText);
	
	
});




