let btn = document.querySelector("button");  

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3"); 
    let randomColor = getRandomColor();  // calling function to get rgb value
    h3.innerText = randomColor;          //to change h3  value to rgb values
    h3.style.color = randomColor;        

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;  //seting div bg acc to rgb values
    console.log("Color upadated!!");   
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);     //here 255 because in RGB R ranges from 0-255
    let green = Math.floor(Math.random() * 255);  //here 255 because in RGB G ranges from 0-255
    let blue = Math.floor(Math.random() * 255);   //here 255 because in RGB B ranges from 0-255
    let color = `RGB(${red} , ${green} ,${blue})`; // returning  rgb color
    return color;
}