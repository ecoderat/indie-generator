var myArray = [
 	"Yeşil",
	"Pembe",
	"Limon",
	"Babet",
	"Portakal",
	"Prens",
	"Mario",
	"Tetris",
	"Biberon",
	"Merve",
	"Kinder",
	"Özledim",
	"Sincap",
	"Haylaz",
	"Danino",
	"Saklanbaç"
];

var yourArray = [
	"ve",
	"ama",
	"bazı",
	"bir",
	"belki",
	"galiba",
	"birtakım",
	"acaba",
	"aslında",
	"hem",
	"fakat",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" "
];

var hisArray = [
	"Kedi",
	"Puding",
	"Kadıköy",
	"Kediköy",
	"Misket",
	"Taso",
	"Gofret",
	"Seksek",
	"Bulut",
	"Pikachu",
	"Turşu",
	"Karton",
	"Pati",
	"Kurdele",
	" ",
	" ",
	" ",
	" ",
	" "
];

var himArray = [
	"Mızıkacıları",
	"Fiyonkları",
	"Galerisi",
	"Turuncusu",
	"Kapısı",
	"Evi",
	"Felsefesi",
	"Mafyası",
	"Şehri",
	"Balesi",
	"Şeyler",
	"Bisikleti",
	"Adamlar",
	"Dolaylarında",
	"Bandosu",
	"Marmelatı",
	"Çiçekleri",
	"Günlükleri",
	"Çilekleri",
	"Paltosu",
	"Kazağı",
	"Kumpanyası"
];


var randomItem1;
var randomItem2;
var randomItem3;
var randomItem4;

function create () {
	randomItem1 = myArray[Math.floor(Math.random()*myArray.length)];
	randomItem2 = yourArray[Math.floor(Math.random()*yourArray.length)];
	randomItem3 = hisArray[Math.floor(Math.random()*hisArray.length)];
	randomItem4 = himArray[Math.floor(Math.random()*himArray.length)];
}


function render() {
	const screen = document.getElementById('screen');
	screen.innerText = randomItem1 +" "+ randomItem2 +" "+ randomItem3 +" "+ randomItem4;

}

document.getElementById('generate').addEventListener(
	'click',
	function () {
		create();
		render();
	}
);












