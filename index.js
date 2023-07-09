
    function convertTemperature() {
      var celsius = document.getElementById("celsiusInput").value;
      var fahrenheit = document.getElementById("fahrenheitInput").value;

      if (celsius !== "") {
        var resultFahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheitInput").value = resultFahrenheit.toFixed(2);
        document.getElementById("resultText").textContent = `Converted to Fahrenheit: ${resultFahrenheit.toFixed(2)}°F`;
      } else if (fahrenheit !== "") {
        var resultCelsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsiusInput").value = resultCelsius.toFixed(2);
        document.getElementById("resultText").textContent = `Converted to Celsius: ${resultCelsius.toFixed(2)}°C`;
      } else 
        document.getElementById("resultText").textContent = "Please enter a temperature value.";
      
    }
