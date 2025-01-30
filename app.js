
class Food {
	constructor(name, carb, fat, protein) {
		this.name = name;
		this.carb = carb;
		this.fat = fat;
		this.protein = protein;
	}
	generateTableRow() {
		const foodRow = document.createElement("tr");
		foodRow.innerHTML = `<td>${this.name}</td><td>${this.carb}</td><td>${this.fat}</td><td>${this.protein}</td>`;
		return foodRow;
	}
}

const foodArray = [];

document.getElementById("form1").addEventListener("submit", function (event) {
	event.preventDefault();

	const name = document.getElementById("name").value;
	const carb = document.getElementById("carb").value;
	const fat = document.getElementById("fat").value;
	const protein = document.getElementById("protein").value;


	const food = new Food (name,carb,fat,protein);
	foodArray.push(food)
	console.log(foodArray)
	renderTable();
//	document.getElementById("name").value = "";
//	document.getElementById("carb").value = "";
// 	document.getElementById("fat").value = "";
//	document.getElementById("protein").value = "";

});

function renderTable() {
	const foodTable= document.getElementById("foodTableBody");
	foodTable.innerHTML = "";
	for (const food of foodArray) {
		foodTable.appendChild(food.generateTableRow())
	}
}

