document.getElementById("submit_button").value = "Save";

chrome.storage.local.get("initials", (result) => {
  document.getElementById("initials").value = result.initials || "";
});

document.getElementById("submit_button").addEventListener("click", () => {
  let newinitials = document.getElementById("initials").value;
  chrome.storage.local.set({initials : newinitials});
  document.getElementById("submit_button").value = "Initials saved!";
});