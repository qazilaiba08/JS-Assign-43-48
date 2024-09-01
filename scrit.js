
let alt = document.getElementById("btn")
alt.addEventListener("click",() =>{
    document.querySelector("a").innerHTML = alert("Thanks For visit");
}) ;

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

let button = document.getElementById("btn")
button.addEventListener("click",() =>{
    document.querySelector("img").innerHTML = alert("Thanks For purchasing");
}) ;

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

const myTable = document.getElementById("data");
myTable.addEventListener("click", () =>{
    document.getElementById("data").innerHTML = "It's Been Deleted";
});


function myFunction() {
  myTable.removeEventListener("click", myFunction);
 };

//  5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

let counterValue = 0;

function updateCounter() {
    document.getElementById('counter').innerHTML = counterValue;
};
function increaseCounter() {
    counterValue++;
    updateCounter();
};
function decreaseCounter() {
    counterValue--;
    updateCounter();
};