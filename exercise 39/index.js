const city_country = (city, country) => {
  document.getElementById("document").innerHTML += `${city}, ${country} <br>`;
};

city_country("lahore", "pakistan");
city_country("karachi", "pakistan");
city_country("New York", "United States");
