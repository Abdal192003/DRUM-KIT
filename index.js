// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        // switch casing code 
        switch (this.innerHTML) {

            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                console.log(this.style.color = "Blue");
                break;

            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                console.log(this.style.color = "white");

            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                console.log(this.style.color = "black");
                break;

            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                console.log(this.style.color = "green");
                break;

            case "j":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                console.log(this.style.color = "yellow");
                break;

            case "k":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                console.log(this.style.color = "purple");
                break;

            case "l":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                console.log(this.style.color = "orange");
                break;

            // Good practices to write default
            default: console.log("OOps something went wrong"); 

        }


    });
}


// this.innerHTML= makeSound(this.innerHTML);

document.addEventListener("keydown" ,function(event) {
    makeSound(key);
});


function makeSound(key){
    switch(key) {
           
    }
}