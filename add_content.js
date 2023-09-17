document.getElementById("add-paragraph").addEventListener("click", function() {
    
    // create new elements
    var newHeading = document.createElement("h1");
    var newDivImage = document.createElement("img");
    var newParagraph = document.createElement("p");

    // assign css classes to elements
    newHeading.classList.add("heading");
    newDivImage.classList.add("divider_img");
    newParagraph.classList.add("sample_text");

    // add content to created elements
    newHeading.textContent = "SAMPLE HEADING";
    newDivImage.src = "images/content/donuts_test01.png"
    newParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non finibus lacus. Suspendisse potenti. Pellentesque ut pulvinar odio. Aliquam purus augue, accumsan non turpis eget, sodales eleifend nunc. Maecenas sit amet pulvinar massa, ut egestas ex. Mauris congue diam vel arcu placerat ornare eget in felis. Nulla facilisi." +
    "Vivamus varius gravida odio, vel mollis tortor convallis in. Morbi volutpat nunc at auctor venenatis. Vivamus hendrerit consequat nibh ac suscipit. Integer quis facilisis quam. Mauris id fringilla velit. Curabitur rutrum est et tincidunt semper. Vivamus et neque a ligula interdum tincidunt sed ut urna. Aenean nec massa nulla. Etiam iaculis massa mauris, a laoreet sapien malesuada sodales." +
    "In a nisl nisl. Suspendisse non felis vitae orci ornare egestas. Duis ullamcorper euismod consequat. Praesent ligula ligula, lobortis sit amet scelerisque a, cursus ac nibh. Aliquam nec justo ac ligula ultrices blandit. Nulla eu odio vitae ex malesuada fermentum ac non magna. Cras tincidunt a quam at pellentesque.";


    // get container and add elements to it
    var blogContent = document.getElementById("main_content");

    blogContent.appendChild(newHeading);
    blogContent.appendChild(newDivImage);
    blogContent.appendChild(newParagraph);
});