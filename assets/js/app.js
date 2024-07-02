const weatherData = [
  { day: "Pazartesi", temperature: "25°C", condition: "Güneşli" },
  { day: "Salı", temperature: "22°C", condition: "Parçalı Bulutlu" },
  { day: "Çarşamba", temperature: "20°C", condition: "Yağmurlu" },
  { day: "Perşembe", temperature: "24°C", condition: "Güneşli" },
  { day: "Cuma", temperature: "23°C", condition: "Bulutlu" },
];

// Hava durumu verilerini HTML'e ekleme
const weatherList = document.querySelector(".city__weather--gr");

weatherData.forEach((weather) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${weather.day}: ${weather.temperature} - ${weather.condition}`;
  weatherList.appendChild(listItem);
});
