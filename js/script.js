// Erledigte Aufgaben streichen
$(".container ul").on("click", "li",function(){
	$(this).toggleClass("finished");
});

// Neue Aufgaben anlegen
$("input[type='text']").on("keypress", function(event){
	if(event.which==13){
		var content = $("input[type='text']").val();
		$("input[type='text']").val("");
		$("ul").append('<li style="display: none"><span>' 
			+ '<i class="fa fa-trash" aria-hidden="true"></i>' 
			+ '</span> ' + content + '</li>');
		$("ul li:last-child").fadeIn();
	}
});

// Textfeld anzeigen bei Klick
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle(function(){
		$("h1 i").toggleClass("fa-plus");
		$("h1 i").toggleClass("fa-minus");
	});
});


// Aufgaben löschen
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});