//alert("Hi");

function shake() {
    //alert("Signs Point To Yes")
    var myFortune = getFortune()
    displayFortune(myFortune)
}

function displayFortune(fortune) {
    // alert(fortune)
    document.getElementById("fortune-display").innerHTML = fortune
}

function getFortune() {
    var listOfFortunes = getListOfFortunes()
    var randomNumber = getRandomNumberLessThan(listOfFortunes.length)

    return listOfFortunes[randomNumber]
}

function getListOfFortunes(){
return ["yes","no","maybe","ask again later", "Yes!!!!"]
}

function getRandomNumberLessThan(max) {
var randomDecimal = (Math.random() * max)
return Math.floor(randomDecimal)
}