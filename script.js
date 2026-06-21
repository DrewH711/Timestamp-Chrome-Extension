const date = new Date();

var month = date.getMonth();
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var initials = "No initials entered";

var message = `${hours}:${minutes} ${date.getMonth()}/${date.getDate()} - ${initials} `

document.getElementById("initials").addEventListener("click", () => {
  initials = document.getElementById("initials").value;
  alert(message);
});






