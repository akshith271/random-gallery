import imageService from "./scripts/imageService.js";

const resultsText = document.getElementById("resultsText");
imageService.random(30).then((results) => {
  resultsText.innerText = "Showing random images";
  renderImages(results);
});

document.getElementById("search").addEventListener("change", (evt) => {
  renderSearchResults(evt.target.value);
});

function renderImages(images) {
  const columnOne = document.getElementById("column-1");
  const columnTwo = document.getElementById("column-2");
  const columnThree = document.getElementById("column-3");
  columnOne.innerHTML = "";
  columnTwo.innerHTML = "";
  columnThree.innerHTML = "";
  images.forEach((item, index) => {
    const content = populateImage(item); //generating html

    switch (index % 3) {
      case 0:
        columnOne.innerHTML += content;
        break;
      case 1:
        columnTwo.innerHTML += content;
        break;
      case 2:
        columnThree.innerHTML += content;
        break;
    }
  });
}

function renderSearchResults(query) {
  imageService.search(query).then((response) => {
    renderImages(response.results);
    resultsText.innerText = `Showing top results for "${query}"`;
    console.log("search results:", response);
  });
}

function populateImage(item) {
  return `
    <div class="item">
  <img src="${item.urls.small}" alt="${item.alt_description}" />
  <div class="overlay">
    <div class="button-container">
      <button class="awe-button">
        <a href="${item.urls.raw}" target="_blank"> ${item.alt_description} </a>
      </button>
    </div>
  </div>
</div>

`;
}
