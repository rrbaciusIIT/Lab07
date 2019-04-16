function init(){
    var onClick = document.getElementById("entrybutton");
    var alertInfo = document.getElementById("entryinput");
    onClick.addEventListener("click", function() {
        alert ("Robert Bacius: Testing:  " + alertInfo.value);
        document.getElementById("textoutput").innerHTML = alertInfo.value;
    });
}
window.addEventListener('load', init);