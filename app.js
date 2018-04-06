$(document).ready( () => {

	$(".modalview").hide();  //Initially hide the Modal

	$("#modalbutton").click(() => {  //click to open modal

	
		$(".modalview").slideDown("fast");
	});

	$("#close").click(() => {

		
		$(".modalview").slideUp("fast");
	});

	$("#cross").click(() => {

		
		$(".modalview").slideUp("fast");
	});
});