let heroes = [
		{
			id: 1, 
			name: "Hulk",
			friendly: "hulk",
			intelligence: 160,
			strength: 600000,
			speed: 75,
			durability: 100,
			gender: "M",
			height: 2.44,
			weight: 630
		},
		{
			id: 2, 
			name: "Iron Man",
			friendly: "ironman",
			intelligence: 170,
			strength: 200000,
			speed: 70,
			durability: 85,
			gender: "M",
			height: 1.98,
			weight: 191
		},
		{
			id: 3, 
			name: "Captain America" ,
			friendly: "captainamerica",
			intelligence: 145,
			strength: 600,
			speed: 45,
			durability: 55,
			gender: "M",
			height: 1.88,
			weight: 108
		},
		{
			id: 4, 
			name: "Wonder Woman",
			friendly: "wonderwoman",
			intelligence: 160,
			strength: "∞",
			speed: 95,
			durability: 100,
			gender: "F",
			height: 1.83,
			weight: 74
		},
		{
			id: 5, 
			name: "Batman",
			friendly: "batman",
			intelligence: 119,
			strength: 454,
			speed: 84,
			durability: 55,
			gender: "M",
			height: 1.85,
			weight: 85
		},
		{
			id: 6, 
			name: "Captain Marvel",
			friendly: "captainmarvel",
			intelligence: 157,
			strength: 250000,
			speed: 85,
			durability: 95,
			gender: "F",
			height: 1.80,
			weight: 74
		},
		{
			id: 7, 
			name: "Spider Man",
			friendly: "spiderman",
			intelligence: 165,
			strength: 25000,
			speed: 80,
			durability: 75,
			gender: "M",
			height: 1.78,
			weight: 74
		},
		{
			id: 8, 
			name: "Wolverine",
			friendly: "wolverine",
			intelligence: 140,
			strength: 2000,
			speed: 60,
			durability: 100,
			gender: "M",
			height: 1.60,
			weight: 135
		},
		{
			id: 9, 
			name: "Thanos",
			friendly: "thanos",
			intelligence: 170,
			strength: "∞",
			speed: 40,
			durability: 100,
			gender: "M",
			height: 2.01,
			weight: 443
		},
		{
			id: 10, 
			name: "Superman",
			friendly: "superman",
			intelligence: 165,
			strength: "∞",
			speed: 120,
			durability: 100,
			gender: "M",
			height: 1.91,
			weight: 101
		},
		{
			id: 11, 
			name: "Scarlet Witch",
			friendly: "scarletwitch",
			intelligence: 170,
			strength: 100,
			speed: 90,
			durability: 100,
			gender: "F",
			height: 1.70,
			weight: 59
		},
		{
			id: 12, 
			name: "Thor",
			friendly: "thor",
			intelligence: 145,
			strength: "∞",
			speed: 100,
			durability: 100,
			gender: "M",
			height: 1.98,
			weight: 288
		},
		{
			id: 13, 
			name: "Flash",
			friendly: "flash" ,
			intelligence: 140,
			strength: 100,
			speed: 120,
			durability: 60,
			gender: "M",
			height: 1.83,
			weight: 86
		},
		{
			id: 14, 
			name: "Green Arrow",
			friendly: "greenarrow",
			intelligence: 155,
			strength: 200,
			speed: 42,
			durability: 28,
			gender: "M",
			height: 1.88,
			weight: 88
		},
		{
			id: 15, 
			name: "Black Widow",
			friendly: "blackwidow",
			intelligence: 150,
			strength: 250,
			speed: 40,
			durability: 30,
			gender: "F",
			height: 1.70,
			weight: 59
		},
		{
			id: 16, 
			name: "Harley Quinn",
			friendly: "harleyquinn",
			intelligence: 160,
			strength: 200,
			speed: 40,
			durability: 65,
			gender: "F",
			height: 1.70,
			weight: 63
		},
		{
			id: 17, 
			name: "Catwoman",
			friendly: "catwoman",
			intelligence: 145,
			strength: 130,
			speed: 40,
			durability: 28,
			gender: "F",
			height: 1.75,
			weight: 61
		},
		{
			id: 18, 
			name: "Aquaman",
			friendly: "aquaman",
			intelligence: 155,
			strength: 200000,
			speed: 95,
			durability: 80,
			gender: "M",
			height: 1.85,
			weight: 146
		},
		{
			id: 19, 
			name: "He-Man",
			friendly: "heman",
			intelligence: 150,
			strength: "∞",
			speed: 85,
			durability: 90,
			gender: "M",
			height: 1.85,
			weight: 90
		},
		{
			id: 20, 
			name: "She-Ra",
			friendly: "Shera" ,
			intelligence: 150,
			strength: "∞",
			speed: 50,
			durability: 70,
			gender: "F",
			height: 1.78,
			weight: 70
		},
		{
			id: 21, 
			name: "Black Panther",
			friendly: "blackpanther" ,
			intelligence: 170,
			strength: 5000,
			speed: 72,
			durability: 75,
			gender: "M",
			height: 1.83,
			weight: 90
		},
		{
			id: 22, 
			name: "Goku",
			friendly: "goku" ,
			intelligence: 90,
			strength: 10000,
			speed: 84,
			durability: 110,
			gender: "M",
			height: 1.85,
			weight: 93
		},
		{
			id: 23, 
			name: "Phantom",
			friendly: "phantom" ,
			intelligence: 145,
			strength: 1000,
			speed: 58,
			durability: 50,
			gender: "M",
			height: 1.88,
			weight: 72
		}	
	];
	
function montaHtmlDoAtributo(nomeAtributo, valorAtributo) {
	let html = "";
	html += "<span class='heroAttributes'>";
	html += nomeAtributo;
	html += "</span>";
	html += "<span class='heroAttributesValues'>";
	html += valorAtributo;
	html += "</span>";
	return html;
}
	
var heroGrid = $("#heroGrid");
for (var i = 0; i < heroes.length; i++) {
	let html = "";
	
	html = "<div class='heroBox'>";
	html += "<img class='heroPicture' src='../Images/heroes/" + heroes[i].friendly + ".jpg' />";
	html += "<span class='heroName'>" + heroes[i].name + "</span>";
	html += montaHtmlDoAtributo("Inteligência", heroes[i].intelligence);
	html += montaHtmlDoAtributo("Força", heroes[i].strength);
	html += montaHtmlDoAtributo("Velocidade", heroes[i].speed);
	html += montaHtmlDoAtributo("Resistência", heroes[i].durability);
	html += montaHtmlDoAtributo("Sexo", heroes[i].gender);
	html += montaHtmlDoAtributo("Altura", heroes[i].height);
	html += montaHtmlDoAtributo("Peso", heroes[i].weight);
	html += "</div>";
	
	$(html).appendTo(heroGrid);
}