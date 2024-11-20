// STEP 2: Reference the HEADER and the SECTION elements with variables
const header = document.querySelector("header h1");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // STEP 4: Store the URL of a JSON file in a variable
    const url = 'js/i-scream.json';

    // STEP 5: Use the new URL to create a new request object
    const response = await fetch(url);

    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    if (response.ok) {
        // STEP 7: Capture the returned Response object and convert to a JSON object using json()
        const jsonObj = await response.json();

        // STEP 8: Output the iScream JSON object to the console 
        console.log(jsonObj);