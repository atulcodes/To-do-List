$("ul").on("click", "li", function() {   // when li(that may or may not have been thare when the page was loaded) that is inside of a ul is clicked.

	$(this).toggleClass("completed");

});

$("ul").on("click", "span", function(event) {

	$(this).parent().fadeOut(500, function() {

		$(this).remove();

	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function(event) {

	if(event.which == 13) {

		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}

});

$("input[type='text']").fadeOut();

$(".fa-plus").click(function() {

	$("input[type='text']").fadeToggle();

});