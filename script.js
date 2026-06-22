const date = new Date();

document.getElementById("submit_button").value = "Save";

try{
  document.getElementById("initials").value = localStorage.getItem("initials");
}
catch(error){
  localStorage.setItem("initials", "");
}

document.getElementById("submit_button").addEventListener("click", () => {
  let newinitials = document.getElementById("initials").value;
  localStorage.setItem("initials", newinitials);
  document.getElementById("submit_button").value = "Initials saved!";
});

function insertAtCursor(element, text) {
  const start = element.selectionStart;
  const end = element.selectionEnd;
  element.value = element.value.slice(0, start) + text + element.value.slice(end);
  element.selectionStart = element.selectionEnd = start + text.length;
  element.focus();
}

window.addEventListener("keydown", function (event) {

  if(event.ctrlKey && event.shiftKey && event.key==="F"){

    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let amOrPm = "am";

    if(hours>12){
      hours = hours % 12;
      amOrPm = "pm";
    }
    
    let minutes = date.getMinutes();
    let dateTimeInitials = `${hours}:${minutes}${amOrPm} ${month}/${day} - ${localStorage.getItem("initials")}`;
    // alert(dateTimeInitials);
    try{
      insertAtCursor(this.window.document.activeElement, dateTimeInitials);
    }
    catch(error){
      alert("An error occurred: " + error)
    }
  }

});






