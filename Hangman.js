<script type="text/javascript">
	
var wordBank = ["titanic", "heat", "fury road", "vanilla sky", "truman show", "star wars", "taxi driver", "inception"];

//var el = document.getElementById("test");
	//el.innerHTML = wordBank;


//Takes answer wordBank array and randomly chooses a string. Then multiplies by amount of strings in the array.
var answer = wordBank[Math.floor(Math.random() * wordBank.length)];
document.getElementsByTagName('#answer')[0].innerHTML = answer;


//Empty array that holds the word bank strings in order to create underlines for the chosen word
var answerArr = [];

for (var i = 0; i < answer.length; i++) {
	answerArr[i] = "_";
}

document.getElementsByTagName('answer array')[0].innerHTML = answerArr;

var guesses = answer.length;

while (remainder > 0) {
	var el = document.getElementById("test");
	el.innerHTML = ;

	if (remainder === null) {
		break;
	} 
	else if (remainder.length !=== 1)
		alert("please enter a single letter");
} 
document.getElementsByTagName('guess')[0].innerHTML = guesses;

//updating answer
	else { 
		for (var e = 0; e < answer.length; e++) {
			if (answer[e] === remainder) {
				answerArr[j] = remainder;
				guesses--;
			}
		}

	}








</script>

