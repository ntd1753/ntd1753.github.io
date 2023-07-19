// List of quotes
var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];
  
  // Function to change the quote
  function changeQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length); // Get a random index
    var quoteElement = document.getElementById("quote"); // Get the quote element
    quoteElement.textContent = quotes[randomIndex]; // Update the quote text
  }

  
  const p=document.querySelector("P");
  const btn2= document.querySelector("#btn-2");

  // Function to generate a random HEX color
    function generateRandomColor() {
        var hexCharacters = "0123456789ABCDEF"; // All possible HEX characters
        var color = "#"; // Initialize the color with the "#" symbol
  
    // Generate six random characters to form the HEX color
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * hexCharacters.length);
        color += hexCharacters.charAt(randomIndex);
    }
  
    return color; // Return the generated HEX color
  }
  
  
  btn2.onclick=function() {
    let x=generateRandomColor();
    p.style.color= `${x}`;
  }