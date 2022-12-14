/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// creating variables for the cost per day 
var costPerDay = document.getElementById("calculated-cost");
var cost = 0; // initializing the cost per day 

// creating variables for each day of the week 
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

// creating variables for the half and full day buttons 
var halfButton = document.getElementById("half");
var fullButton = document.getElementById("full");

// resets the page because the full button has automatically been selected 
window.onload = startup;
function startup() {
    fullButton.classList.remove("clicked");
    calculation();
}

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// proper syntax: EventTarget.addEventListener(type, listener);

var weekdays = []; // initializing the array so that the days that are clicked are added to the end of this array 

// obtaining the property of the clicked element 

document.getElementById("monday").onclick = function() {  
    monClicked();
};

function monClicked() {
    monday.classList.add("clicked");
    weekdays.push(monday);
    calculation();
    
}

document.getElementById("tuesday").onclick = function() {  
    tueClicked();
};

function tueClicked() {
    tuesday.classList.add("clicked");
    weekdays.push(tuesday);
    calculation();
    
}

document.getElementById("wednesday").onclick = function() {  
    wedClicked();
};

function wedClicked() {
    wednesday.classList.add("clicked");
    weekdays.push(wednesday);
    calculation();
    
}

document.getElementById("thursday").onclick = function() {  
    thurClicked();
};

function thurClicked() {
    thursday.classList.add("clicked");
    weekdays.push(thursday);
    calculation();
    
}

document.getElementById("friday").onclick = function() {  
    friClicked();
};

function friClicked() {
    friday.classList.add("clicked");
    weekdays.push(friday);
    calculation();
    
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById("clear-button").onclick = function() {
    remove();
};

function remove() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    halfButton.classList.remove("clicked");
    fullButton.classList.remove("clicked");
    weekdays = [];
    calculation();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var dailyRate = 0; // initializing the daily rate 

function halfDay() {
    if (!halfButton.classList.contains("Clicked")){
        halfButton.classList.add("clicked");
        fullButton.classList.remove("clicked");
        dailyRate = 20;
        calculation();
    }
}

halfButton.addEventListener("click", halfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay() {
    if (!fullButton.classList.contains("Clicked")){
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
        dailyRate = 35;
        calculation();
    }
}

fullButton.addEventListener("click", fullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculation() {
    cost = dailyRate * weekdays.length;
    costPerDay.innerHTML = cost;
}



