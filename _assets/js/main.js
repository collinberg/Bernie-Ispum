/*============
* 
* Main Javascript for Tulsa Ipsum
*
* =================*/

// Create a Sample Paragraph of Tulsa Ipsum
// Allow User to Select if they want a Header, Sentance, or Paragraph 
// Allow User to Select Number, Max of 5. Possibly on a slider unit
// Submit will generate the Text in an area, and another button will copy that area to clipboard
var slideNumber = $('#rangeLabel');
var rangeSlide = $('#Number');


//Set the Text of the label on Load
slideNumber.text(rangeSlide.val() );

function labelUpdate(){
	var updated = rangeSlide.val();
	slideNumber.text(updated);
}

$("input[type=range]").mousemove(labelUpdate);