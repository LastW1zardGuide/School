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


const coffee_name = document.querySelector(".coffee_name");
const coffee_filling = document.querySelector(".filling");
const buttons = document.querySelectorAll("button");
let current_element = null;

const changeCoffeeType = (selected) => {
  if (current_element) {
    current_element.classList.remove("selected");
    coffee_filling.classList.remove(current_element.id);
  }
  current_element = selected;
  coffee_filling.classList.add(current_element.id);
  current_element.classList.add("selected");
  coffee_name.innerText = selected.innerText;
};

const setActiveType = (element) => {
  element.toggleClass("selected");
};

[...buttons].forEach((button) => {
  button.addEventListener("click", () => {
    changeCoffeeType(button);
  });
});
