window.addEventListener("keypress", () => {
    const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");

//Resizing
canvas.height= window.innerHeight;
canvas.width = window.innerWidth;

//Tele négyzet:
ctx.fillRect(100,100,200,50);
});
var favoriteFood = "Jó kis pizza";
var numOfSlices = 18;
// var favoriteFood: string;
// var numOfSlices: number;
console.log(favoriteFood);
console.log(numOfSlices);