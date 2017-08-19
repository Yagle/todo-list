// Erledigte Aufgaben streichen
$(".container ul").on("click", "li",function(){
	$(this).toggleClass("finished");
});

// Neue Aufgaben anlegen
$("input[type='text']").on("keypress", function(event){
	if(event.which==13){
		var content = $("input[type='text']").val();
		$("input[type='text']").val("");
		$("ul").append("<li style='display: none'><span>X</span> " + content + "</li>");
		$("ul li:last-child").fadeIn();
	}
});

// Aufgaben löschen
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});