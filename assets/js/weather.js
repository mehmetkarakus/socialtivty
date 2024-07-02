document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "b219e391fbc573fa128a3fc1dc2d88e6";

  // Şehirleri içeren select elementi
  const sehirSelect = document.getElementById("sehirSelect");

  // Türkiye'nin 81 ili (örnek olarak sadece bazıları)
  const iller = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];

  // Şehir seçimini seçili olarak Adana yap
  sehirSelect.value = "Adana";

  // Şehirleri seçenek olarak ekleme
  iller.forEach(function (sehir) {
    const option = document.createElement("option");
    option.textContent = sehir;
    option.value = sehir;
    sehirSelect.appendChild(option);
  });

  // Hava durumu verilerini getirme fonksiyonu
  function getWeatherData(sehir) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${sehir}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const weatherList = document.querySelector(".city__weather ul");
        weatherList.innerHTML = "";

        for (let i = 0; i < data.list.length; i += 8) {
          const weatherIcon = data.list[i].weather[0].icon;
          const weatherDescription = data.list[i].weather[0].description;
          const temp = Math.round(data.list[i].main.temp);
          const dayOfWeek = new Date(data.list[i].dt * 1000).toLocaleDateString("tr-TR", { weekday: "short" });

          // Kendi belirlediğiniz simge URL'lerini kullanın
          let customIconUrl = "";

          switch (weatherIcon) {
            case "01d":
            case "01n":
              customIconUrl = "assets/images/weather/clear.png";
              break;
            case "02d":
            case "02n":
            case "03d":
            case "03n":
            case "04d":
            case "04n":
              customIconUrl = "assets/images/weather/clouds.png";
              break;
            case "09d":
            case "09n":
            case "10d":
            case "10n":
              customIconUrl = "assets/images/weather/rain.png";
              break;
            case "11d":
            case "11n":
              customIconUrl = "assets/images/weather/drizzle.png";
              break;
            case "13d":
            case "13n":
              customIconUrl = "assets/images/weather/snow.png";
              break;
            case "50d":
            case "50n":
              customIconUrl = "assets/images/weather/mist.png";
              break;
            default:
              customIconUrl = "assets/images/weather/clear.png";
              break;
          }

          const listItem = document.createElement("li");
          listItem.classList.add("city__weather--detail");
          listItem.innerHTML = `
            <img src="${customIconUrl}" alt="${weatherDescription}" />
            <p class="city__weather--temp">${temp}°C</p>
            <p class="city__weather--day">${dayOfWeek.toUpperCase()}</p>
          `;
          weatherList.appendChild(listItem);
        }
      })
      .catch((error) => console.error("Hava durumu verileri alınamadı", error));
  }

  // Sayfa yüklendiğinde Adana'nın hava durumu verilerini göster
  getWeatherData("Adana");

  // Şehir seçimi değiştiğinde hava durumu verilerini güncelle
  sehirSelect.addEventListener("change", function () {
    const selectedSehir = sehirSelect.value;
    getWeatherData(selectedSehir);
  });
});
