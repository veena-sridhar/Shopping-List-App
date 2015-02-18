$(document).ready(function() {
	$('#add-items').keypress(function(evt) {
		if (evt.keyCode == 13) {
			$('.list-area ul').append('<li class="user-values">' + '<img class="x-mark" src="images/X-Mark.jpg">' + this.value + '<input id="checkbox" type="checkbox">' + '</li>');
			$('#add-items').val('');
		}
	});
	$('.reset').click(function() {
		$('.user-values').remove();
	});
	$('.x-mark').click(function() {
		alert('X mark clicked');
		$('user-values').remove();
	});
	$(':checkbox').click(function() {
		alert('Checkbox clicked');
		$('.user-values').css("text-decoration", "line-through");
	});
});
