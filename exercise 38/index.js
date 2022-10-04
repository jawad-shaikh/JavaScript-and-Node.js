const describe_city = (city, country = "pakistan") => {
  document.getElementById(
    "document"
  ).innerHTML += `${city} is in ${country} <br>`;
};

describe_city("lahore");
describe_city("karachi");
describe_city("New York", "United States");
