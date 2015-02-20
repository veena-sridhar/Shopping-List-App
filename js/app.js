
$(document).ready(function() {
	$('#add-items').keypress(function(evt) {
		if (evt.keyCode == 13) {
			$('.list-area ul').append('<li class="user-values">' + '<img class="x-mark" src="images/X-Mark.jpg">' + this.value + '<input id="checkbox" type="checkbox">' + '</li>');
			$('#add-items').val('');
		}
	});
	$('.list-area ul').on('click', '.x-mark', deleteItem);
	function deleteItem() {
		$(this).parent().remove();
	}
	$('.reset').click(function() {
		$('.user-values').remove();
	});
});
