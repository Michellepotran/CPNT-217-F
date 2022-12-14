// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

document.getElementById("contact-page").onclick = function() {  // the onclick will allow the user to click on the submit button and the corresponding submitMessage() function will execute 
    submitMessage()
};

function submitMessage () {
    document.getElementById("contact-page").innerHTML = "Thank you for your message!";
    document.getElementById("contact-page").style.fontSize = "25px";
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

