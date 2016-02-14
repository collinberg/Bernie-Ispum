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
	'Tulsa',
	'TU',
	'TCC',
	'broken Arrow',
	'riverside',
	'BOC Center',
	'coffee Shop Manifesto',
	'cherry Street',
	'blue Dome District',
	'guthery Green',
	'woodland Hills Mall',
	'oilers Hocky game',
	'state Fair',
	'everyone Loves',
	'oil on oil on oil',
	'what river',
	'turkey mountain trails',
	'a show at Cains',
	'a show at the Brady',
	'Philbrook Museum',
	'We have a zoo?'
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




