
function update() {
    txt =  document.getElementById("name").value;
    phrase = `Hello ${txt}!`
    document.getElementById("header").innerHTML = phrase;
}