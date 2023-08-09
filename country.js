const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

const displayCountries = (countries) => {
    const countriesHtml = countries.map(country => getCountriesHtml(country));
    console.log(countriesHtml.join(' '));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ')
}

const getCountriesHtml = country => {
    return `
  <div>
  <h2>${country.name.common}</>
  </br>
 <img src="${country.flags.png}">
  </div>
`

}


loadCountries();