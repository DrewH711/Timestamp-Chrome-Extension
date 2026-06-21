const date = new Date();

function getSavedInitials(){
  let decodedCookie = decodeURIComponent(document.cookie);
  if(decodedCookie.length>9){
    //initials= is 9 characters
    let value = decodedCookie.substring(9, decodedCookie.length);
    return value;
  }
  else{
    return "";
  }
}

document.getElementById("submit_button").addEventListener("click", () => {
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let initials = document.getElementById("initials").value;

  if(getSavedInitials() != initials){
    document.cookie = `initials=${initials}`;
  }

  var message = `${hours}:${minutes} ${date.getMonth()}/${date.getDate()} - ${getSavedInitials()}`;
  alert(message);
});






