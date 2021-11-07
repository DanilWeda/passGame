// var wich we need for work with cycle;
let howSquaresMade = 10;
const board = document.getElementById('squares')
const stateSquare = [];


// function create and append element.
function create() {
	let hello = document.createElement('div')
	hello.className = "square"
	board.append(hello)
	return hello
}

// cycle wich add created element in state Massive, and add lisener for evryone squares.
for (let i = 0; i < howSquaresMade; i++) {
	stateSquare[i] = [];
	for (let j = 0; j < howSquaresMade; j++) {
		stateSquare[i][j] = create();
	}
	stateSquare[i].forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('black')
	})
})
}



