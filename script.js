// Notice the camel case for variable names
// Also helps to add consts for HTML elements to the top of the page
const recipeCardDiv = document.getElementsByClassName('recipe-card-div');
const recipeCardTitle = document.getElementsByClassName('recipe-card-title');
const recipleSearchInput = document.getElementsByClassName('recipe-search-input');
const recipeSearchButton = document.getElementById('recipe-search-button');

// Add event listener for the recipe search input field
recipleSearchInput.addEventListener('change', (e) => {
    console.log(e.target.value);
    const determineSearch = e.target.value;

    // Check if the value is the keyword
    if(determineSearch === "hello") {
        alert("hello - by Adele");
    } else {
        alert("Nice work!")
    }
})

// Add event listener for when user clicks on recipe search button
recipeSearchButton.addEventListener('click', (e) => {
    const getSearchString = recipeSearchInput.value;
    // Fetch the values associated with the string
    fetch(getSearchString).then((response) => {
        response.json()
    }).then((data) => {
        console.log(data)
    });
})

// Adding a comment for the function below
// Function parameter may not have to be entirely specific, but it helps to be specific
// There are some example below to help with understanding comments related to functions


// This function will add the three values together
function sumThreeElements(a, b, c) {
    return a + b + c;
}

// Helper function to sort items received
function mergeSort(array) {
    const indexOfHalf = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const leftArray = array.splice(0, indexOfHalf)
    return merge(mergeSort(leftArray),mergeSort(array))
}

// A helper function with the MergeSort function
// Combines both left and right list into one list, in sorted order
function merge(left, right) {
    let mergedList = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            mergedList.push(left.shift())  
        } else {
            mergedList.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...mergedList, ...left, ...right ]
}

