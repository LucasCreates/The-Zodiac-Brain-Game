
var generateCards = generateRandomCards(4);
var cards = document.querySelectorAll("img");
var flipCards = document.querySelectorAll(".flip-card-front");
var counter = 0;
var zodiacNames = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"]
console.log(zodiacNames);
var isCardFlipped = true;


//var ZodiacCards = 

for(var i = 0;i < cards.length; i++){
    var setCards = cards[i];
    console.log(setCards);
}
for(var x = 0; x <= 12; x++){
   
    console.log(x);
}


var aries = document.getElementById("aries").src;


/*for (var i = 0; i < cards.length; i++){
    console.log(cards[i]);
    cards[i].addEventListener("click", function(){
        this.style.transform = "180deg";
    });
}*/

//testCards[i].addEventListener("click", function(){
   // this.style.backgroundColor = "white";



for (var i = 0; i < flipCards.length; i++){
   // flipCards[i].
    flipCards[i].addEventListener("click", function(){

        this.classList.toggle("flip-card-back");
        if(this.value === aries){
            counter++
            console.log("working");
        }
        console.log(zodiacNames[0]);
        counter++;
        console.log(counter);
        if(counter === 3){
            console.log("Test");
            counter = 0;
        }
        
    });
}
// explore this below as it could help solve the solution for wanting to get value on card click
/*for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = "pickedColor";
			resetBtn.textContent = "Play Again";
			changeColors(clickedColor);
		}
		else {
			
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}	

*/









function generateRandomCards(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomCard());
	}
	return arr;
}

function randomCard(){
	var r = Math.floor(Math.random() * setCards);
	

	return r;
}

