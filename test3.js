var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tensOfTens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var hundreds = ["", "one hundred"];

function numtword (number) {
    if (number < 10) {
        return units[number];
    } else if (number < 20) {
        return teens[number - 10];
    } else if (number < 100) {
        var unit = number % 10;
        var ten = Math.floor(number / 10);
        return tensOfTens[ten - 1] + (unit ? "-" + units[unit] : "");
    } else {
        var hundred = Math.floor(number / 100);
        var remainder = number % 100;
        return hundreds[hundred] + (remainder ? " " + numtword(remainder) : "");
    }
}

var number = 4 ;
var words = numtword(number);
console.log(number + " - " + words); 
