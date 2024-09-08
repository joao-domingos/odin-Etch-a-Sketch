// make the script run as soon as the page loads
document.addEventListener("DOMContentLoaded", () => {
    //just to test DOMCONTENTLOADER
    //console.log("DOM fully loaded and parsed");

    //select the class container from html file
    const container = document.querySelector(".container");

    //need to create a div for each element of a grid, 3x3, 16x16
    //need to always create a new div before append
    // 256 = 16x16
    for (let i = 0; i < 256; i++) {
        const createDiv = document.createElement("div");
        createDiv.textContent = i;
        container.appendChild(createDiv);
    }


    // after above, querySelectorAll() and forEach

})
