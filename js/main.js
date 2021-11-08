/// get html btn for reload game 
const btn = document.getElementById('reload')

// var wich we need for work with cycle;
let howSquaresMade = 10;
const board = document.getElementById('squares')
const stateSquare = [];


// function create and append element.
function create() {
	let hello = document.createElement('div')
	hello.className = "square"
	board.append(hello)
	hello.addEventListener('click', () => {
		hello.classList.toggle('filled')
	})
	return hello
}

// cycle wich add created element in state Massive, and add lisener for evryone squares.
for (let i = 0; i < howSquaresMade; i++) {
	stateSquare[i] = [];
	for (let j = 0; j < howSquaresMade; j++) {
		stateSquare[i][j] = create();
	}
}


//function wich parse all of square 
function parse() {
	for (let i = 0; i < stateSquare.length; i++) {

		for (let j = 0; j < stateSquare[i].length; j++) {
			
			if(stateSquare[i][j].classList.contains('filled')) {
				stateSquare[i][j].classList.remove('filled')
			}	
		}
	}
}

//Listener which writes result click, and delete class.
btn.addEventListener('click', () => {
	parse()
})






