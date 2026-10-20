let cmd = document.getElementById("webshell");
let code_line = document.getElementById("code_line");
let textField = document.querySelector("input[type=text]");
let closeButton = document.getElementById("closeButton");
let isPressed = false;

document.addEventListener("mousemove", followMouse);
let bound = cmd.getBoundingClientRect();

function closer() {

    closeButton.addEventListener("mousedown", () => {
        cmd.style.display = "none";
    });
}

function typer() {
    textField.addEventListener("input", () => {
        code_line.innerHTML = textField.value;

    });
}

function dragCmd() {

    cmd.addEventListener("mousedown", () => {
        if(!isPressed) {
            isPressed = true;
        } else {
            isPressed = false;
        }
         
    });
}

    function followMouse(e) {

        if(isPressed) {
            let x = e.clientX - bound.left;
            let y = e.clientY - bound.top;

            cmd.style.left = x + "px";
            cmd.style.top = y + "px";
            cmd.style.transform = "translate(190%, 75%)";
        }
        
    }


typer();
closer();
dragCmd();