function RememberTheUser(RememberToCheck) {
    if (RememberToCheck.checked) {
        document.querySelector("#submit").disabled = false;
    } else {
        document.querySelector("#submit").disabled = true;
    }
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
var msg = document.getElementById("Name");
var msgbox = document.querySelector("div.msg");
msg.addEventListener("keyup", function(getString) {
    if (getString.keyCode == 13) {
        var newline = document.createElement("p");
        newline.appendChild(document.createTextNode(this.value));
        msgbox.appendChild(newline);
        this.value = "";
    }
});
