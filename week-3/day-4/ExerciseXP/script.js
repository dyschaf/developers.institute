let arrayColors = ['darkblue',"blue",'lightblue','darkred', "red", "yellow", "green", 'pink', 'purple', 'black'];
// you can use an array rgba colors or hex colors


function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor)
		
	}
}


addColors()
let mouseFunction= false 

function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint")
	for (let i = 0; i<height*width; i++){
		let divColor = document.createElement("div");
		gridPaintSection.appendChild(divColor)
		
		
		divColor.addEventListener("mouseover",function(){
			if(mouseFunction){
			divColor.style.backgroundColor=colorPicked}})
		divColor.addEventListener("mousedown",function(){
			mouseFunction=true
			divColor.style.backgroundColor=colorPicked})
			divColor.addEventListener("mouseup",function(){
				mouseFunction= false})
				
			
				
	
	
	}
	// divColor.addEventListener("mouseover", )
}

addGrid()

let colorPicked

function pickColor(evt){
 	colorPicked = evt.target.style.backgroundColor;
	console.log(colorPicked)
	// divColor.style.backgroundColor=colorPicker
}
console.log(colorPicked)
// document.body.section[2]div[]