let rightArrow = document.getElementById("rightArrow");
let image = document.querySelector("img");
let darkmode = document.getElementById("darkmode");
let leftArrow = document.getElementById("leftArrow");
let arr = ["imgs/image.png", "imgs/oof.jpg", "imgs/image3.png"];
let li = document.querySelectorAll("li");
let booler = false;
let menu_list = document.querySelectorAll(".menu_list");
let do_list = document.getElementById("menu_list");
let h3 = document.querySelectorAll("h1");
let j = 0;


function animation1() {
    str = "";
    let r = 255;
    let g = 255;
    let b = 255;

    let time = setInterval(function() {

        str = "rgb(" + r + "," + g + "," + b + ")";
        document.body.style.background = str;
        r--;
        g--;
        b--;

    }, 5); 
}

function animation2() {
    str = "";
    let r = 0;
    let g = 0;
    let b = 0;

    let time = setInterval(function() {

        str = "rgb(" + r + "," + g + "," + b + ")";
        document.body.style.background = str;
        r++;
        g++;
        b++;

    }, 5); 

}

function menuAnimation() {

    let pixel = 0;
    let time;

            //take all list(<li>)
       for(let i = 0; i < menu_list.length; i++) {
            menu_list[i].addEventListener("mouseover", () => {

                time = setInterval(function() {

                    menu_list[i].style.textShadow = "pink" + " " + pixel + "px" + " " + pixel + "px";
                    
                        if(pixel == 5) {
                            menuAnimation();
                            return;
                        }

                        pixel++;

                }, 20);
            });
        
        }
       
}



function setWhite() {
         for(let i = 0; i < h3.length; i++) {
             h3[i].style.color = "white";
         }

         for(let i = 0; i < li.length; i++) {
             li[i].style.color = "white";
         }
}

function setDefault() {
    for(let i = 0; i < h3.length; i++) {
             h3[i].style.color = "black";
         }

         for(let i = 0; i < li.length; i++) {
             li[i].style.color = "black";
         }
}


function setToDarkmode() {

     darkmode.addEventListener("mousedown", function() {
        animation1();
        setWhite();
        booler = true;
        if(booler) {
            darkmode.addEventListener("mousedown", function() {
            animation2();
            setDefault();
            setToDarkmode();
        });
        }
     });  
}


function swap() {

    rightArrow.addEventListener("mousedown", function() {
        if(j == arr.length - 1) {
            return;
        }
        j++;
        image.src = arr[j];
    }); 
}

function swap2() {
   leftArrow.addEventListener("mousedown", function() {
        if(j == 0) {
            return;
        }
        j--;
        image.src = arr[j];
   });
}

swap();
swap2();
setToDarkmode();
menuAnimation();