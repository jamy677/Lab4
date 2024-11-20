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
        // STEP 9a: Invoke the populateHeader function here, then build it below
        populateHeader(jsonObj);

        // STEP 10a: Invoke the showTopFlavors function here, then build it below
        showTopFlavors(jsonObj);
    } else {
        console.error("Error fetching JSON data.");
    }
}

// STEP 9b: Build out the populateHeader() function
function populateHeader(jsonObj) {
    const companyName = jsonObj.companyName;
    header.textContent = companyName;
}

// STEP 10b: Assemble the showTopFlavors() function
function showTopFlavors(jsonObj) {
    const topFlavors = jsonObj.topFlavors;
    
    topFlavors.forEach(flavor => {
        // STEP 10e: Build HTML elements for the content
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const pCalories = document.createElement('p');
        const pType = document.createElement('p');
        const ul = document.createElement('ul');
        const img = document.createElement('img');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL)
        h2.textContent = flavor.name;
        pCalories.textContent = `Calories: ${flavor.calories}`;
        pType.textContent = `Type: ${flavor.type}`;
        img.src = `images/${flavor.image}`;
        img.alt = flavor.name;

        // STEP 10g: Build a loop for the ingredients array in the JSON
        flavor.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
        });

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(pCalories);
        article.appendChild(pType);
        article.appendChild(img);
        article.appendChild(ul);

        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    });
}

// STEP 3b: Call the populate() function
populate();