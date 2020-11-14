$("#menu-toggle").click(function (e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});


$(".params_form").on("submit", function (event) {
	event.preventDefault();
	$("#spinner_modal").modal("show");

	let from_date = $(this).find('[name=from_date]').val();
	let to_date = $(this).find('[name=to_date]').val();

	let data = {
		userId : "",
		request_body : {
			data_format : "",
			study : ""
		}
	}

	console.log( data )
	const url = DEFAULT_API_URL + "/users/admin/export"

	let ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// const response = JSON.parse(this.responseText);
			// const response_status = response.meta_data.status;
			const response = this.responseText
			console.log(response);

			let new_link = document.createElement("a")
			new_link.href = response

			new_link.click()
		}
	};
	ajax.open("POST", url, true);
	ajax.setRequestHeader("Content-Type", "application/json");
	ajax.send(JSON.stringify(data));

});
/* using socket.io */

/*
const socket = io("http://localhost:3000");
 
socket.on('connect', () => {
  console.log(socket.connected); // true
  let message = "send me stuff"
  socket.emit('get_update', { message });
});
 
socket.on('update', (data) => {
  console.log("got update", data);
})
 
socket.on('disconnect', () => {
  console.log(socket.connected); // false
});
 
*/


