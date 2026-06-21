const date = new Date();

document.getElementById("submit_button").addEventListener("click", () => {
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let initials = document.getElementById("initials").value;

  const message = `${hours}:${minutes} ${date.getMonth()}/${date.getDate()} - ${initials} `
  alert(message);
});






