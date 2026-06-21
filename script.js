const date = new Date();

document.getElementById("initials").addEventListener("click", () => {
alert("Button clicked!");
});

let message = `${initials} ${date.getMonth()}/${date.getDate()}`
