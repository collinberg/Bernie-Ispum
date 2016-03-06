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


//-------------------------------------------------------
// Submit will generate the Text in an area, and another button will copy that area to clipboard

// Create a Sample Paragraph of Tulsa Ipsum
var ipsum = Array(
	'we, not me',
	"it's time to make college tuition free and debt free ",
	'enough with the damn emails ',
	'nobody working 40 hours a week should live in poverity ',
	'a living wage will ',
	'america now has more wealth and income inequality ',
	'than any major developed country on earth. ',
	'take on Wall Street ',
	'citizens united ',
	'people ',
	'country ',
	'let my people go ',
	'feel the Bern ',
	'democratic socialism ',
	'paid for by Bernie, not the billionaires ',
	'are you ready? ',
	'rebuild America Act ',
	'we expect that our tap water is clean ',
	'when it comes to the rights of women, we cannot go backwards. We have got to go forward. ',
	'we will ensure that is a war they are going to lose. ',
	'it will not be as high as 90% ',
	'look out for North Korea! ',
	'grass roots movement ',
	'Bernie Taxi App ',
	'talk bernie to me ',
	'reddit politics loves me ',
	'the top 1% ',
	"O'Rielly is moving to Ireland ",
	'universtal health care ',
	'Denmark ',
	'all he does is win win win '
	);



// Allow User to Select if they want a Header, Sentance, or Paragraph
function doStuff(){
	outputContainer.removeClass('hide');
	// Declare the Amount type here, not when page loads. Otherwise its set to undefined
	var amountType = $('input[name="genText"]:checked').val();

	//Declare outbut to be an empty string
	var outputText = '';
	if('header' == amountType) { //Header

		for(var i = 1; i <= repeaterNum; i++) {
				//start by wrapping everything in a <p> tag
				var rando = Math.floor((Math.random() * 30)) + 1;
				outputText += '<p>';
				// Most important part here
				outputText += ipsum[rando];

				outputText += '</p>';

			};

	} else if('sentance' == amountType){ //Sentance

		for(var i = 1; i <= repeaterNum; i++) {
			//start by wrapping everything in a <p> tag
			console.log('paragraph was used');
			outputText += '<p>';
			for(var para = 1; para <= 3; para++) {
				var rando = Math.floor((Math.random() * 20)) + 1;
				outputText += ipsum[rando];

			};
			// Most important part here

			outputText += '</p>';
		};

	} else if('paragraph' == amountType){ //Sentance


		for(var i = 1; i <= repeaterNum; i++) {
			//start by wrapping everything in a <p> tag
			console.log('paragraph was used');
			outputText += '<p>';
			for(var para = 1; para <= 7; para++) {
				var rando = Math.floor((Math.random() * 20)) + 1;
				outputText += ipsum[rando];

			};
			// Most important part here

			outputText += '</p>';
		};


	}



	// Output the text
	outputContainer.append(outputText);

}
$('button').click(function() {
	//Remove any paragraph elements if they are in the area
	$('#content p').remove();



	doStuff();



});
