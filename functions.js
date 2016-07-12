/**
 *  Below are some specifications for Functions to be built.
 *
 *  #1
 *  Declare Two Variables
 *     - `a` random Number value
 *     - `b` random Number value

 *
 *  We will be using both of these variables to pass as `parameters` to the
 *  following functions that we will write. Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */
var a = 10;
var b = 2;

/**
 *  #2
 *  Function - add
 *
 *  This function returns the result of adding `a` and `b` together.
 *  Store this value in a variable named `sum`.
 */

function add (number1, number2){
	return number1 + number2;
}
add();
var sum = add(a,b);
console.log(sum);



//function add (dog, cat) {

/**
 *  #3
 *  Function - subtract
 *
 *  This function returns the result of subtracting `b` from `a`.
 *  Store this value in a variable named `difference`
 */
function subtract (dog, cat){
return dog - cat ;
}

subtract ();
var difference = subtract (a, b);
console.log(difference);


/**
 *  #4
 *  Function - multiply
 *
 *  This function returns the result of multiplying `b` by `a`.
 *  Store this value in a variable named `product`
 */
function multiply (b, a) {
	return b * a ;
}
multiply();
var product = multiply (b, a);
console.log(product); 



/**
 *  #5
 *  Function - checkDifference
 *
 *  This function accesses the value stored in the `difference`
 *  variable and uses this number to return the string
 *  "My football team lost X times this week", where `X` is the
 *  value stored in `difference`.
 */
function checkDifference(loses) {
 
return "My football team lost " +loses+" times this week";
}
checkDifference();

console.log(checkDifference(difference));

/**
 *  #6
 *  Function - checkSum
 *
 *  This function checks the value stored at `sum` and
 *  uses that number to print to the screen the phrase
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  stored in the variable `sum`.
 */
function checkSum (dog, cat) {
	return "I CAN ADDZ "+sum+" NUMBERS";
}
checkSum();
console.log(checkSum());
/**
 *  #7
 *  Function - checkProduct
 *
 *  This function checks the value stored at `product` and
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 */
function checkProduct (dog, cat){
	return dog * cat * dog - cat;}
checkProduct();
console.log(checkProduct());




/**
 *  #8
 *  Function - addThenSubtract *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Th
 en with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */


/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */


/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`

 */
 //function createFullName(firstName,lastName){
 	//var result = "";
 	//result = firstName + " " + lastName
 	//return result; 
 //}

//var myName = createFullName("Wainani","Texeira")
//var neighbor = ("Holly","Would")
//console.log(myName);
//console.log("My neighbor's names is ", neighbor);
/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */
//function verifyDrinkingAge(age){
	//var result; 

	//result = age >+21;

	//return  result;
//}

 //var canDrinkBeer = verifyDrinkingAge(25)  //invoking
 //console.log("Can I drink beer? : " + canDrinkBeer);

/**
 *  #12
 *  Function - throwParty
 *
 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */
//function throwParty (){

	//if (canDrinkBeer) 
	//{
    //result= (This party will have an open bar)
    //console.log ("This Party will have an open bar");
//} else    
//}
//throwParty(canDrinkBeer);
//console.log (throwParty());


/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */


/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */
// function whatISayAtParties(canDrinkBeer,howMany) {
// 	if (canDrinkBeer){
// 		console.log("chug");
// 	}
// 	whatISayAtParties(canDrinkBeer);


// }


// Loop syntax 
//

//for (var i = 0; i <= howMany; i++){
	//console.log("Hi there!");
//}

//canDrinkBeer = false;

//function whatISayAtParties(drinkingStatus,times){

//if (drinkingSatus) }

	//for (var i =0; i < times; i++){
		//console.log ("Chug!");
	//}

//}else{

	//for(var i = 0; i < times; i++){
		//console.log("No! I am under 21!!!");
	//}
	//}
//}

//var howMany = 10;
//canDrinkBeer =true;
//whatISAyAtParties(canDrinkBeer,howMany);


























