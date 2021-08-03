// document.getElementById("count-el").innerText = 3;
// mutliple lineh comments ctrl+k+c

/*4.Create variable
    let count = 0;
    console.log(count);
*/

/*5.Mathematical operations
    let myAge = 35;
    let humanDogRadio = 7;
    let myDogAge = myAge * humanDogRadio
    console.log(myDogAge);
*/

/*6.Reassigning & incrementing
    let count = 5;
    count = count + 5;
    console.log(count); //10

    let count = 50;
    console.log(count); //50
    count = count + 50;
    console.log(count); //100
    count = count - 75;
    console.log(count); //25
    count = count + 45;
    console.log(count); //70
*/

/* 21:41 onclick event listener
    var count = 0;
    function increment() {
        document.getElementById("count-el").innerText = ++count;  //count++ yapınca ilk basınca 0 sonra 1 attırır.
    }
    function decrease() {
        document.getElementById("count-el").innerText = --count;
    }
*/

/*
25:10 Using functions to write less code
    function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
*/

/*28:48 First function
    function number() {
        var num = 42;
        console.log(num);
    }
    number();
*/

/*29:34 Function that logs sum
    function sum() {
        let lap1 = 34;
        let lap2 = 35;
        let lap3 = 36;
        let totalTime =lap1 + lap2 + lap3;
        console.log(totalTime);
    }
    sum();
*/
/*32:25 Function that increments
    let lapsCompşeted = 0;
    function increment(){
        lapsCompleted = lapsCompleted + 1;
    }
    increment(); //1
    increment(); //2
    increment)() //3
    */

/*
34:23 Increment on clicks
36:35 Display count
41:53 Document Object Model
43:47 Display count w/ innerText
44:30 Create save button
    var count = 0;
    function increment() {
        document.getElementById("count-el").innerText = ++count;  //count++ yapınca ilk basınca 0 sonra 1 attırır.
    }
    function decrease() {
        document.getElementById("count-el").innerText = --count;
    }
    function save() {
        console.log(count);
    }
*/


/*46:40 What is string?
48:16 First string variable
    let username = "per";
    let message = "You have tree new notifications"
    console.log(message + " " + "!");
    let messageToUser = message + ", " username + "!"
    console.log(messageToUser);
*/

/*52:00 Log greeting to console
    let name = "salih";
    let greeting = "Hi, my name is ";
    let myGreeting = greeting + name
    console.log(myGreeting);
*/

/*53:18 Strings vs. Numbers
    console.log(4 + 5); //9
    console.log(4 + "5"); //"45"
    console.log("2" + "4"); //24*/


/*56:07 Render welcome message
    let welcomeEl = document.getElementById("welcome-el");
    let name = "salih";
    let greeting = "Hi, my name is ";
    welcomeEl.innerText = greeting + " " + name;
*/

/*58:10 Improve message w/ string concatenation
    let welcomeEl = document.getElementById("welcome-el");
    let name = "salih ";
    let greeting = "Hi, my name is ";
    welcomeEl.innerText = greeting + " " + name;
    welcomeEl.innerText += "😀";
 */



/*1:00:28 Use plus equal for count

*/
var count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
    count += 1;
    countEl.innerText = count;  //count++ yapınca ilk basınca 0 sonra 1 attırır.
}
function decrease() {
    countEl.innerText = --count;
}
function save() {
    saveEl.innerText += ` (${count}) - `;

}
/*1:00:57 Create save feature

*/

/*1:05:38 Debugging online

*/

/*1:09:31 Set count to 0

*/

/*1:12:28 Recap

*/

/*1:15:47 Variables practice

*/

/*1:17:42 Concatenate strings

*/

/*1:18:43 Incrementing & decrementing

*/
/*1:20:56 Strings & numbers

*/

/*1:22:35 Rendering error message

*/

/*1:25:52 Calculator challenge

*/