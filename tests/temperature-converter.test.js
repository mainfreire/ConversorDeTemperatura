const {celsiusToFahrenheit, fahrenheitToCelsius} = require('../temperature-converter');
test('Celsius to Fahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(100)).toBe(212);
  expect(() => celsiusToFahrenheit(null)).toThrow('The Celsius value cannot be null');
});
test('Fahrenheit to Celsius', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
  expect(fahrenheitToCelsius(212)).toBe(19);
  expect(() => fahrenheitToCelsius(null)).toThrow('The Fahrenheit value cannot be null');
});
