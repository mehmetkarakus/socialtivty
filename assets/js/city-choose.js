const iller = [
  { plaka: 1, isim: "Adana" },
  { plaka: 2, isim: "Adıyaman" },
  { plaka: 3, isim: "Afyonkarahisar" },
  { plaka: 4, isim: "Ağrı" },
  { plaka: 5, isim: "Amasya" },
  { plaka: 6, isim: "Ankara" },
  { plaka: 7, isim: "Antalya" },
  { plaka: 8, isim: "Artvin" },
  { plaka: 9, isim: "Aydın" },
  { plaka: 10, isim: "Balıkesir" },
  { plaka: 11, isim: "Bilecik" },
  { plaka: 12, isim: "Bingöl" },
  { plaka: 13, isim: "Bitlis" },
  { plaka: 14, isim: "Bolu" },
  { plaka: 15, isim: "Burdur" },
  { plaka: 16, isim: "Bursa" },
  { plaka: 17, isim: "Çanakkale" },
  { plaka: 18, isim: "Çankırı" },
  { plaka: 19, isim: "Çorum" },
  { plaka: 20, isim: "Denizli" },
  { plaka: 21, isim: "Diyarbakır" },
  { plaka: 22, isim: "Edirne" },
  { plaka: 23, isim: "Elazığ" },
  { plaka: 24, isim: "Erzincan" },
  { plaka: 25, isim: "Erzurum" },
  { plaka: 26, isim: "Eskişehir" },
  { plaka: 27, isim: "Gaziantep" },
  { plaka: 28, isim: "Giresun" },
  { plaka: 29, isim: "Gümüşhane" },
  { plaka: 30, isim: "Hakkari" },
  { plaka: 31, isim: "Hatay" },
  { plaka: 32, isim: "Isparta" },
  { plaka: 33, isim: "Mersin" },
  { plaka: 34, isim: "İstanbul" },
  { plaka: 35, isim: "İzmir" },
  { plaka: 36, isim: "Kars" },
  { plaka: 37, isim: "Kastamonu" },
  { plaka: 38, isim: "Kayseri" },
  { plaka: 39, isim: "Kırklareli" },
  { plaka: 40, isim: "Kırşehir" },
  { plaka: 41, isim: "Kocaeli" },
  { plaka: 42, isim: "Konya" },
  { plaka: 43, isim: "Kütahya" },
  { plaka: 44, isim: "Malatya" },
  { plaka: 45, isim: "Manisa" },
  { plaka: 46, isim: "Kahramanmaraş" },
  { plaka: 47, isim: "Mardin" },
  { plaka: 48, isim: "Muğla" },
  { plaka: 49, isim: "Muş" },
  { plaka: 50, isim: "Nevşehir" },
  { plaka: 51, isim: "Niğde" },
  { plaka: 52, isim: "Ordu" },
  { plaka: 53, isim: "Rize" },
  { plaka: 54, isim: "Sakarya" },
  { plaka: 55, isim: "Samsun" },
  { plaka: 56, isim: "Siirt" },
  { plaka: 57, isim: "Sinop" },
  { plaka: 58, isim: "Sivas" },
  { plaka: 59, isim: "Tekirdağ" },
  { plaka: 60, isim: "Tokat" },
  { plaka: 61, isim: "Trabzon" },
  { plaka: 62, isim: "Tunceli" },
  { plaka: 63, isim: "Şanlıurfa" },
  { plaka: 64, isim: "Uşak" },
  { plaka: 65, isim: "Van" },
  { plaka: 66, isim: "Yozgat" },
  { plaka: 67, isim: "Zonguldak" },
  { plaka: 68, isim: "Aksaray" },
  { plaka: 69, isim: "Bayburt" },
  { plaka: 70, isim: "Karaman" },
  { plaka: 71, isim: "Kırıkkale" },
  { plaka: 72, isim: "Batman" },
  { plaka: 73, isim: "Şırnak" },
  { plaka: 74, isim: "Bartın" },
  { plaka: 75, isim: "Ardahan" },
  { plaka: 76, isim: "Iğdır" },
  { plaka: 77, isim: "Yalova" },
  { plaka: 78, isim: "Karabük" },
  { plaka: 79, isim: "Kilis" },
  { plaka: 80, isim: "Osmaniye" },
  { plaka: 81, isim: "Düzce" },
];

const container = document.getElementById("city-list");

function displayCities(cities) {
  container.innerHTML = "";
  cities.forEach((il) => {
    const listItem = document.createElement("li");
    listItem.className = "city__card";
    listItem.innerHTML = `
      <a href="#" onclick="selectCity('${il.isim}')">
        <label class="city__card--df">
          <span>${il.plaka}</span>
          <span>${il.isim}</span>
        </label>
      </a>
    `;
    container.appendChild(listItem);
  });
}

// Şehir listesini başlangıçta göster
displayCities(iller);

function normalizeString(str) {
  const map = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    Ç: "c",
    Ğ: "g",
    İ: "i",
    Ö: "o",
    Ş: "s",
    Ü: "u",
  };
  return str.replace(/[çğıöşüÇĞİÖŞÜ]/g, (match) => map[match] || match).toLowerCase();
}

const searchText = document.getElementById("search-text");
searchText.addEventListener("input", () => {
  const searchTerm = normalizeString(searchText.value);
  const filteredCities = iller.filter((il) => normalizeString(il.isim).startsWith(searchTerm));
  displayCities(filteredCities);
});

// Seçilen şehri localStorage'a kaydet ve index.html sayfasına yönlendir
function selectCity(cityName) {
  localStorage.setItem("selectedCity", cityName); // Seçilen şehri localStorage'a kaydet
  window.location.href = "index.html"; // index.html sayfasına yönlendir
}