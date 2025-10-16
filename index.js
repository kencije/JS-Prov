
let changeBgBtn = document.getElementById('changebg');

changeBgBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});

let goodvibsBtn = document.getElementById('goodvibs');
let goodvibesparagraph = document.getElementById('goodvibstext');


    goodvibsBtn.addEventListener('click', () => {
    goodvibesparagraph.innerHTML = "<p>✨ we the best music ✨</p>";
});

let showpicBtn = document.getElementById('showpic');

let showPicButton = document.getElementById("showpic");
let cowDiv = document.getElementById("cow1");

showPicButton.addEventListener("click", () => {
    cowDiv.innerHTML = '<img src="cow1.jpg" alt="Cow" style="max-width:300px;">';
});

let hidepicBtn = document.getElementById("hidepic");

hidepicBtn.addEventListener("click", () => {
    cowDiv.innerHTML = "";
});

let changepicBtn = document.getElementById("changepic");

changepicBtn.addEventListener("click", () => {
    cowDiv.innerHTML = '<img src="cow2.jpg" alt="Cow" style="max-width:300px;">';
});

let headerButton = document.getElementById("header");
let headerTextDiv = document.getElementById("headertext");

headerButton.addEventListener("click", () => {
    headerTextDiv.innerHTML = "<h1>The...the creature....</h1>";
});

let removeheaderBtn = document.getElementById("removeheader");

removeheaderBtn.addEventListener("click", () => {
    headerTextDiv.innerHTML = "";
    headershowtext.innerHTML = "";
});

let showheaderbutton = document.getElementById("showheader");
let headershowtext = document.getElementById("showheadertext");

showheaderbutton.addEventListener("click", () => {
    headershowtext.innerHTML = "<h2>It's....here...listening...</h2>";
});

let timeButton = document.getElementById("time");
timeButton.addEventListener("click", ShowTime);
function ShowTime() {
    let now = new Date();
    alert("Current Time: " + new Date().toLocaleTimeString());
}