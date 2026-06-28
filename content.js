function insertAtCursor(element, text) {
  const start = element.selectionStart;
  const end = element.selectionEnd;
  element.value = element.value.slice(0, start) + text + element.value.slice(end);
  element.selectionStart = element.selectionEnd = start + text.length;
  element.focus();
}

window.addEventListener("keydown", function (event) {

  if(event.ctrlKey && event.shiftKey && event.key==="F"){
    const date = new Date();

    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amOrPm = "am";

    if(hours>12){
      hours = hours % 12;
      amOrPm = "pm";
    }

    if(minutes<10){
      minutes = "0" + minutes.toString();
    }

    chrome.storage.local.get("initials", (result) => {
      let dateTimeInitials = `${hours}:${minutes}${amOrPm} ${month}/${day} - ${result.initials || ""} `;
    
      try{
        insertAtCursor(window.document.activeElement, dateTimeInitials);
      }
      catch(error){
        alert("An error occurred: " + error)
      }

    });
  }

});