const date = new Date();

var month = date.getMonth();
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();

let message = `${hours}:${minutes} ${date.getMonth()}/${date.getDate()} - ${initials} `

document.getElementById("initials").addEventListener("click", () => {
alert(message);
});


