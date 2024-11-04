// Task 2: Fetch Products from the API Using Fetch and Promises

fetch(`https://www.course-api.com/javascript-store-products`)
    .then(response => {
        if (!response.ok) {
            throw new error(`failed to fetch data: ` + response.statusText);
        }
        return.response.json(); 
    })
    .then(data => {
        const productlist = document.getElementById(`productlist`);

    })
    .catch(error => {
        consolelog.error(`Error:` , error);
        const productlist = document.getElementById(`productlist`);
        productlist.innerHTML = `<p>Unable to load products. Please try again later.<p>`;
    })