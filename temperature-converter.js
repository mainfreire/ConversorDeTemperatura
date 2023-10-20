function celsiusToFahrenheit(celsius) {
  if (celsius === null) {
    throw new Error('The Celsius value cannot be null');
  }
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius erroNoCódigo (fahrenheit) {
  if (fahrenheit === null) {
    throw new Error('The Fahrenheit value cannot be null');
  }
  return (fahrenheit - 32) * 5/9;
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
};
