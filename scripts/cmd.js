let cmd = document.getElementById("webshell");
let code_line = document.getElementById("code_line");
let textField = document.querySelector("input[type=text]");

function typer() {
    textField.addEventListener("input", () => {
        code_line.innerHTML = textField.value;


        if(textField.value == "window_size") {
              console.log(window.innerWidth + "px " + window.innerHeight + "px");
        }

    });
}

typer();