const searchBtn = document.getElementById("search-btn");
const fact = document.getElementById("fact");

// event listeners
searchBtn.addEventListener("click", getFacts);
// test
function getFacts() {
  // let searchInputTxt = document.getElementById('search-input').value.trim();
  fetch(`https://catfact.ninja/fact?max_length=80`)
    .then((response) => response.json())
    // .then(data => console.log(data));
    .then((data) => {
      if (data) {
        let html = "";

        html += `<p class="w3-large w3-center" id="fact-text">${data.fact}</p>`;
        fact.innerHTML = html;
        // image.classList.remove('hidden');
      } else
        fact.innerHTML = `<p class="w3-large w3-center" id="fact-text">sorry</p>`;
    });
}
