
// Get the Values from the Page. (Controller Function)
function getValues() {
    
    // Get values from the page.
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Attempt to cast the string values into integer values.
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Input given for start and end values must be validated.
    if (Number.isInteger(startValue) && Number.isInteger(endValue) &&
    startValue >= 0 && startValue < 100 && endValue > 0 && endValue <= 100) {
        // Call generateNumbers().
        let numbers = generateNumbers(startValue, endValue);
        // Call displayNumbers().
        displayNumbers(numbers);  
    }
    else {
        alert("ERROR - You must enter integer values within the range of 0 - 100.");
    }

} 

// Generate numbers from the start value to the end value. (Logic Function)
function generateNumbers(startValue, endValue) {

    let numbers = [];

    // We want to get all numbers from start to end.
    // This loop will iterate until i = endValue.
    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }

    return numbers;

}

// Display the numbers and mark EVEN numbers BOLD. (Display Function)
function displayNumbers(numbers) {
    
    // General string used for generating HTML table on the app page.
    let templateRows = "";
    
    // Loops through the 'numbers' array of integer values and builds the HTML
    // string.
    for (let i = 0; i < numbers.length; i++) {
        
        let className = "even";
        let number = numbers[i];

        // Checking whether the current number in the array is odd or even.
        // If even, the number will be BOLDED.
        if (number % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }

        // Concatenates an HTML table row code onto the general string. 
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
        
    }

    // Inserts the concatenated string into the 'tbody' HTML element.
    document.getElementById("results").innerHTML = templateRows;

}

