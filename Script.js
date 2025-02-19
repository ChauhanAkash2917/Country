let countriesContainer = document.querySelector(".countries-container");
const searchInput = document.querySelector(".search-container");
// console.log(searchInput);

let Allcountry;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    Allcountry = data;
    rendercountries(data);
  });

function rendercountries(data) {
  countriesContainer.innerHTML = "";
  data.forEach((ele, i) => {
    // console.log(ele, i);
    let countryCard = document.createElement("a");
    countryCard.classList.add("countries-card");

    let CardHtml = `
<img src="${ele.flags.svg}" alt="" />
        <div class="card-text">
          <h3 class="card-title">${ele.name.common}</h3>
          <p><strong>Population:</strong>${ele.population.toLocaleString(
            "en-IN"
          )}</p>
          <p><strong>Region:</strong>${ele.region}</p>
          <p><strong>Capital:</strong>${ele.capital?.[0]}</p>
        </div>`;

    countryCard.innerHTML = CardHtml;
    countriesContainer.appendChild(countryCard);
  });
}

searchInput.addEventListener("input", (evt) => {
  // console.log(evt.target.value);
  let searchVlaue = evt.target.value.toLowerCase();
  // console.log(searchVlaue);

  let filtercountries = Allcountry.filter((country) => {
    // console.log(country);
    return country.name.common.toLowerCase().includes(searchVlaue);
  });
  rendercountries(filtercountries);

  // console.log(filtercountries);
});
// let countryCard = document.createElement("a");
// countryCard.classList.add("countries-card");

// let CardHtml = `
//  <img src="https://flagcdn.com/is.svg" alt="" />
//           <div class="card-text">
//             <h3 class="card-title">India</h3>
//             <p><strong>Population:</strong>82,800,9000</p>
//             <p><strong>Region:</strong>Asia</p>
//             <p><strong>Capital:</strong>Delhi</p>
//           </div>`;

// countryCard.innerHTML = CardHtml;

// countriesContainer.appendChild(countryCard);
// console.log(img);
