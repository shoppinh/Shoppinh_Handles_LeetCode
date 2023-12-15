/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function (paths) {
  const fromCities = new Set();
  const toCities = new Set();
  for (const element of paths) {
    fromCities.add(element[0]);
    toCities.add(element[1]);
  }
  for (let city of toCities) {
    if (!fromCities.has(city)) {
      return city;
    }
  }
};

// Tests
console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ]),
  "Sao Paulo"
);
