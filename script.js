async function SearchPhotos() {

    // handle for input tag with id "search-bar" to get the search query entered by the user
    let query = document.getElementById("search-bar").value;

    // URL of Unsplash API
    let url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=Ae6mi5nWCx1XtB9PvdlhHej6_EY47AGEwQNYtzBhV6M`;

    //declare result variable
    let result;

    try {
        //Use Fetch API to asynchronously fetch images data from the Unsplash API
        const response = await fetch(url);

        //return JSON data 
        const data = await response.json();
        console.log(data);

        // empty the previous search result in before displaying the new one
        $("#container").empty()

        //iterate over all the images in the JSON data
        data.results.forEach((photo,index) =>{

            //create an img element and wrap it in anchor tag to dispay it on the web browser
            result = `
                <div class="col">
                    <a href="${photo.links.download}"  data-lightbox="models" data-title=${index+1}>
                        <img src="${photo.urls.thumb}" class="cards">
                    </a>
                </div>
            `;

            // append the newly created result element in div with id as "container"
            $("#container").append(result); 
        });
    } catch (error) {
        console.log('Error:', error);
    }
}
